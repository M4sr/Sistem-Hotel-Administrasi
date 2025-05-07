import { NextAuthOptions, DefaultSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

// Extend session user type
type ExtendedUser = DefaultSession["user"] & {
  id: string
  role?: string
  permissions?: string[]
}

declare module "next-auth" {
  interface Session {
    user: ExtendedUser
  }

  interface User extends ExtendedUser {}
}

declare module "next-auth/jwt" {
  interface JWT extends ExtendedUser {}
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/dashboard-admin-secure/login',
    error: '/dashboard-admin-secure/login',
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
        token.permissions = user.permissions
        token.image = user.image
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id
        session.user.role = token.role
        session.user.permissions = token.permissions
        session.user.image = token.image
      }
      return session
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email dan password harus diisi")
        }

        const user = await prisma.user.findUnique({
          where: { 
            email: credentials.email 
          },
          include: {
            role: {
              include: {
                permissions: true
              }
            }
          }
        })

        if (!user || !user.password) {
          throw new Error("Email atau password salah")
        }

        const isValidPassword = await bcrypt.compare(credentials.password, user.password)
        
        if (!isValidPassword) {
          throw new Error("Email atau password salah")
        }

        return {
          id: user.id,
          email: user.email || "",
          name: user.name || "",
          image: user.image || "",
          role: user.role?.name || "User",
          permissions: user.role?.permissions.map(p => p.name) || []
        }
      }
    })
  ]
} 
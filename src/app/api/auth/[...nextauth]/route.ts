import NextAuth, { DefaultSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

// Extend next-auth types
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string
      role?: string
      permissions?: string[]
      telepon?: string
      image?: string
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role?: string
    permissions?: string[]
    telepon?: string
    image?: string
  }
}

type AuthUser = {
  id: string
  email: string
  name: string
  role: string
  permissions: string[]
}

const handler = NextAuth({
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
        token.telepon = user.telepon
        token.image = user.image
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id
        session.user.role = token.role
        session.user.permissions = token.permissions
        session.user.telepon = token.telepon
        session.user.image = token.image
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect callback - url:", url, "baseUrl:", baseUrl)
      
      // Jika URL dimulai dengan /dashboard-admin-secure, izinkan redirect
      if (url.startsWith("/dashboard-admin-secure")) {
        console.log("Redirecting to admin URL:", url)
        return url
      }
      
      // Jika tidak, kembalikan ke baseUrl
      console.log("Redirecting to baseUrl:", baseUrl)
      return baseUrl
    }
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
          where: { email: credentials.email },
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

        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.password
        )
          
          if (!isValidPassword) {
          throw new Error("Email atau password salah")
          }
          
          return {
            id: user.id,
            email: user.email || "",
            name: user.name || "",
            role: user.role?.name || "User",
            permissions: user.role?.permissions.map(p => p.name) || [],
            telepon: user.telepon || "",
            image: user.image || ""
        }
      }
    })
  ]
})

export { handler as GET, handler as POST } 
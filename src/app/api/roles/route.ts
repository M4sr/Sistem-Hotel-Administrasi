import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

// GET /api/roles
export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const roles = await prisma.role.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        permissions: {
          select: {
            name: true,
            description: true
          }
        },
        _count: {
          select: {
            users: true
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    })

    return NextResponse.json(roles)
  } catch (error) {
    console.error("[ROLES_GET]", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, description, permissions } = body

    const role = await prisma.role.create({
      data: {
        name,
        description,
        permissions: {
          create: permissions.map((permission: string) => ({
            name: permission,
            description: `Permission untuk ${permission}`,
          })),
        },
      },
      include: {
        permissions: true,
        _count: {
          select: {
            users: true,
          },
        },
      },
    })

    return NextResponse.json(role)
  } catch (error) {
    console.error("Error creating role:", error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
} 
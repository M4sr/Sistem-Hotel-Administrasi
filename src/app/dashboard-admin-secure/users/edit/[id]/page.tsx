import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import EditUserForm from "./EditUserForm"

export default async function EditUserPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    return null
  }

  const user = await prisma.user.findUnique({
    where: { 
      id: params.id
    },
    select: {
      id: true,
      name: true,
      email: true,
      telepon: true,
      roleId: true,
      image: true,
      role: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  })

  if (!user) {
    return null
  }

  // Fetch available roles for the form
  const roles = await prisma.role.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: 'asc'
    }
  })

  // Pastikan user memiliki roleId yang valid
  if (!user.roleId || !user.role) {
    // Jika tidak ada roleId, gunakan role pertama sebagai default
    const defaultRole = roles[0]
    if (defaultRole) {
      user.roleId = defaultRole.id
      user.role = defaultRole
    }
  }

  return <EditUserForm initialData={user} roles={roles} />
} 
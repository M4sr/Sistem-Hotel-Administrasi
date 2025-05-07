import { prisma } from "@/lib/prisma"
import { PERMISSIONS } from "./permissions"

interface Permission {
  name: string
  description: string | null
}

export async function initializeRoles() {
  const adminRole = await prisma.role.upsert({
    where: { name: "Admin" },
    update: {},
    create: {
      name: "Admin",
      description: "Akses penuh ke semua fitur sistem",
      permissions: {
        create: Object.values(PERMISSIONS).flatMap(permissionGroup =>
          Object.values(permissionGroup)
        ).map(permission => ({
          name: permission,
          description: `Permission untuk ${permission}`,
        })),
      },
    },
  })

  const staffRole = await prisma.role.upsert({
    where: { name: "Staff" },
    update: {},
    create: {
      name: "Staff",
      description: "Akses terbatas untuk operasional harian",
      permissions: {
        create: [
          PERMISSIONS.DASHBOARD.VIEW,
          PERMISSIONS.HOTELS.VIEW,
          PERMISSIONS.ROOMS.VIEW,
          PERMISSIONS.BOOKINGS.VIEW,
          PERMISSIONS.BOOKINGS.CREATE,
          PERMISSIONS.BOOKINGS.UPDATE,
          PERMISSIONS.PAYMENTS.VIEW,
          PERMISSIONS.PAYMENTS.CREATE,
          PERMISSIONS.PAYMENTS.UPDATE,
        ].map(permission => ({
          name: permission,
          description: `Permission untuk ${permission}`,
        })),
      },
    },
  })

  return { adminRole, staffRole }
}

export async function getUserPermissions(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      role: {
        include: {
          permissions: true,
        },
      },
    },
  })

  return user?.role?.permissions.map((p: Permission) => p.name) || []
}

export function hasPermission(userPermissions: string[], requiredPermission: string) {
  return userPermissions.includes(requiredPermission)
}

export function checkMenuAccess(userPermissions: string[], menuPermissions: string[]) {
  return menuPermissions.some(permission => hasPermission(userPermissions, permission))
} 
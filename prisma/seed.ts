import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

// Definisi permission
const PERMISSIONS = {
  DASHBOARD: {
    VIEW: "dashboard:view",
  },
  HOTELS: {
    VIEW: "hotels:view",
    CREATE: "hotels:create",
    UPDATE: "hotels:update",
    DELETE: "hotels:delete",
  },
  ROOMS: {
    VIEW: "rooms:view",
    CREATE: "rooms:create",
    UPDATE: "rooms:update",
    DELETE: "rooms:delete",
  },
  BOOKINGS: {
    VIEW: "bookings:view",
    CREATE: "bookings:create",
    UPDATE: "bookings:update",
    DELETE: "bookings:delete",
  },
  PAYMENTS: {
    VIEW: "payments:view",
    CREATE: "payments:create",
    UPDATE: "payments:update",
    DELETE: "payments:delete",
  },
  USERS: {
    VIEW: "users:view",
    CREATE: "users:create",
    UPDATE: "users:update",
    DELETE: "users:delete",
  },
  ROLES: {
    VIEW: "roles:view",
    CREATE: "roles:create",
    UPDATE: "roles:update",
    DELETE: "roles:delete",
  },
}

async function main() {
  // Hapus data yang ada
  await prisma.user.deleteMany()
  await prisma.role.deleteMany()
  await prisma.permission.deleteMany()

  // Buat semua permission
  const allPermissions = Object.values(PERMISSIONS).flatMap(permissionGroup =>
    Object.values(permissionGroup)
  ).map(permission => ({
    name: permission,
    description: `Permission untuk ${permission}`,
  }))

  // Buat permission di database
  for (const permission of allPermissions) {
    await prisma.permission.create({
      data: permission
    })
  }

  // Buat role Admin dengan semua permission
  const adminRole = await prisma.role.create({
    data: {
      name: 'Admin',
      description: 'Administrator sistem dengan akses penuh',
      permissions: {
        connect: allPermissions.map(p => ({ name: p.name }))
      }
    },
  })

  // Buat role Pengguna dengan permission terbatas
  const userRole = await prisma.role.create({
    data: {
      name: 'Pengguna',
      description: 'Pengguna biasa dengan akses terbatas',
      permissions: {
        connect: [
          PERMISSIONS.HOTELS.VIEW,
          PERMISSIONS.ROOMS.VIEW,
          PERMISSIONS.BOOKINGS.VIEW,
          PERMISSIONS.BOOKINGS.CREATE,
          PERMISSIONS.PAYMENTS.VIEW,
          PERMISSIONS.PAYMENTS.CREATE,
        ].map(name => ({ name }))
      }
    },
  })

  // Buat admin default
  const hashedPassword = await bcrypt.hash('admin123', 10)
  await prisma.user.create({
    data: {
      name: 'Administrator',
      email: 'admin@hotel.com',
      password: hashedPassword,
      roleId: adminRole.id,
    },
  })

  console.log('Database telah di-seed dengan:')
  console.log('- Role Admin dengan semua permission')
  console.log('- Role Pengguna dengan permission terbatas')
  console.log('- Admin default (email: admin@hotel.com, password: admin123)')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 
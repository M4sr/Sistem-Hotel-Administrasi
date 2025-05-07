const { PrismaClient, PeranPengguna } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

// Definisi permission yang sesuai dengan src/lib/roles.ts
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
  try {
    console.log('Mulai seeding database...')

    // Hapus data yang ada
    await prisma.user.deleteMany()
    await prisma.permission.deleteMany()
    await prisma.role.deleteMany()

    // Buat semua permissions
    console.log('Membuat permissions...')
    const permissionsList = Object.values(PERMISSIONS).flatMap(group => 
      Object.values(group)
    )
    
    const permissions = await Promise.all(
      permissionsList.map(permissionName =>
        prisma.permission.create({
          data: {
            name: permissionName,
            description: `Permission untuk ${permissionName}`
          }
        })
      )
    )
    console.log('✓ Permissions berhasil dibuat')

    // Buat role Admin dengan semua permissions
    console.log('Membuat role Admin...')
    const adminRole = await prisma.role.create({
      data: {
        name: 'Admin',
        description: 'Administrator dengan akses penuh',
        permissions: {
          connect: permissions.map(p => ({ id: p.id }))
        }
      }
    })
    console.log('✓ Role Admin berhasil dibuat')

    // Buat role Pengguna dengan permissions terbatas
    console.log('Membuat role Pengguna...')
    const userPermissions = [
      PERMISSIONS.DASHBOARD.VIEW,
      PERMISSIONS.HOTELS.VIEW,
      PERMISSIONS.ROOMS.VIEW,
      PERMISSIONS.BOOKINGS.VIEW,
      PERMISSIONS.BOOKINGS.CREATE,
      PERMISSIONS.PAYMENTS.VIEW,
      PERMISSIONS.PAYMENTS.CREATE,
    ]
    
    const userRole = await prisma.role.create({
      data: {
        name: 'Pengguna',
        description: 'Pengguna dengan akses terbatas',
        permissions: {
          connect: permissions
            .filter(p => userPermissions.includes(p.name))
            .map(p => ({ id: p.id }))
        }
      }
    })
    console.log('✓ Role Pengguna berhasil dibuat')

    // Buat user Admin
    console.log('Membuat user Admin...')
    const adminPassword = await bcrypt.hash('admin123', 10)
    const admin = await prisma.user.create({
      data: {
        name: 'Administrator',
        email: 'admin@hotel.com',
        password: adminPassword,
        peran: PeranPengguna.ADMIN,
        role: {
          connect: { id: adminRole.id }
        }
      }
    })
    console.log('✓ User Admin berhasil dibuat')

    // Buat user Pengguna
    console.log('Membuat user Pengguna...')
    const userPassword = await bcrypt.hash('user123', 10)
    const user = await prisma.user.create({
      data: {
        name: 'Pengguna',
        email: 'user@hotel.com',
        password: userPassword,
        peran: PeranPengguna.PENGGUNA,
        role: {
          connect: { id: userRole.id }
        }
      }
    })
    console.log('✓ User Pengguna berhasil dibuat')

    console.log('\nSeeding selesai! ✨')
    console.log('\nCredentials untuk login:')
    console.log('Admin:')
    console.log('- Email:', admin.email)
    console.log('- Password: admin123')
    console.log('\nPengguna:')
    console.log('- Email:', user.email)
    console.log('- Password: user123')

  } catch (error) {
    console.error('Error saat seeding:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

main()
  .catch((e) => {
    console.error('Seeding gagal:', e)
    process.exit(1)
  }) 
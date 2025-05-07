const PERMISSIONS = {
  DASHBOARD: {
    VIEW: 'dashboard.view'
  },
  USERS: {
    VIEW: 'users.view',
    CREATE: 'users.create',
    UPDATE: 'users.update',
    DELETE: 'users.delete'
  },
  HOTELS: {
    VIEW: 'hotels.view',
    CREATE: 'hotels.create',
    UPDATE: 'hotels.update',
    DELETE: 'hotels.delete'
  },
  ROOMS: {
    VIEW: 'rooms.view',
    CREATE: 'rooms.create',
    UPDATE: 'rooms.update',
    DELETE: 'rooms.delete'
  },
  BOOKINGS: {
    VIEW: 'bookings.view',
    CREATE: 'bookings.create',
    UPDATE: 'bookings.update',
    DELETE: 'bookings.delete'
  },
  PAYMENTS: {
    VIEW: 'payments.view',
    CREATE: 'payments.create',
    UPDATE: 'payments.update',
    DELETE: 'payments.delete'
  },
  REVIEWS: {
    VIEW: 'reviews.view',
    CREATE: 'reviews.create',
    UPDATE: 'reviews.update',
    DELETE: 'reviews.delete'
  }
}

module.exports = {
  PERMISSIONS
} 
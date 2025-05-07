export const PERMISSIONS = {
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

export function hasPermission(userPermissions: string[], requiredPermission: string) {
  return userPermissions.includes(requiredPermission)
}

export function checkMenuAccess(userPermissions: string[], menuPermissions: string[]) {
  return menuPermissions.some(permission => hasPermission(userPermissions, permission))
} 
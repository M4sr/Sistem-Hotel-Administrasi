/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['yxfmpfbxxcimvnvlcufn.supabase.co'],
  },
  // Tambahkan konfigurasi untuk production
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
}

module.exports = nextConfig 
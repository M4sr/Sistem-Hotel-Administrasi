'use client';

export default function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen" suppressHydrationWarning>
      {children}
    </div>
  )
} 
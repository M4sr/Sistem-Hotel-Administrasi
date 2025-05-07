export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-pink-50">
      {children}
    </div>
  );
} 
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import SessionProvider from "@/components/providers/SessionProvider";
import PublicLayout from "@/components/layout/PublicLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HotelKu - Temukan Hotel Impian Anda",
  description: "Temukan pengalaman menginap terbaik dengan berbagai pilihan hotel mewah di seluruh Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <SessionProvider>
          <PublicLayout>
            {children}
          </PublicLayout>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}

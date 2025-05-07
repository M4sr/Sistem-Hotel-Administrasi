"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import dynamic from 'next/dynamic'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Icons } from "@/components/icons"
import { Building2, Hotel, Key, Mail, Users } from "lucide-react"
import adminLoginAnimation from "@/animations/admin-login.json"

// Dynamic import untuk Lottie
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-slate-200 border-t-slate-500 rounded-full animate-spin" />
    </div>
  ),
})

// Schema validasi form
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email harus diisi")
    .email("Format email tidak valid"),
  password: z
    .string()
    .min(6, "Password minimal 6 karakter")
    .max(50, "Password terlalu panjang"),
})

type LoginForm = z.infer<typeof loginSchema>

const features = [
  {
    icon: Building2,
    title: "Manajemen Hotel",
    description: "Kelola informasi hotel, kamar, dan fasilitas dengan mudah"
  },
  {
    icon: Hotel,
    title: "Booking System",
    description: "Sistem pemesanan yang efisien dan user-friendly"
  },
  {
    icon: Users,
    title: "User Management",
    description: "Kelola pengguna dan hak akses dengan aman"
  }
]

export default function AdminLoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard-admin-secure"

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: LoginForm) {
    setIsLoading(true)
    console.log("[LOGIN] Mulai proses login dengan:", data)

    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      console.log("[LOGIN] Hasil signIn:", result)

      if (result?.error) {
        console.error("[LOGIN] Login error:", result.error)
        form.setError("root", { 
          message: "Email atau password salah" 
        })
        return
      }

      if (result?.ok) {
        console.log("[LOGIN] Login berhasil, redirect ke dashboard")
        router.push("/dashboard-admin-secure")
        router.refresh()
      }
    } catch (error) {
      console.error("[LOGIN] Error saat login:", error)
      form.setError("root", { 
        message: "Terjadi kesalahan saat login" 
      })
    } finally {
      setIsLoading(false)
      console.log("[LOGIN] Selesai proses login")
    }
  }

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex overflow-hidden rounded-smooth gradient-border-right corner-smooth-gradient">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-gradient" />
        
        {/* Corner softening effects */}
        <div className="absolute top-0 right-0 w-[120px] h-[120px]">
          <div className="absolute inset-0 bg-gradient-to-bl from-slate-800/30 via-slate-900/20 to-transparent rounded-br-[60px]" />
          <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.02] via-transparent to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 w-[120px] h-[120px]">
          <div className="absolute inset-0 bg-gradient-to-tl from-slate-800/30 via-slate-900/20 to-transparent rounded-tr-[60px]" />
          <div className="absolute inset-0 bg-gradient-to-tl from-white/[0.02] via-transparent to-transparent" />
        </div>
        
        {/* Smooth right border effect */}
        <div className="absolute right-0 top-0 h-full w-[150px]">
          {/* Multi-layer fade out effect */}
          <div className="absolute right-0 h-full w-full">
            <div className="absolute inset-y-[40px] right-0 left-0 bg-gradient-to-l from-slate-50/[0.08] via-slate-900/[0.03] to-transparent dark:from-slate-950/[0.08] dark:via-slate-900/[0.03] animate-float opacity-70" />
            <div className="absolute inset-y-[40px] right-0 left-0 bg-gradient-to-l from-slate-50/[0.05] via-slate-900/[0.02] to-transparent dark:from-slate-950/[0.05] dark:via-slate-900/[0.02] animate-float opacity-50" style={{ animationDelay: '-2s' }} />
            <div className="absolute inset-y-[40px] right-0 left-0 bg-gradient-to-l from-slate-50/[0.03] via-slate-900/[0.01] to-transparent dark:from-slate-950/[0.03] dark:via-slate-900/[0.01] animate-float opacity-30" style={{ animationDelay: '-4s' }} />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 flex items-center text-lg font-medium transition-transform hover:scale-105">
          <Hotel className="mr-2 h-6 w-6 transition-all duration-300 ease-in-out" />
          Sistem Booking Hotel
        </div>
        
        {/* Animasi Lottie dengan transisi */}
        <div className="relative z-20 flex-1 flex items-center justify-center py-12 transition-all duration-500 ease-in-out">
          <div className="w-full max-w-[400px] hover:scale-105 transition-transform duration-300">
            <Lottie 
              animationData={adminLoginAnimation}
              loop={true}
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="relative z-20 mt-auto">
          <div className="grid gap-6">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="flex items-center gap-4 transition-all duration-300 hover:translate-x-2"
                style={{ 
                  animationDelay: `${i * 200}ms`,
                  animation: 'slideIn 0.5s ease-out forwards'
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800/50 backdrop-blur-lg transition-colors hover:bg-slate-700/50">
                  <feature.icon className="h-6 w-6 text-slate-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-200">{feature.title}</h3>
                  <p className="text-sm text-slate-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative p-4 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        {/* Left side multi-layer fade effect */}
        <div className="absolute left-0 top-0 h-full w-[150px]">
          <div className="absolute inset-y-[40px] left-0 right-0">
            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.08] via-white/[0.03] to-transparent dark:from-slate-950/[0.08] dark:via-slate-900/[0.03] animate-float opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] via-white/[0.02] to-transparent dark:from-slate-950/[0.05] dark:via-slate-900/[0.02] animate-float opacity-50" style={{ animationDelay: '-3s' }} />
          </div>
        </div>
        
        <div className="mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[350px] relative">
          <Card className="border-0 shadow-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/90 transition-all duration-300 hover:shadow-2xl glass-morphism animate-glow">
            <CardHeader className="space-y-1 pb-4">
              <div className="flex justify-center mb-2">
                <div className="rounded-full bg-slate-100 dark:bg-slate-800 p-3 transition-transform duration-300 hover:scale-110 shadow-glow">
                  <Hotel className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                </div>
              </div>
              <CardTitle className="text-2xl text-center animate-fadeIn">Login Admin</CardTitle>
              <CardDescription className="text-center animate-fadeIn text-sm">
                Masuk ke dashboard admin sistem booking hotel
              </CardDescription>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className={form.formState.errors.root ? 'animate-shake' : ''}>
                <CardContent className="space-y-4 pb-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-sm transition-colors duration-200">Email</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400 transition-colors group-hover:text-slate-500" />
                            <Input
                              {...field}
                              className="pl-9 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 h-10 transition-all duration-200 focus:ring-2 focus:ring-slate-400 focus:border-transparent hover:border-slate-300"
                              type="email"
                              placeholder="admin@hotel.com"
                              disabled={isLoading}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-sm transition-colors duration-200">Password</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <Key className="absolute left-3 top-2.5 h-4 w-4 text-slate-400 transition-colors group-hover:text-slate-500" />
                            <Input
                              {...field}
                              className="pl-9 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 h-10 transition-all duration-200 focus:ring-2 focus:ring-slate-400 focus:border-transparent hover:border-slate-300"
                              type="password"
                              placeholder="••••••"
                              disabled={isLoading}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  {form.formState.errors.root && (
                    <div className="text-xs text-red-500 text-center animate-fadeIn">
                      {form.formState.errors.root.message}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="pb-4">
                  <Button 
                    className="w-full bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-900 hover:to-slate-800 text-white h-10 text-sm transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 shadow-glow-sm" 
                    type="submit" 
                    disabled={isLoading}
                  >
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Masuk
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  )
} 
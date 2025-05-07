"use client"

import dynamic from "next/dynamic"
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })
import Link from "next/link"
import { useState, Fragment } from "react"
import { motion } from "framer-motion"
import masukLottie from "@/animations/masuk.json"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Dialog, Transition } from "@headlessui/react"
import { CheckCircle2, XCircle } from "lucide-react"

export default function LoginPage() {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [showAlert, setShowAlert] = useState<{type: 'success'|'error', message: string}|null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    setLoading(true)
    
    const form = e.currentTarget
    const email = (form.elements.namedItem("email") as HTMLInputElement).value
    const password = (form.elements.namedItem("password") as HTMLInputElement).value
    
    console.log("[LOGIN] Mencoba login dengan:", { email })
    
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      console.log("[LOGIN] Hasil login:", result)

      if (result?.error) {
        setShowAlert({type: 'error', message: 'Email atau password salah!'})
        setTimeout(() => setShowAlert(null), 2500)
        setError("Email atau password salah!")
        return
      }

      if (result?.ok) {
        setShowAlert({type: 'success', message: 'Login berhasil! Selamat datang kembali'})
        setTimeout(() => {
          setShowAlert(null)
          router.push("/")
          router.refresh()
        }, 1800)
        console.log("[LOGIN] Login berhasil, redirect ke home")
      }
    } catch (error) {
      console.error("[LOGIN] Error saat login:", error)
      setShowAlert({type: 'error', message: 'Terjadi kesalahan saat login'})
      setTimeout(() => setShowAlert(null), 2500)
      setError("Terjadi kesalahan saat login")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-pink-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-3xl shadow-2xl p-0 w-full max-w-2xl flex flex-col md:flex-row overflow-hidden"
      >
        {/* Lottie kiri */}
        <div className="flex items-center justify-center bg-pink-50 md:bg-gradient-to-br md:from-pink-100 md:to-white md:w-1/2 p-8 md:p-10 flex-col text-center">
          <Lottie animationData={masukLottie} loop={true} className="w-40 h-50 md:w-86 md:h-86 mb-4" />
          <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">Selamat Datang Kembali!</h2>
          <p className="text-gray-500 text-sm md:text-base">Masuk untuk mengelola booking, dapatkan promo spesial, dan nikmati pengalaman menginap terbaik bersama HotelKu.</p>
        </div>
        {/* Form kanan */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-10">
          <h1 className="text-3xl font-extrabold text-pink-600 mb-2 text-center">Selamat Datang!</h1>
          <p className="text-gray-500 text-center mb-6">Masuk ke akun HotelKu untuk mulai booking hotel impianmu.</p>
          <form className="space-y-5 w-full max-w-xs" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input name="email" type="email" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-200" placeholder="Masukkan email" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input name="password" type="password" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-200" placeholder="Masukkan password" required />
            </div>
            {error && <div className="text-red-600 text-sm text-center animate-pulse">{error}</div>}
            <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-bold text-lg shadow transition disabled:opacity-60" disabled={loading}>{loading ? "Memproses..." : "Login"}</button>
          </form>
          <div className="w-full max-w-xs flex justify-end mt-2">
            <Link href="/forgot-password" className="text-pink-500 hover:underline text-sm font-medium">Lupa Password?</Link>
          </div>
          <div className="text-center text-sm text-gray-500 mt-6">
            Belum punya akun?{' '}
            <Link href="/register" className="text-pink-600 hover:underline font-semibold">Daftar</Link>
          </div>
        </div>
      </motion.div>
      {/* Modal Alert */}
      <Transition show={!!showAlert} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setShowAlert(null)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
            leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
                leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={`w-full max-w-xs transform rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all flex flex-col items-center justify-center relative ${showAlert?.type === 'success' ? 'border-green-200' : 'border-red-200'}`}>
                  {showAlert?.type === 'success' ? (
                    <CheckCircle2 className="w-12 h-12 text-green-500 mb-2" />
                  ) : (
                    <XCircle className="w-12 h-12 text-red-500 mb-2" />
                  )}
                  <div className={`text-lg font-bold mb-2 ${showAlert?.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{showAlert?.type === 'success' ? 'Berhasil' : 'Gagal'}</div>
                  <div className="text-gray-600 mb-2">{showAlert?.message}</div>
                  <button onClick={() => setShowAlert(null)} className="mt-2 px-4 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm">Tutup</button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
} 
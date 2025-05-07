"use client"

import { useState } from "react"
import Link from "next/link"
import { toast } from "sonner"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setSubmitted(false)

    try {
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Terjadi kesalahan")
      }

      setSubmitted(true)
      toast.success("Link reset password telah dikirim ke email Anda")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Terjadi kesalahan")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-pink-50">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center">
        <h1 className="text-2xl font-extrabold text-pink-600 mb-2 text-center">Lupa Password?</h1>
        <p className="text-gray-500 text-center mb-6">Masukkan email yang terdaftar untuk menerima link reset password.</p>
        
        {submitted ? (
          <div className="text-center">
            <div className="text-green-600 font-semibold mb-4">
              Link reset password telah dikirim ke email Anda
            </div>
            <p className="text-gray-600 mb-4">
              Silakan cek inbox email Anda. Jika tidak ada di inbox, cek folder spam.
            </p>
            <Link 
              href="/login" 
              className="text-pink-600 hover:text-pink-700 font-medium"
            >
              Kembali ke Login
            </Link>
          </div>
        ) : (
          <form className="space-y-5 w-full" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                type="email"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-200"
                placeholder="Masukkan email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-bold text-lg shadow transition disabled:opacity-60" 
              disabled={loading}
            >
              {loading ? "Mengirim..." : "Kirim Link Reset"}
            </button>
          </form>
        )}
        
        <div className="w-full flex justify-between mt-6 text-sm">
          <Link href="/login" className="text-pink-500 hover:underline">Kembali ke Login</Link>
          <Link href="/register" className="text-pink-500 hover:underline">Daftar Akun</Link>
        </div>
      </div>
    </div>
  )
} 
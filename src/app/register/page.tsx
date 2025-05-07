"use client";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Link from "next/link";
import { useState, Fragment } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import daftarLottie from "@/animations/daftar.json";
import { Dialog, Transition } from "@headlessui/react";
import { CheckCircle2, XCircle } from "lucide-react";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showAlert, setShowAlert] = useState<{type: 'success'|'error', message: string}|null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    const confirm = (form.elements.namedItem("confirm") as HTMLInputElement).value;
    if (password !== confirm) {
      setError("Konfirmasi password tidak cocok");
      setShowAlert({type: 'error', message: 'Konfirmasi password tidak cocok'});
      setTimeout(() => setShowAlert(null), 2500);
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Gagal mendaftar");
        setShowAlert({type: 'error', message: data.error || 'Gagal mendaftar'});
        setTimeout(() => setShowAlert(null), 2500);
      } else {
        setSuccess("Registrasi berhasil! Silakan login.");
        setShowAlert({type: 'success', message: 'Registrasi berhasil! Silakan login.'});
        setTimeout(() => {
          setShowAlert(null);
          router.push("/login");
        }, 1800);
      }
    } catch (err) {
      setError("Terjadi kesalahan jaringan");
      setShowAlert({type: 'error', message: 'Terjadi kesalahan jaringan'});
      setTimeout(() => setShowAlert(null), 2500);
    } finally {
      setLoading(false);
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
          <Lottie animationData={daftarLottie} loop={true} className="w-40 h-50 md:w-86 md:h-86 mb-4" />
          <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-2">Ayo Bergabung!</h2>
          <p className="text-gray-500 text-sm md:text-base">Daftar gratis & nikmati kemudahan booking hotel terbaik, promo eksklusif, dan pengalaman menginap yang menyenangkan di HotelKu.</p>
        </div>
        {/* Form kanan */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-10">
          <h1 className="text-3xl font-extrabold text-pink-600 mb-2 text-center">Buat Akun Baru</h1>
          <p className="text-gray-500 text-center mb-6">Daftar untuk mulai booking hotel impianmu di HotelKu.</p>
          <form className="space-y-5 w-full max-w-xs" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
              <input name="name" type="text" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-200" placeholder="Nama lengkap" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input name="email" type="email" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-200" placeholder="Masukkan email" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input name="password" type="password" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-200" placeholder="Buat password" required minLength={6} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Konfirmasi Password</label>
              <input name="confirm" type="password" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-200" placeholder="Ulangi password" required minLength={6} />
            </div>
            {error && <div className="text-red-600 text-sm text-center animate-pulse">{error}</div>}
            {success && <div className="text-green-600 text-sm text-center">{success}</div>}
            <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-bold text-lg shadow transition disabled:opacity-60" disabled={loading}>{loading ? "Mendaftar..." : "Daftar"}</button>
          </form>
          <div className="text-center text-sm text-gray-500 mt-6">
            Sudah punya akun?{' '}
            <Link href="/login" className="text-pink-600 hover:underline font-semibold">Login</Link>
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
  );
} 
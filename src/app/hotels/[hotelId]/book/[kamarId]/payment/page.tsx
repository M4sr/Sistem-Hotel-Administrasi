"use client";
import { useEffect, useState, use } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Users, BedDouble, CreditCard, Loader2, CheckCircle2, XCircle, Banknote, Wallet, X } from "lucide-react";

export default function PaymentPage({ params }: { params: Promise<{ hotelId: string, kamarId: string }> }) {
  const { hotelId, kamarId } = use(params);
  const router = useRouter();
  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [notif, setNotif] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("transfer");

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/bookings/latest?hotelId=${hotelId}&kamarId=${kamarId}`);
        const data = await res.json();
        if (res.ok) {
          setBooking(data);
        } else {
          throw new Error(data.error || "Gagal mengambil data booking");
        }
      } catch (err) {
        setNotif({ type: "error", message: "Gagal mengambil data booking" });
      } finally {
        setLoading(false);
      }
    };

    if (hotelId && kamarId) {
      fetchBooking();
    }
  }, [hotelId, kamarId]);

  // Auto hide notifikasi setelah 5 detik
  useEffect(() => {
    if (notif) {
      const timer = setTimeout(() => {
        setNotif(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notif]);

  const handlePayment = async () => {
    setSubmitting(true);
    setNotif(null);
    try {
      const res = await fetch("/api/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingId: booking.id,
          paymentMethod,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setNotif({ type: "success", message: "Pembayaran berhasil!" });
        router.push("/user/bookings");
      } else {
        setNotif({ type: "error", message: data.error || "Pembayaran gagal" });
      }
    } catch (err) {
      setNotif({ type: "error", message: "Terjadi kesalahan saat pembayaran" });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 flex flex-col items-center py-8 px-2">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 border border-pink-100 mt-8 animate-pulse">
          <div className="h-8 w-2/3 bg-gray-200 rounded mb-4" />
          <div className="h-4 w-1/2 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-1/3 bg-gray-200 rounded" />
        </div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 flex flex-col items-center py-8 px-2">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 border border-pink-100 mt-8">
          <div className="text-center text-red-500">Data booking tidak ditemukan</div>
        </div>
      </div>
    );
  }

  // Hitung total hari
  const checkIn = new Date(booking.checkIn);
  const checkOut = new Date(booking.checkOut);
  const totalDays = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
  const totalPrice = booking.kamar.harga * totalDays;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 flex flex-col items-center py-8 px-2">
      {/* Notifikasi Modern */}
      <AnimatePresence>
        {notif && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md"
          >
            <div className={`rounded-xl shadow-lg p-4 flex items-center justify-between gap-3 ${
              notif.type === "success" 
                ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white" 
                : "bg-gradient-to-r from-red-400 to-rose-500 text-white"
            }`}>
              <div className="flex items-center gap-3">
                {notif.type === "success" ? (
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                ) : (
                  <XCircle className="w-6 h-6 flex-shrink-0" />
                )}
                <p className="font-medium">{notif.message}</p>
              </div>
              <button 
                onClick={() => setNotif(null)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }} 
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 border border-pink-100 mt-8"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-pink-600">Pembayaran</h2>

        {/* Detail Booking */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }} 
          className="mb-6 p-4 bg-pink-50 rounded-xl"
        >
          <h3 className="font-semibold text-lg mb-2">Detail Booking</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Hotel</span>
              <span className="font-medium">{booking.kamar.hotel.nama}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Kamar</span>
              <span className="font-medium">{booking.kamar.nama}
                {booking.kamar.nomorKamar && (
                  <span className="bg-pink-200 text-pink-700 text-xs px-2 py-0.5 rounded-full ml-2 border border-pink-300 font-bold">
                    No. {booking.kamar.nomorKamar}
                  </span>
                )}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Check-in</span>
              <span className="font-medium">{new Date(booking.checkIn).toLocaleDateString('id-ID')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Check-out</span>
              <span className="font-medium">{new Date(booking.checkOut).toLocaleDateString('id-ID')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Jumlah Tamu</span>
              <span className="font-medium">{booking.jumlahTamu} orang</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Durasi</span>
              <span className="font-medium">{totalDays} malam</span>
            </div>
            <div className="border-t border-pink-200 my-2 pt-2">
              <div className="flex justify-between font-bold text-pink-600">
                <span>Total Pembayaran</span>
                <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Metode Pembayaran */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }} 
          className="mb-6"
        >
          <h3 className="font-semibold text-lg mb-3">Pilih Metode Pembayaran</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-pink-50 transition">
              <input
                type="radio"
                name="paymentMethod"
                value="transfer"
                checked={paymentMethod === "transfer"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-pink-600"
              />
              <div className="flex items-center gap-2">
                <Banknote className="w-5 h-5 text-pink-600" />
                <span>Transfer Bank</span>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-pink-50 transition">
              <input
                type="radio"
                name="paymentMethod"
                value="ewallet"
                checked={paymentMethod === "ewallet"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-pink-600"
              />
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5 text-pink-600" />
                <span>E-Wallet</span>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-pink-50 transition">
              <input
                type="radio"
                name="paymentMethod"
                value="credit"
                checked={paymentMethod === "credit"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-pink-600"
              />
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-pink-600" />
                <span>Kartu Kredit</span>
              </div>
            </label>
          </div>
        </motion.div>

        {/* Tombol Bayar */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          disabled={submitting}
          onClick={handlePayment}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2"
        >
          {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
          {submitting ? "Memproses..." : "Bayar Sekarang"}
        </motion.button>
      </motion.div>
    </div>
  );
} 
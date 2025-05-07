"use client";
import { useEffect, useState, use } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CalendarDays, Users, BedDouble, Loader2, CheckCircle2, XCircle } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingKamarPage({ params }: { params: Promise<{ hotelId: string, kamarId: string }> }) {
  const { hotelId, kamarId } = use(params);
  const [kamar, setKamar] = useState<any>(null);
  const [hotel, setHotel] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ checkIn: "", checkOut: "", jumlahTamu: 1, permintaanKhusus: "" });
  const [submitting, setSubmitting] = useState(false);
  const [notif, setNotif] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const router = useRouter();
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const kamarRes = await fetch(`/api/kamar/${kamarId}`);
      const kamarData = await kamarRes.json();
      setKamar(kamarData);
      const hotelRes = await fetch(`/api/hotels/${hotelId}`);
      const hotelData = await hotelRes.json();
      setHotel(hotelData);
      setLoading(false);
    };
    if (hotelId && kamarId) fetchData();
  }, [hotelId, kamarId]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckIn = (date: Date | null) => {
    setCheckInDate(date);
    setForm({ ...form, checkIn: date ? date.toISOString().split('T')[0] : "" });
    if (checkOutDate && date && checkOutDate < date) {
      setCheckOutDate(null);
      setForm(f => ({ ...f, checkOut: "" }));
    }
  };

  const handleCheckOut = (date: Date | null) => {
    setCheckOutDate(date);
    setForm({ ...form, checkOut: date ? date.toISOString().split('T')[0] : "" });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    setNotif(null);
    try {
      // Ambil userId
      const userRes = await fetch("/api/users/me");
      const userData = await userRes.json();
      if (!userRes.ok || !userData?.id) throw new Error("Gagal mengambil data user");
      const userId = userData.id;
      // Hitung totalHarga
      const checkIn = new Date(form.checkIn);
      const checkOut = new Date(form.checkOut);
      const totalNights = Math.max(1, Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)));
      const totalHarga = (kamar?.harga || 0) * totalNights;
      // Submit ke API bookings
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          kamarId,
          checkIn: form.checkIn,
          checkOut: form.checkOut,
          totalHarga,
          jumlahTamu: Number(form.jumlahTamu),
          permintaanKhusus: form.permintaanKhusus,
          status: "PENDING",
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setNotif({ type: "success", message: "Booking berhasil!" });
        setTimeout(() => router.push(`/hotels/${hotelId}/book/${kamarId}/payment`), 1800);
      } else {
        setNotif({ type: "error", message: data.error || "Booking gagal" });
      }
    } catch (err) {
      setNotif({ type: "error", message: "Terjadi kesalahan saat booking" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-purple-50 flex flex-col items-center py-12 px-2 md:mt-22">
      {/* Notifikasi Modern */}
      {notif && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md"
        >
          <div className={`rounded-xl shadow-lg p-4 flex items-center gap-3 ${
            notif.type === "success" 
              ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white" 
              : "bg-gradient-to-r from-red-400 to-rose-500 text-white"
          }`}>
            {notif.type === "success" ? (
              <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
            ) : (
              <XCircle className="w-6 h-6 flex-shrink-0" />
            )}
            <p className="font-medium">{notif.message}</p>
          </div>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-2xl bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-0 border border-pink-100 mt-8 relative overflow-hidden"
        style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)" }}
      >
        {/* Header Gradient & Gambar Kamar */}
        <div className="relative h-48 md:h-64 w-full flex items-end justify-start bg-gradient-to-r from-pink-400/80 to-purple-400/80">
          <Image
            src={kamar?.gambar?.[0]?.url || "/images/room1.jpg"}
            alt={kamar?.nama || "Foto kamar hotel"}
            fill
            className="object-cover w-full h-full absolute top-0 left-0 z-0 opacity-80"
          />
          <div className="relative z-10 p-3 w-full flex flex-col md:flex-row md:items-end md:justify-between gap-4 pt-20">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-white/80 text-pink-600 font-bold px-3 py-1 rounded-full text-xs shadow">{hotel?.nama}</span>
              </div>
              <div className="font-bold text-lg text-pink-600 mb-1 flex flex-wrap items-center gap-2 min-w-0 mt-1 md:mt-0">{kamar?.nama}
                {kamar?.nomorKamar && (
                  <span className="bg-pink-200 text-pink-700 text-xs sm:text-xs px-2 py-0.5 rounded-full ml-2 border border-pink-300 font-bold max-w-[80px] truncate">
                    No. {kamar.nomorKamar}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <BedDouble className="w-5 h-5" /> {kamar?.tipe_bed}
                <Users className="w-5 h-5" /> {kamar?.kapasitas} Tamu
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold px-4 py-2 rounded-2xl text-base md:text-lg shadow-lg border-2 border-white/40 mb-2">Rp {kamar?.harga?.toLocaleString("id-ID")}/malam</span>
              <span className="bg-white/70 text-pink-500 text-xs px-3 py-1 rounded-full font-semibold shadow">Booking Aman & Mudah</span>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="h-2 bg-gradient-to-r from-pink-100 via-white to-purple-100 w-full" />
        {/* Form Booking */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 p-8 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1 text-pink-700">Tanggal Check-in</label>
              <div className="relative">
                <DatePicker
                  selected={checkInDate}
                  onChange={handleCheckIn}
                  minDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/yyyy"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 bg-white/80"
                  calendarClassName="!border-pink-300 !shadow-lg !rounded-2xl !p-2"
                  popperClassName="z-[9999]"
                  showPopperArrow={false}
                  popperPlacement="bottom-start"
                  portalId="datepicker-portal"
                  customInput={
                    <input
                      type="text"
                      className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 bg-white/80 pr-10"
                      readOnly
                    />
                  }
                />
                <CalendarDays className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-pink-700">Tanggal Check-out</label>
              <div className="relative">
                <DatePicker
                  selected={checkOutDate}
                  onChange={handleCheckOut}
                  minDate={checkInDate || new Date()}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/yyyy"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 bg-white/80"
                  calendarClassName="!border-pink-300 !shadow-lg !rounded-2xl !p-2"
                  popperClassName="z-[9999]"
                  showPopperArrow={false}
                  popperPlacement="bottom-start"
                  portalId="datepicker-portal"
                  customInput={
                    <input
                      type="text"
                      className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 bg-white/80 pr-10"
                      readOnly
                    />
                  }
                />
                <CalendarDays className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-pink-700">Jumlah Tamu</label>
              <input type="number" name="jumlahTamu" value={form.jumlahTamu} min={1} max={kamar?.kapasitas || 10} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 bg-white/80" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-pink-700">Permintaan Khusus <span className="text-gray-400 text-xs">(opsional)</span></label>
              <input type="text" name="permintaanKhusus" value={form.permintaanKhusus} onChange={handleChange} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 bg-white/80" placeholder="Contoh: Kamar dekat lift, tanpa rokok, dll" />
            </div>
          </div>
          <motion.button whileTap={{ scale: 0.97 }} disabled={submitting} type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2">
            {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
            {submitting ? "Memproses..." : "Booking Sekarang"}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}

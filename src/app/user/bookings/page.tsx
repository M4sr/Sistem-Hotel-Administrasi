'use client'

import { useEffect, useState } from 'react';
import MobileHeader from '../../../components/user/MobileHeader';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, ClockIcon, CurrencyDollarIcon, XCircleIcon, StarIcon } from '@heroicons/react/24/solid';
import { Dialog } from '@headlessui/react';
import { useRouter } from 'next/navigation';

const statusMap: Record<string, { color: string; icon: any; label: string }> = {
  DIKONFIRMASI: { color: 'bg-green-100 text-green-700', icon: CheckCircleIcon, label: 'Dikonfirmasi' },
  DIBAYAR: { color: 'bg-blue-100 text-blue-700', icon: CurrencyDollarIcon, label: 'Dibayar' },
  PENDING: { color: 'bg-yellow-100 text-yellow-700', icon: ClockIcon, label: 'Menunggu' },
  BATAL: { color: 'bg-red-100 text-red-700', icon: XCircleIcon, label: 'Dibatalkan' },
};

export default function UserBookingsPage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [selectedReviewBooking, setSelectedReviewBooking] = useState<any>(null);
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewComment, setReviewComment] = useState('');
  const [reviewLoading, setReviewLoading] = useState(false);
  const [reviewNotif, setReviewNotif] = useState<string|null>(null);
  const [showReviewSuccess, setShowReviewSuccess] = useState(false);
  const [reviewAnonim, setReviewAnonim] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      const res = await fetch('/api/bookings');
      const data = await res.json();
      const userRes = await fetch('/api/users/me');
      const user = await userRes.json();
      const filtered = data.filter((b: any) => b.userId === user.id);
      setBookings(filtered);
      setLoading(false);
    };
    fetchBookings();
  }, []);

  return (
    <>
      <MobileHeader title="Riwayat Booking" className="md:hidden">
        <EllipsisVerticalIcon className="w-7 h-7 text-pink-400" />
      </MobileHeader>
      <div className="min-h-screen bg-gradient-to-br from-white font-sans max-w-3xl mx-auto px-4 py-10 md:mt-24">
        <h1 className="text-2xl font-bold mb-6 text-pink-600">Riwayat Booking</h1>
        {loading ? (
          <div className="flex flex-col items-center py-20 animate-pulse">
            <svg className="w-12 h-12 text-pink-400 animate-spin mb-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
            <div className="h-6 w-2/3 bg-gray-200 rounded mb-2" />
            <div className="h-4 w-1/2 bg-gray-200 rounded mb-2" />
            <div className="h-4 w-1/3 bg-gray-200 rounded" />
          </div>
        ) : bookings.length === 0 ? (
          <div className="flex flex-col items-center py-20 text-gray-400">
            <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h.007v.008H8.25V6.75zm0 10.5h.007v.008H8.25v-.008zm7.5-10.5h.007v.008h-.007V6.75zm0 10.5h.007v.008h-.007v-.008z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <div className="text-lg font-semibold">Belum ada riwayat booking</div>
            <div className="text-sm">Ayo booking hotel impianmu!</div>
          </div>
        ) : (
          <div className="space-y-6">
            <AnimatePresence>
              {bookings.map((b, i) => {
                const status = statusMap[b.status] || statusMap.PENDING;
                const StatusIcon = status.icon;
                return (
                  <motion.div
                    key={b.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ delay: i * 0.07, duration: 0.5, type: 'spring' }}
                    whileTap={{ scale: 0.97 }}
                    className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-pink-100 p-5 sm:p-6 flex flex-row items-start justify-between gap-4 hover:shadow-2xl transition-all overflow-hidden group"
                    style={{ boxShadow: "0 8px 32px 0 rgba(236, 72, 153, 0.10)" }}
                  >
                    {/* Badge status floating */}
                    <span className={`absolute top-0.5 right-4 px-2 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1 ${status.color} shadow-md z-10`}> <StatusIcon className="w-4 h-4" /> {status.label} </span>
                    <div className="flex-1 min-w-0 flex flex-col justify-start">
                      <div className="font-extrabold text-lg sm:text-xl text-pink-700 mb-1 truncate">{b.kamar?.hotel?.nama || '-'}</div>
                      <div className="text-gray-500 text-sm mb-1 truncate">{b.kamar?.nama ? `Kamar: ${b.kamar.nama}` : ''}</div>
                      {b.kamar?.nomorKamar && (
                        <div className="mb-1">
                          <span className="bg-pink-200 text-pink-700 text-xs px-3 py-0.5 rounded-full border border-pink-300 font-bold inline-block">
                            No. {b.kamar.nomorKamar}
                          </span>
                        </div>
                      )}
                      <div className="text-gray-500 text-sm mb-1">{new Date(b.checkIn).toLocaleDateString('id-ID')} - {new Date(b.checkOut).toLocaleDateString('id-ID')}</div>
                    </div>
                    <div className="flex flex-col items-end gap-2 min-w-[120px] max-w-[160px] pl-2 flex-shrink-0 mt-0 sm:mt-4">
                      <span className="text-pink-600 font-extrabold text-lg sm:text-xl whitespace-nowrap">Rp {b.totalHarga?.toLocaleString("id-ID")}</span>
                      <div className="flex flex-col w-full gap-2 mt-2 sm:mt-0">
                        <motion.button
                          whileTap={{ scale: 0.97 }}
                          className="text-xs sm:text-xs text-blue-600 hover:underline px-3 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all shadow w-full whitespace-nowrap"
                          onClick={() => { setSelectedBooking(b); setShowDetail(true); }}
                        >
                          Lihat Detail
                        </motion.button>
                        {b.status === 'DIKONFIRMASI' && !b.ulasan && (
                          <motion.button
                            whileTap={{ scale: 0.97 }}
                            className="text-xs sm:text-xs text-pink-600 hover:underline px-3 py-2 rounded-xl bg-pink-50 hover:bg-pink-100 transition-all shadow w-full whitespace-nowrap"
                            onClick={() => { setSelectedReviewBooking(b); setShowReview(true); setReviewRating(0); setReviewComment(''); setReviewNotif(null); setReviewAnonim(false); }}
                          >
                            Beri Ulasan
                          </motion.button>
                        )}
                      </div>
                    </div>
                    {/* Glassmorphism efek */}
                    <div className="absolute inset-0 pointer-events-none rounded-3xl group-hover:opacity-100 opacity-0 transition-all duration-300" style={{background: 'linear-gradient(120deg,rgba(236,72,153,0.10),rgba(168,85,247,0.10))'}} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
      {/* Modal Detail Booking */}
      <Dialog open={showDetail} onClose={() => setShowDetail(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-auto p-0 z-50"
          >
            {selectedBooking && (
              <div className="p-6">
                <div className="mb-4 border-b pb-3">
                  <h2 className="text-2xl font-bold text-pink-600 mb-1">Detail Booking</h2>
                  <div className="text-lg font-semibold text-pink-700">{selectedBooking.kamar?.hotel?.nama || '-'}</div>
                  <div className="text-gray-500 text-sm">{selectedBooking.kamar?.hotel?.alamat || '-'}</div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm xs:text-xs xs:gap-2 xs:mb-3">
                  {/* Info Hotel & Kamar */}
                  <div className="space-y-2 pr-2 border-r border-gray-100 xs:pr-1">
                    <div>
                      <div className="text-xs text-gray-400">Tipe Kamar</div>
                      <div className="font-semibold break-words">{selectedBooking.kamar?.nama || '-'}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Nomor Kamar</div>
                      <div>
                        {selectedBooking.kamar?.nomorKamar ? (
                          <span className="bg-pink-200 text-pink-700 text-xs px-2 py-0.5 rounded-full border border-pink-300 font-bold inline-block">
                            No. {selectedBooking.kamar.nomorKamar}
                          </span>
                        ) : '-'}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Tipe</div>
                      <div>{selectedBooking.kamar?.tipe || '-'}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Kapasitas</div>
                      <div>{selectedBooking.kamar?.kapasitas || '-'} orang</div>
                    </div>
                  </div>
                  {/* Info Booking */}
                  <div className="space-y-2 pl-2 xs:pl-1">
                    <div>
                      <div className="text-xs text-gray-400">Check-in</div>
                      <div>{new Date(selectedBooking.checkIn).toLocaleDateString('id-ID')}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Check-out</div>
                      <div>{new Date(selectedBooking.checkOut).toLocaleDateString('id-ID')}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Jumlah Tamu</div>
                      <div>{selectedBooking.jumlahTamu} orang</div>
                    </div>
                    {selectedBooking.permintaanKhusus && (
                      <div>
                        <div className="text-xs text-gray-400">Permintaan Khusus</div>
                        <div>{selectedBooking.permintaanKhusus}</div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="border-t pt-4 mb-4">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 items-center mb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Status Booking</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ml-2 ${selectedBooking.status === 'DIKONFIRMASI' ? 'bg-green-100 text-green-700' : selectedBooking.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-200 text-gray-500'}`}>{selectedBooking.status}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Status Pembayaran</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ml-2 ${selectedBooking.pembayaran?.status === 'DIBAYAR' ? 'bg-blue-100 text-blue-700' : selectedBooking.pembayaran?.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-200 text-gray-500'}`}>{selectedBooking.pembayaran?.status || '-'}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-gray-400">Total Harga</span>
                    <span className="ml-2 text-pink-600 font-bold text-lg">Rp {selectedBooking.totalHarga?.toLocaleString('id-ID')}</span>
                  </div>
                </div>
                {/* Tombol Bayar jika status PENDING dan belum dibayar */}
                {selectedBooking.status === 'PENDING' && (!selectedBooking.pembayaran || selectedBooking.pembayaran.status !== 'DIBAYAR') && (
                  <button
                    className="mt-2 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-xl font-bold text-base shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2"
                    onClick={() => {
                      setShowDetail(false);
                      router.push(`/hotels/${selectedBooking.kamar?.hotel?.id}/book/${selectedBooking.kamar?.id}/payment`);
                    }}
                  >
                    Bayar Sekarang
                  </button>
                )}
                <button
                  className="mt-2 w-full text-gray-500 hover:text-pink-600 font-semibold py-2 rounded-xl border border-gray-200"
                  onClick={() => setShowDetail(false)}
                >
                  Tutup
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </Dialog>
      {/* Modal Ulasan */}
      <Dialog open={showReview} onClose={() => setShowReview(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto p-6 z-50"
          >
            <h2 className="text-xl font-bold text-pink-600 mb-2">Beri Ulasan</h2>
            {selectedReviewBooking && (
              <form onSubmit={async (e) => {
                e.preventDefault();
                setReviewNotif(null);
                if (reviewRating < 1) {
                  setReviewNotif('Rating wajib diisi!');
                  return;
                }
                setReviewLoading(true);
                try {
                  const res = await fetch('/api/reviews', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      bookingId: selectedReviewBooking.id,
                      hotelId: selectedReviewBooking.kamar?.hotel?.id,
                      kamarId: selectedReviewBooking.kamar?.id,
                      rating: reviewRating,
                      komentar: reviewComment,
                      anonim: reviewAnonim,
                    })
                  });
                  if (res.ok) {
                    setReviewNotif('Ulasan berhasil dikirim!');
                    setShowReviewSuccess(true);
                    setTimeout(() => {
                      setShowReview(false);
                      setShowReviewSuccess(false);
                      router.push(`/hotels/${selectedReviewBooking.kamar?.hotel?.id}`);
                    }, 1200);
                  } else {
                    setReviewNotif('Gagal mengirim ulasan.');
                  }
                } catch {
                  setReviewNotif('Gagal mengirim ulasan.');
                } finally {
                  setReviewLoading(false);
                }
              }} className="space-y-4">
                <div>
                  <div className="text-sm font-semibold mb-1">Rating</div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <button type="button" key={star} onClick={() => setReviewRating(star)}>
                        <StarIcon className={`w-7 h-7 ${reviewRating >= star ? 'text-yellow-400' : 'text-gray-200'}`} />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1">Komentar (opsional)</div>
                  <textarea
                    className="w-full border rounded-xl p-2 min-h-[70px] focus:outline-pink-400"
                    value={reviewComment}
                    onChange={e => setReviewComment(e.target.value)}
                    placeholder="Tulis ulasanmu di sini..."
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={reviewAnonim}
                      onChange={e => setReviewAnonim(e.target.checked)}
                      className="accent-pink-500 w-4 h-4 rounded"
                    />
                    <span className="text-sm text-gray-600">Kirim sebagai <span className="font-bold text-pink-600">Anonim</span></span>
                  </label>
                </div>
                {reviewNotif && <div className={`text-sm ${reviewNotif.includes('berhasil') ? 'text-green-600' : 'text-red-500'}`}>{reviewNotif}</div>}
                <button
                  type="submit"
                  disabled={reviewLoading}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-xl font-bold text-base shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {reviewLoading ? 'Mengirim...' : 'Kirim Ulasan'}
                </button>
                <button
                  type="button"
                  className="w-full mt-2 text-gray-500 hover:text-pink-600 font-semibold py-2 rounded-xl border border-gray-200"
                  onClick={() => setShowReview(false)}
                >
                  Batal
                </button>
              </form>
            )}
            {showReviewSuccess && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-50">
                {/* SVG animasi bintang dan confetti */}
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2 animate-bounce">
                  <circle cx="60" cy="60" r="50" fill="#FDE68A" />
                  <polygon points="60,30 68,55 95,55 72,70 80,95 60,80 40,95 48,70 25,55 52,55" fill="#F59E42" stroke="#FBBF24" strokeWidth="2" />
                  <circle cx="60" cy="60" r="18" fill="#FFFDEB" />
                  <polygon points="60,45 65,60 80,60 67,70 72,85 60,75 48,85 53,70 40,60 55,60" fill="#FBBF24" />
                </svg>
                {/* Confetti sederhana */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg width="120" height="120" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <circle cx="20" cy="20" r="4" fill="#F472B6" />
                    <circle cx="100" cy="30" r="3" fill="#A78BFA" />
                    <circle cx="30" cy="100" r="3" fill="#FBBF24" />
                    <circle cx="90" cy="90" r="4" fill="#34D399" />
                    <circle cx="60" cy="15" r="2" fill="#F472B6" />
                    <circle cx="15" cy="60" r="2" fill="#A78BFA" />
                    <circle cx="105" cy="70" r="2" fill="#FBBF24" />
                  </svg>
                </div>
                <div className="text-lg font-bold text-pink-600 mt-2 animate-fade-in">Terima kasih atas ulasanmu!</div>
              </div>
            )}
          </motion.div>
        </div>
      </Dialog>
    </>
  );
}

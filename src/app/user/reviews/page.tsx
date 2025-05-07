"use client";
import MobileHeader from '../../../components/user/MobileHeader';
import { StarIcon } from '@heroicons/react/24/solid';
import { useEffect, useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function UserReviewsPage() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteId, setDeleteId] = useState<string|null>(null);
  const [showAlert, setShowAlert] = useState<{type: 'success'|'error', message: string}|null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch('/api/reviews');
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Gagal mengambil data ulasan');
        // Filter hanya ulasan milik user login (jika API belum filter)
        const userRes = await fetch('/api/users/me');
        const user = await userRes.json();
        setReviews(data.filter((r: any) => r.userId === user.id));
      } catch (err: any) {
        setError(err.message || 'Gagal mengambil data ulasan');
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  return (
    <>
      <MobileHeader title="Ulasan Saya" className="md:hidden">
        <StarIcon className="w-7 h-7 text-yellow-400" />
      </MobileHeader>
      <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 font-sans max-w-3xl mx-auto px-4 py-10 md:mt-24">
        <h1 className="text-2xl font-bold mb-6 text-pink-600">Ulasan Saya</h1>
        {loading ? (
          <div className="text-center text-gray-400 py-20 animate-pulse">Memuat ulasan...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-20">{error}</div>
        ) : reviews.length === 0 ? (
          <div className="text-center text-gray-400 py-20">Belum ada ulasan yang kamu buat.</div>
        ) : (
          <div className="space-y-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5, type: 'spring' }}
                className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-pink-100 p-3 md:p-5 flex flex-row items-start justify-between gap-2 md:gap-4 hover:shadow-2xl transition-all overflow-hidden group"
                style={{ boxShadow: "0 8px 32px 0 rgba(236, 72, 153, 0.10)" }}
              >
                <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 md:gap-2 flex-wrap">
                      <span className="font-bold text-pink-700 text-sm md:text-base truncate">{r.anonim ? 'Anonim' : (r.user?.nama || 'Anonim')}</span>
                      {r.anonim && <span className="bg-gray-200 text-gray-500 text-xs px-2 py-0.5 rounded-full ml-1">Anonim</span>}
                      <span className="text-xs text-gray-400 ml-2">{r.createdAt && new Date(r.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                  </div>
                  <div className="font-semibold text-base md:text-lg text-pink-600 truncate">{r.hotel?.nama || '-'}</div>
                  <div className="text-gray-500 text-xs md:text-sm truncate">{r.kamar?.nama ? `Kamar: ${r.kamar.nama}` : ''}</div>
                  <div className="flex items-center gap-0.5 md:gap-1 text-yellow-500 font-bold text-sm md:text-base">
                    {Array.from({ length: r.rating }).map((_, i) => <StarIcon key={i} className="w-4 h-4 md:w-5 md:h-5" />)}
                  </div>
                  <div className="text-gray-700 text-sm md:text-base">{r.komentar || <span className="text-gray-400">(Tidak ada komentar)</span>}</div>
                  {r.balasanUlasan && r.balasanUlasan.length > 0 && (
                    <div className="mt-1 ml-1 p-1 md:p-2 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 text-xs md:text-sm text-yellow-700">
                      <span className="font-semibold">Balasan Admin:</span> {r.balasanUlasan[0].isi}
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-end self-start gap-1 md:gap-2 min-w-[70px] md:min-w-[100px] ml-auto mt-13">
                  <button
                    className="text-xs text-red-600 hover:underline px-2 py-1 md:px-3 md:py-2 rounded-xl bg-pink-50 hover:bg-pink-100 transition-all shadow"
                    onClick={() => setDeleteId(r.id)}
                    disabled={deleting}
                  >Hapus</button>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-2xl group-hover:opacity-100 opacity-0 transition-all duration-300" style={{background: 'linear-gradient(120deg,rgba(236,72,153,0.10),rgba(168,85,247,0.10))'}} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
      {/* Modal Konfirmasi Hapus */}
      <Transition show={!!deleteId} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setDeleteId(null)}>
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
                <Dialog.Panel className="w-full max-w-xs transform rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all flex flex-col items-center justify-center relative">
                  <XCircle className="w-12 h-12 text-red-500 mb-2" />
                  <div className="text-lg font-bold mb-2 text-red-600">Hapus Ulasan?</div>
                  <div className="text-gray-600 mb-4">Apakah kamu yakin ingin menghapus ulasan ini? Tindakan ini tidak bisa dibatalkan.</div>
                  <div className="flex gap-3 w-full mt-2 justify-center">
                    <button
                      onClick={async () => {
                        setDeleting(true);
                        try {
                          const res = await fetch(`/api/reviews/${deleteId}`, { method: 'DELETE' });
                          const data = await res.json();
                          if (res.ok) {
                            setShowAlert({type: 'success', message: 'Ulasan berhasil dihapus!'});
                            setReviews(reviews => reviews.filter(r => r.id !== deleteId));
                          } else {
                            setShowAlert({type: 'error', message: data.error || 'Gagal menghapus ulasan'});
                          }
                        } catch {
                          setShowAlert({type: 'error', message: 'Gagal menghapus ulasan'});
                        } finally {
                          setDeleting(false);
                          setDeleteId(null);
                          setTimeout(() => setShowAlert(null), 2000);
                        }
                      }}
                      className="flex-1 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold shadow disabled:opacity-60"
                      disabled={deleting}
                    >{deleting ? 'Menghapus...' : 'Ya, Hapus'}</button>
                    <button
                      onClick={() => setDeleteId(null)}
                      className="flex-1 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold shadow"
                      disabled={deleting}
                    >Batal</button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
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
    </>
  );
} 
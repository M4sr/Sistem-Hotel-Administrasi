"use client";
import React, { useState, useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { StarIcon, CheckCircleIcon, ExclamationCircleIcon, PencilIcon, PhoneIcon, EnvelopeIcon, CalendarIcon, UserGroupIcon, MapPinIcon, CreditCardIcon, BellIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const menu = [
  { key: 'profile', label: 'Profil' },
  { key: 'bookings', label: 'Riwayat Booking' },
  { key: 'reviews', label: 'Ulasan Saya' },
  { key: 'notifications', label: 'Notifikasi' },
  { key: 'logout', label: 'Logout' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

// Tambahkan state untuk input edit profil
type UserDetail = { telepon?: string; createdAt?: string; totalBooking?: number; recentActivities?: any[]; name?: string; email?: string; image?: string };

export default function ProfileContent({ active, onChange }: { active?: string, onChange?: (key: string) => void }) {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  // Ambil data user dari session
  const user = session?.user;

  // State untuk data detail user
  const [userDetail, setUserDetail] = useState<UserDetail>({});

  // Tambahkan state untuk input edit profil
  const [editNama, setEditNama] = useState(userDetail.name || "");
  const [editTelepon, setEditTelepon] = useState(userDetail.telepon || "");
  const [editImage, setEditImage] = useState(userDetail.image || "");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loadingEdit, setLoadingEdit] = useState(false);

  // Update state edit saat userDetail berubah (biar input selalu sync)
  useEffect(() => {
    setEditNama(userDetail.name || "");
    setEditTelepon(userDetail.telepon || "");
    setEditImage(userDetail.image || "");
  }, [userDetail]);

  // Fetch data user detail setelah login
  useEffect(() => {
    if (session) {
      fetch('/api/users/me')
        .then(res => res.json())
        .then(data => setUserDetail(data));
    }
  }, [session]);

  // Fungsi format tanggal
  function formatTanggal(dateStr?: string) {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', { year: 'numeric', month: 'short' });
  }

  const handleChange = (key: string) => {
    if (key === 'logout') {
      signOut({ 
        callbackUrl: '/',
        redirect: true 
      });
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onChange && onChange(key);
      }, 350);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setEditImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleEditProfile = async () => {
    setLoadingEdit(true);
    let imageUrl = editImage;
    if (imageFile) {
      const formData = new FormData();
      formData.append('image', imageFile);
      const uploadRes = await fetch('/api/users/upload', { method: 'POST', body: formData });
      const uploadData = await uploadRes.json();
      imageUrl = uploadData.url || uploadData.path || uploadData.image || '';
    }
    await fetch('/api/users/me', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: editNama, telepon: editTelepon, image: imageUrl }),
    });
    // Setelah update, fetch ulang data user dari API
    await fetch('/api/users/me')
      .then(res => res.json())
      .then(data => setUserDetail(data));
    setShowEdit(false);
    setLoadingEdit(false);
  };

  const [bookings, setBookings] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loadingTab, setLoadingTab] = useState(false);
  const [errorTab, setErrorTab] = useState<string | null>(null);

  // Fetch bookings
  useEffect(() => {
    if (active === 'bookings') {
      setLoadingTab(true);
      setErrorTab(null);
      fetch('/api/bookings')
        .then(res => res.json())
        .then(data => setBookings(data))
        .catch(err => setErrorTab('Gagal mengambil data booking'))
        .finally(() => setLoadingTab(false));
    }
  }, [active]);
  // Fetch reviews
  useEffect(() => {
    if (active === 'reviews') {
      setLoadingTab(true);
      setErrorTab(null);
      fetch('/api/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
        .catch(err => setErrorTab('Gagal mengambil data ulasan'))
        .finally(() => setLoadingTab(false));
    }
  }, [active]);
  // Fetch notifications
  useEffect(() => {
    if (active === 'notifications') {
      setLoadingTab(true);
      setErrorTab(null);
      fetch('/api/notifications')
        .then(res => res.json())
        .then(data => setNotifications(data))
        .catch(err => setErrorTab('Gagal mengambil notifikasi'))
        .finally(() => setLoadingTab(false));
    }
  }, [active]);

  // Jika user belum login
  if (!session) {
    return (
      <div className="w-full max-w-md mx-auto mt-8">
        <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl shadow-xl p-8 flex flex-col items-center text-white">
          <div className="relative mb-4">
            <img src="/user.svg" alt="User" className="h-28 w-28 rounded-full border-4 border-white bg-gray-100" />
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 bg-pink-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
              <CheckCircleIcon className="w-4 h-4" /> Belum Login
            </span>
          </div>
          <div className="text-2xl font-bold mb-6">Selamat Datang!</div>
          <div className="flex flex-col gap-3 w-full">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/login" className="block w-full text-center bg-white text-pink-600 font-semibold py-3 rounded-xl shadow hover:bg-pink-50 transition-all">
                Login
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/register" className="block w-full text-center bg-white text-purple-600 font-semibold py-3 rounded-xl shadow hover:bg-purple-50 transition-all">
                Register
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="animate-pulse space-y-4"
          >
            <div className="h-32 bg-gray-200 rounded-xl" />
            <div className="h-16 bg-gray-200 rounded-xl" />
          </motion.div>
        ) : active === 'profile' ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-2xl md:max-w-full"
          >
            {/* Profile Header Card */}
            <motion.div 
              variants={itemVariants}
              className="relative bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl shadow-xl p-6 mb-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-[4rem]" />
              {/* Tombol edit profil di pojok kanan atas */}
              <button
                onClick={() => setShowEdit(true)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-pink-600 rounded-full p-2 shadow-lg z-20"
                title="Edit Profil"
              >
                <PencilIcon className="w-6 h-6" />
              </button>
              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-lg opacity-50" />
                  <img 
                    src={user?.image || '/user.svg'} 
                    alt="User" 
                    className="relative h-32 w-32 rounded-full border-4 border-white/30 bg-gray-100 shadow-lg" 
                  />
                  <motion.span 
                    className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm text-pink-600 px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <CheckCircleIcon className="w-4 h-4" /> Terverifikasi
                  </motion.span>
                </motion.div>
                
                <div className="flex-1 text-white">
                  <motion.h2 
                    className="text-3xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {user?.name || 'Nama Pengguna'}
                  </motion.h2>
                  <motion.div 
                    className="space-y-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={itemVariants} className="flex items-center gap-2">
                      <EnvelopeIcon className="w-5 h-5" />
                      <span>{user?.email || '-'}</span>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2">
                      <PhoneIcon className="w-5 h-5" />
                      <span>{userDetail.telepon || '-'}</span>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5" />
                      <span>Bergabung: {userDetail.createdAt ? formatTanggal(userDetail.createdAt) : '-'}</span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
            >
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-pink-100 rounded-lg">
                    <UserGroupIcon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Total Booking</div>
                    <div className="text-2xl font-bold text-gray-800">{userDetail.totalBooking ?? 0}</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <StarIcon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Rating Rata-rata</div>
                    <div className="text-2xl font-bold text-gray-800">4.8</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Aktivitas Terakhir</h3>
              <div className="space-y-4">
                {Array.isArray(userDetail.recentActivities) && userDetail.recentActivities.length > 0 ? (
                  userDetail.recentActivities.map((activity) => (
                    <motion.div 
                      key={activity.id}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      whileHover={{ x: 10 }}
                    >
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <span className="text-blue-500 font-bold">🏨</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">
                          {activity.status === 'SELESAI' ? 'Booking Selesai' : activity.status}
                        </div>
                        <div className="text-sm text-gray-500">
                          {activity.kamar?.hotel?.nama || '-'} - {formatTanggal(activity.createdAt)}
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-gray-400">Tidak ada aktivitas terakhir.</div>
                )}
              </div>
            </motion.div>

            {/* Edit Profile Button */}
            {/* Modal Edit Profil */}
            <AnimatePresence>
              {showEdit && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl"
                  >
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Edit Profil</h3>
                    <div className="space-y-4">
                      <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                        <input
                          className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                          placeholder="Masukkan nama"
                          value={editNama}
                          onChange={e => setEditNama(e.target.value)}
                        />
                      </motion.div>
                      <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">No HP</label>
                        <input
                          className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                          placeholder="Masukkan nomor HP"
                          value={editTelepon}
                          onChange={e => setEditTelepon(e.target.value)}
                        />
                      </motion.div>
                      <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 }}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Foto Profil</label>
                        <div
                          className="relative w-24 h-24 mx-auto mb-2 group cursor-pointer"
                          onClick={() => document.getElementById('input-foto-profil')?.click()}
                          onDragOver={e => { e.preventDefault(); e.stopPropagation(); }}
                          onDrop={e => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                              setImageFile(e.dataTransfer.files[0]);
                              setEditImage(URL.createObjectURL(e.dataTransfer.files[0]));
                            }
                          }}
                          title="Klik atau seret gambar ke sini"
                        >
                          <input
                            id="input-foto-profil"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                          <div className={`w-24 h-24 rounded-full border-4 transition-all duration-300 flex items-center justify-center overflow-hidden shadow-lg bg-gray-100 border-pink-300 group-hover:border-purple-500 group-hover:scale-105 ${editImage ? '' : 'border-dashed'}`}> 
                            {editImage ? (
                              <img src={editImage} alt="Preview" className="object-cover w-full h-full" />
                            ) : (
                              <span className="text-gray-400 text-xs">Belum ada gambar</span>
                            )}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-all rounded-full">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13h6m2 7a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v11a2 2 0 002 2h10z" /></svg>
                            </div>
                          </div>
                          <div className="text-xs text-gray-400 text-center mt-2">Klik atau seret gambar ke sini</div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="flex gap-3 mt-12">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                        onClick={handleEditProfile}
                        disabled={loadingEdit}
                      >
                        {loadingEdit ? 'Menyimpan...' : 'Simpan'}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                        onClick={() => setShowEdit(false)}
                        disabled={loadingEdit}
                      >
                        Batal
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : active === 'bookings' ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-2xl md:max-w-full space-y-4"
          >
            {loadingTab ? (
              <div className="text-center text-gray-400 py-12 animate-pulse">Memuat data booking...</div>
            ) : errorTab ? (
              <div className="text-center text-red-500 py-12">{errorTab}</div>
            ) : bookings.length === 0 ? (
              <motion.div 
                variants={itemVariants}
                className="text-center text-gray-400 py-12"
              >
                Belum ada riwayat booking.
              </motion.div>
            ) : bookings.map((b, index) => (
              <motion.div
                key={b.id}
                variants={itemVariants}
                className="group relative bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex gap-4 items-center">
                  <motion.img 
                    src={b.kamar?.hotel?.gambar?.[0]?.url || '/images/hotel1.jpg'}
                    alt={b.kamar?.hotel?.nama || '-'}
                    className="w-24 h-24 object-cover rounded-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
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
                    <div className="text-gray-500 text-sm mb-1">{b.checkIn && b.checkOut ? `${new Date(b.checkIn).toLocaleDateString('id-ID')} - ${new Date(b.checkOut).toLocaleDateString('id-ID')}` : '-'}</div>
                    <div className="flex gap-2 mt-1">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${b.status === 'DIKONFIRMASI' ? 'bg-green-100 text-green-700' : b.status === 'DIBAYAR' ? 'bg-blue-100 text-blue-700' : b.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{b.status}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${b.pembayaran?.status === 'DIBAYAR' ? 'bg-blue-100 text-blue-700' : b.pembayaran?.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-200 text-gray-500'}`}>{b.pembayaran?.status || '-'}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 min-w-[120px] max-w-[160px] pl-2 flex-shrink-0 mt-0 sm:mt-4">
                    <span className="text-pink-600 font-extrabold text-lg sm:text-xl whitespace-nowrap">Rp {b.totalHarga?.toLocaleString('id-ID')}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : active === 'reviews' ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-2xl md:max-w-full space-y-4"
          >
            {loadingTab ? (
              <div className="text-center text-gray-400 py-12 animate-pulse">Memuat data ulasan...</div>
            ) : errorTab ? (
              <div className="text-center text-red-500 py-12">{errorTab}</div>
            ) : reviews.length === 0 ? (
              <motion.div 
                variants={itemVariants}
                className="text-center text-gray-400 py-12"
              >
                Belum ada ulasan.
              </motion.div>
            ) : reviews.map((r, index) => (
              <motion.div
                key={r.id}
                variants={itemVariants}
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
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
                    // onClick={() => setDeleteId(r.id)}
                    // disabled={deleting}
                  >Hapus</button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : active === 'notifications' ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-2xl md:max-w-full flex flex-col items-center justify-center min-h-[400px]"
          >
            <div className="flex flex-col items-center justify-center w-full">
              <div className="bg-pink-100 rounded-full p-6 mb-6 shadow-lg">
                <BellIcon className="w-16 h-16 text-pink-500 animate-bounce" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2 text-center">Fitur Notifikasi Masih Dalam Pengembangan</h1>
              <p className="text-gray-500 text-center max-w-md mb-6">
                Kami sedang menyiapkan fitur notifikasi agar pengalamanmu makin seru dan informatif.<br />
                Nantikan update terbaru dari kami ya!
              </p>
              <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-semibold shadow">Maintenance Mode</span>
              <p className="mt-6 text-pink-500 italic text-center text-base font-medium">Salam hangat dari kami, saudara <span className="font-bold">jokita.id</span></p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-2xl md:max-w-full space-y-4"
          >
            {/* Placeholder for other active content */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
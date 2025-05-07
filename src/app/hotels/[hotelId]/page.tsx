"use client";
import { useEffect, useState, use, useCallback, Fragment } from "react";
import Image from "next/image";
import { Star, MapPin, BedDouble, Wifi, Coffee, ParkingCircle, Sparkles, Users } from "lucide-react";
import MobileHeader from "@/components/user/MobileHeader";
import { useRouter } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function HotelDetailPage({ params }: { params: Promise<{ hotelId: string }> }) {
  const resolvedParams = use(params);
  const hotelId = resolvedParams.hotelId;
  const router = useRouter();
  const [hotel, setHotel] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // State global untuk modal preview gambar kamar
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImages, setPreviewImages] = useState<{url: string}[]>([]);
  const [previewIdx, setPreviewIdx] = useState(0);
  const [loadingKamarId, setLoadingKamarId] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  const handleOpenPreview = useCallback((images: {url: string}[], idx: number) => {
    setPreviewImages(images);
    setPreviewIdx(idx);
    setPreviewOpen(true);
  }, []);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`/api/hotels/${hotelId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Gagal mengambil data hotel');
        }

        setHotel(data);
      } catch (err) {
        console.error("Error fetching hotel:", err);
        setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
        setHotel(null);
      } finally {
        setLoading(false);
      }
    };

    if (hotelId) {
      fetchHotel();
    }
  }, [hotelId]);

  useEffect(() => {
    fetch("/lottie/anim-log.json")
      .then(res => res.json())
      .then(data => {
        console.log('Lottie loaded', data);
        setLottieData(data);
      })
      .catch(err => {
        console.error('Gagal load Lottie:', err);
        setLottieData(null);
      });
  }, []);

  useEffect(() => { setIsMounted(true); }, []);

  const handlePilihKamar = (kamarId: string) => {
    router.push(`/hotels/${hotelId}/book/${kamarId}`);
  };

  const handlePilihKamarLoginCheck = async (kamarId: string) => {
    setLoadingKamarId(kamarId);
    try {
      const res = await fetch('/api/users/me');
      if (!res.ok) throw new Error('Not logged in');
      const data = await res.json();
      if (!data?.id) throw new Error('Not logged in');
      handlePilihKamar(kamarId);
    } catch {
      setShowLoginModal(true);
      setLoadingKamarId(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white font-sans max-w-5xl mx-auto px-4 py-10 animate-pulse">
        {/* Skeleton Carousel */}
        <div className="flex gap-4 overflow-x-auto mb-6">
          {[1,2,3].map((_,i) => (
            <div key={i} className="min-w-[320px] h-56 rounded-2xl overflow-hidden bg-gray-200" />
          ))}
        </div>
        {/* Skeleton Info */}
        <div className="mb-8">
          <div className="h-8 w-2/3 bg-gray-200 rounded mb-2" />
          <div className="h-5 w-1/3 bg-gray-200 rounded mb-4" />
          <div className="h-4 w-full bg-gray-200 rounded mb-2" />
          <div className="h-4 w-5/6 bg-gray-200 rounded mb-2" />
          <div className="flex flex-wrap gap-4 mb-4">
            {[1,2,3,4,5].map((_,i) => (
              <div key={i} className="h-6 w-24 bg-gray-200 rounded-full" />
            ))}
          </div>
        </div>
        {/* Skeleton Kamar */}
        <div className="mb-8">
          <div className="h-6 w-40 bg-gray-200 rounded mb-4" />
          <div className="grid gap-4">
            {[1,2].map((_,i) => (
              <div key={i} className="border rounded-xl overflow-hidden p-4 flex gap-4">
                <div className="w-48 h-32 bg-gray-200 rounded-lg" />
                <div className="flex-1 space-y-2">
                  <div className="h-5 w-1/2 bg-gray-200 rounded" />
                  <div className="h-4 w-1/3 bg-gray-200 rounded" />
                  <div className="h-4 w-2/3 bg-gray-200 rounded" />
                  <div className="h-6 w-24 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Skeleton Ulasan */}
        <div className="mt-8">
          <div className="h-5 w-32 bg-gray-200 rounded mb-2" />
          <div className="space-y-2">
            {[1,2].map((_,i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-3 flex items-center gap-2">
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <div className="h-4 w-10 bg-gray-200 rounded" />
                <div className="h-4 w-1/2 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
        {/* Skeleton Peta */}
        <div className="mt-8">
          <div className="h-5 w-24 bg-gray-200 rounded mb-2" />
          <div className="w-full h-48 bg-gray-200 rounded-lg" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white font-sans max-w-5xl mx-auto px-4 py-10">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="min-h-screen bg-white font-sans max-w-5xl mx-auto px-4 py-10">
        <div className="text-center text-gray-400">Hotel tidak ditemukan</div>
      </div>
    );
  }

  // Tentukan gambar statis berdasarkan urutan hotel (gunakan hotelId untuk index unik)
  const staticImages = [
    "/images/hotel1.jpg",
    "/images/hotel2.jpg",
    "/images/hotel3.jpg",
    "/images/hotel4.jpg",
  ];
  // Ambil index dari hotelId (hash sederhana)
  function getStaticIndex(id: string) {
    let sum = 0;
    for (let i = 0; i < id.length; i++) sum += id.charCodeAt(i);
    return sum % staticImages.length;
  }
  const staticImage = staticImages[getStaticIndex(hotelId)];

  return (
    <>
      {/* Header Mobile */}
      <MobileHeader title="Detail Hotel" className="md:hidden" />
      <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 font-sans max-w-5xl mx-auto px-4 py-10 mt-8 md:mt-16">
        {/* Carousel gambar modern */}
        <div className="flex gap-4 overflow-x-auto mb-10 scrollbar-thin scrollbar-thumb-pink-200 scrollbar-track-gray-100">
          {Array.from({ length: 6 }).map((_, i) => {
            const img = (hotel.gambar && hotel.gambar.length > 0)
              ? hotel.gambar[i % hotel.gambar.length]
              : { url: staticImage };
            return (
              <div key={i} className="min-w-[320px] h-56 rounded-3xl overflow-hidden relative shadow-lg border-2 border-pink-200 bg-white">
                <Image
                  src={img.url || staticImage}
                  alt={hotel.nama}
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>
            );
          })}
        </div>

        {/* Info Hotel */}
        <div className="mb-10 bg-white rounded-3xl shadow-md p-6 border border-pink-100">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-extrabold text-gray-900">{hotel.nama}</h1>
            {hotel.rating && (
              <span className="flex items-center gap-1 text-yellow-500 text-lg font-bold ml-2">
                <Star className="w-5 h-5" /> {hotel.rating}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-gray-500 mb-2 text-sm">
            <MapPin className="w-5 h-5" /> {hotel.kota}, {hotel.negara}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.alamat + ', ' + hotel.kota + ', ' + hotel.negara)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 underline text-pink-600 hover:text-pink-700"
            >
              Lihat di Maps
            </a>
          </div>
          <p className="text-gray-700 mb-4 text-base">{hotel.deskripsi}</p>
          <div className="flex flex-wrap gap-3 mb-2">
            {hotel.fasilitas && hotel.fasilitas.length > 0 ? (
              hotel.fasilitas.map((f: any, i: number) => (
                <span key={i} className="flex items-center gap-2 bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm shadow-sm border border-pink-200">
                  {f.ikon && <img src={f.ikon} alt={f.nama} className="w-4 h-4" />}
                  {f.nama}
                </span>
              ))
            ) : (
              <span className="text-gray-400 text-sm">Tidak ada fasilitas terdaftar</span>
            )}
          </div>
        </div>

        {/* Section Divider */}
        <div className="h-1 my-8 bg-gradient-to-r from-pink-100 via-white to-pink-100 rounded-full" />

        {/* Kamar */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Kamar Tersedia</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {hotel.kamar?.map((kamar: any, idx: number) => {
              const gambarList = kamar.gambar && kamar.gambar.length > 0 ? kamar.gambar : [{ url: "/images/room1.jpg" }];
              return (
                <div key={kamar.id} className="border-2 border-pink-200 rounded-2xl shadow-lg bg-white hover:shadow-xl transition overflow-hidden flex flex-col md:flex-row min-h-[180px] md:min-h-[170px]">
                  {/* Gambar utama kamar */}
                  <div className="relative w-full h-40 md:w-44 md:h-32 rounded-t-2xl md:rounded-l-2xl md:rounded-t-none overflow-hidden flex-shrink-0 cursor-pointer group" onClick={() => handleOpenPreview(gambarList, 0)}>
                    <Image
                      src={gambarList[0].url}
                      alt={kamar.nama}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-bold text-xs">Klik untuk lihat semua foto</div>
                  </div>
                  {/* Info kamar */}
                  <div className="flex-1 p-4 flex flex-col gap-2 justify-between">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-base md:text-lg">{kamar.nama}</span>
                      {kamar.nomorKamar && (
                        <span className="bg-pink-200 text-pink-700 text-xs px-2 py-0.5 rounded-full border border-pink-300 font-bold">
                          No. {kamar.nomorKamar}
                        </span>
                      )}
                      <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">Tersedia</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs md:text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {kamar.kapasitas} Orang
                      </div>
                      <div className="flex items-center gap-1">
                        <BedDouble className="w-4 h-4" />
                        {kamar.tipe_bed}
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 mb-1 line-clamp-2">{kamar.deskripsi}</p>
                    <div className="flex items-center justify-between mt-1 gap-2">
                      <div className="text-pink-600 font-bold text-lg md:text-xl">Rp {kamar.harga?.toLocaleString('id-ID')}/malam</div>
                      <button 
                        onClick={() => handlePilihKamarLoginCheck(kamar.id)}
                        className="px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-xl text-sm font-semibold shadow transition-all flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                        disabled={loadingKamarId === kamar.id}
                      >
                        {loadingKamarId === kamar.id ? (
                          <svg className="animate-spin h-4 w-4 mr-2 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                          </svg>
                        ) : (
                          <BedDouble className="w-4 h-4" />
                        )}
                        {loadingKamarId === kamar.id ? 'Memproses...' : 'Pilih Kamar'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            {(!hotel.kamar || hotel.kamar.length === 0) && (
              <div className="text-center text-gray-400 py-8">
                Tidak ada kamar yang tersedia saat ini
              </div>
            )}
          </div>
        </div>

        {/* Section Divider */}
        <div className="h-1 my-8 bg-gradient-to-r from-pink-100 via-white to-pink-100 rounded-full" />

        {/* Ulasan */}
        <div className="mt-10">
          <h2 className="text-lg font-bold mb-4">Ulasan Tamu</h2>
          <div className="space-y-3">
            {hotel.ulasan?.map((u: any, i: number) => (
              <div key={i} className="bg-gradient-to-br from-pink-50 to-yellow-50 rounded-2xl p-5 flex gap-4 items-start shadow-md border border-pink-100 relative overflow-hidden">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-yellow-200 flex items-center justify-center text-xl font-bold text-white shadow border-2 border-pink-200">
                  {u.user?.nama ? u.user.nama[0].toUpperCase() : 'A'}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-bold text-pink-700 text-base">{u.anonim ? 'Anonim' : (u.user?.nama || 'Anonim')}</span>
                    <span className="flex items-center gap-1 text-yellow-500 font-bold text-lg animate-pulse drop-shadow">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                      {u.rating}
                    </span>
                    {u.createdAt && (
                      <span className="text-xs text-gray-400 ml-2">{new Date(u.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    )}
                  </div>
                  <div className="flex items-start gap-2 text-gray-700 text-base italic mt-1">
                    <svg className="w-5 h-5 text-pink-200 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6A5.001 5.001 0 002 11c0 2.21 1.79 4 4 4 .55 0 1 .45 1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2c0-2.21-1.79-4-4-4-.55 0-1-.45-1-1V7a1 1 0 00-1-1z" /></svg>
                    {u.komentar ? u.komentar : <span className="text-gray-400">(Tidak ada komentar)</span>}
                  </div>
                  {u.balasanUlasan && u.balasanUlasan.length > 0 && (
                    <div className="mt-3 ml-2 p-2 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 text-sm text-yellow-700">
                      <span className="font-semibold">Balasan Admin:</span> {u.balasanUlasan[0].isi}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {(!hotel.ulasan || hotel.ulasan.length === 0) && (
              <div className="text-center text-gray-400 py-4">
                Belum ada ulasan untuk hotel ini
              </div>
            )}
          </div>
        </div>

        {/* Peta */}
        <div className="mt-10">
          <h2 className="text-lg font-bold mb-2">Lokasi</h2>
          <div className="w-full h-56 md:h-72 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
            <iframe
              title="Peta Lokasi Hotel"
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${hotel.alamat}, ${hotel.kota}, ${hotel.negara}`)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Modal preview gambar kamar (hanya satu, global) */}
      <Transition show={previewOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setPreviewOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
            leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
                leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all flex flex-col items-center justify-center relative">
                  <h2 className="sr-only">Preview Gambar Kamar</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                    {previewImages.map((img, idx) => (
                      <div key={idx} className="relative w-full aspect-square rounded-lg overflow-hidden cursor-pointer group">
                        <Image src={img.url} alt={`Gambar ${idx+1}`} fill className="object-cover group-hover:scale-105 transition" />
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setPreviewOpen(false)} className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow z-30">
                    <span className="sr-only">Tutup</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* Modal login */}
      <Transition show={showLoginModal} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setShowLoginModal(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
            leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
                leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm transform rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all flex flex-col items-center justify-center relative">
                  <div className="w-32 h-32 mx-auto mb-2 flex items-center justify-center">
                    {isMounted && lottieData ? (
                      <Lottie animationData={lottieData} loop={true} />
                    ) : isMounted && lottieData === null ? (
                      <span className="text-xs text-gray-400">Animasi tidak tersedia</span>
                    ) : null}
                  </div>
                  <h2 className="text-xl font-bold text-pink-600 mb-2">Login atau Daftar Dulu Yuk!</h2>
                  <p className="text-gray-600 mb-4">
                    Untuk melanjutkan booking kamar, kamu perlu login dulu.<br />
                    Belum punya akun? Daftar sekarang, gratis dan gampang kok!
                  </p>
                  <div className="flex gap-3 w-full mt-2">
                    <button
                      onClick={() => { setShowLoginModal(false); router.push('/login'); }}
                      className="flex-1 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => { setShowLoginModal(false); router.push('/register'); }}
                      className="flex-1 py-2 rounded-xl bg-white border border-pink-400 text-pink-600 font-semibold hover:bg-pink-50 shadow"
                    >
                      Daftar
                    </button>
                  </div>
                  <button
                    onClick={() => setShowLoginModal(false)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-pink-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
} 
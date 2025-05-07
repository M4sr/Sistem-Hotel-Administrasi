"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  MagnifyingGlassIcon, 
  StarIcon, 
  MapPinIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  SparklesIcon,
  HeartIcon,
  GlobeAltIcon,
  HomeIcon,
  SunIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Star, Heart, Castle, Sun, Sparkles } from "lucide-react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

// Komponen Hero Section
const HeroSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden pt-8 md:pt-10"
    >
      {/* Background Image + Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-pink-900/40 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 md:left-20"
        >
          <SparklesIcon className="w-8 h-8 text-yellow-400" />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 md:right-20"
        >
          <HeartIcon className="w-8 h-8 text-pink-500" />
        </motion.div>
      </div>

      {/* Ilustrasi Hotel (kanan, hanya di desktop) */}
      <div className="hidden md:block absolute right-16 bottom-0 z-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Image
            src="/images/hotel1.jpg"
            alt="Ilustrasi Hotel"
            width={400}
            height={400}
            className="rounded-3xl shadow-2xl border-4 border-white object-cover animate-float"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto w-full flex flex-col items-center">
        {/* Badge Promo */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg"
        >
          <SparklesIcon className="w-5 h-5" />
          <span>Promo Spesial! Diskon hingga 30% untuk booking bulan ini 🎉</span>
        </motion.div>

        {/* Judul dan Deskripsi */}
        <div className="relative w-full flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200"
          >
            Temukan Hotel Impian Anda
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-10 text-white/90 font-medium max-w-2xl"
          >
            Berbagai pilihan hotel mewah dengan fasilitas premium, harga terbaik, dan promo menarik setiap hari.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl p-2 shadow-xl"
        >
          <div className="flex items-center gap-2 bg-white rounded-xl p-2 w-full">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 ml-2" />
            <input
              type="text"
              placeholder="Cari hotel atau destinasi..."
              className="flex-1 min-w-0 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
            />
            <button className="flex-shrink-0 bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-700 transition-colors">
              Cari
            </button>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8"
        >
          <Link
            href="/hotels"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg text-lg transition-all hover:scale-105"
          >
            Jelajahi Hotel
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Komponen Feature Card
const FeatureCard = ({ icon: Icon, title, description, delay }: FeatureCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay, duration: 0.7, type: "spring" }}
      className="group relative bg-white/30 backdrop-blur-xl border border-pink-200/40 shadow-2xl rounded-3xl px-8 pt-10 pb-8 flex flex-col items-center overflow-visible hover:scale-105 hover:shadow-2xl transition-all min-h-[320px]"
      style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}
    >
      {/* Badge */}
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg tracking-wide z-10 animate-pulse">
        Unggulan
      </span>
      {/* Icon dengan gradient dan animasi */}
      <div className="mb-6 mt-2 flex items-center justify-center rounded-2xl p-4 bg-gradient-to-br from-pink-100/80 to-purple-100/80 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-pink-400 via-pink-500 to-purple-500 shadow-lg">
          <Icon className="w-8 h-8 text-white drop-shadow-lg" />
        </span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 text-center drop-shadow-sm">{title}</h3>
      <p className="text-gray-700 text-center leading-relaxed font-medium opacity-90">{description}</p>
    </motion.div>
  );
};

// Komponen Popular Hotels
const PopularHotels = () => {
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/hotels")
      .then((res) => res.json())
      .then((data) => {
        // Filter hotel rating >= 4 dan ambil maksimal 3
        const populer = data
          .filter((h: any) => (h.rating ?? 0) >= 4)
          .sort((a: any, b: any) => (b.rating ?? 0) - (a.rating ?? 0))
          .slice(0, 3);
        setHotels(populer);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Hotel Populer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Temukan hotel terbaik dengan rating tinggi dan ulasan positif dari tamu kami
          </motion.p>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3].map((_,i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg h-96 animate-pulse" />
            ))}
          </div>
        ) : hotels.length === 0 ? (
          <div className="text-center text-gray-400 py-12">Tidak ada hotel populer ditemukan.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <Image
                    src={hotel.gambar?.[0]?.url || "/images/hotel1.jpg"}
                    alt={hotel.nama}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <MapPinIcon className="w-5 h-5" />
                      <span>{hotel.kota}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{hotel.nama}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(hotel.rating ?? 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="text-white ml-2">{hotel.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-500 text-sm">Mulai dari</span>
                      <div className="text-pink-600 font-bold text-xl">
                        Rp {hotel.kamar?.[0]?.harga ? hotel.kamar[0].harga.toLocaleString("id-ID") : '-'}
                        <span className="text-gray-500 text-sm font-normal">/malam</span>
                      </div>
                    </div>
                    <Link 
                      href={`/hotels/${hotel.id}`}
                      className="inline-flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors"
                    >
                      Lihat Detail
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Komponen Travel Story Timeline
const travelSteps = [
  {
    icon: MagnifyingGlassIcon,
    title: "Cari Hotel",
    story: "Mulai petualanganmu dengan mencari hotel impian di destinasi favorit. Siap-siap menemukan kejutan menarik!"
  },
  {
    icon: CurrencyDollarIcon,
    title: "Booking Mudah",
    story: "Booking hotel tanpa drama, cukup beberapa klik. Tak perlu ribet, semua serba instan dan aman."
  },
  {
    icon: ShieldCheckIcon,
    title: "Check-in Praktis",
    story: "Tiba di hotel, cukup tunjukkan e-voucher. Proses check-in super cepat, waktumu lebih banyak untuk bersantai."
  },
  {
    icon: SparklesIcon,
    title: "Nikmati Liburan",
    story: "Saatnya menikmati liburan, ciptakan kenangan seru dan bagikan pengalamanmu ke teman-teman!"
  }
];

const TravelStoryTimeline = () => (
  <section className="relative py-24 bg-gradient-to-b from-white via-pink-50 to-white overflow-visible">
    {/* Ilustrasi background awan & pesawat */}
    <div className="absolute inset-0 pointer-events-none select-none z-0">
      <svg className="absolute top-10 left-10 w-32 h-16 opacity-30" viewBox="0 0 120 40"><ellipse cx="60" cy="20" rx="60" ry="20" fill="#f3e8ff" /></svg>
      <svg className="absolute top-32 right-20 w-40 h-20 opacity-20" viewBox="0 0 160 40"><ellipse cx="80" cy="20" rx="80" ry="20" fill="#fbcfe8" /></svg>
      <svg className="absolute bottom-10 left-1/3 w-24 h-10 opacity-20" viewBox="0 0 80 20"><ellipse cx="40" cy="10" rx="40" ry="10" fill="#a5b4fc" /></svg>
      {/* Pesawat */}
      <svg className="absolute top-1/2 left-1/2 w-16 h-8 opacity-40 animate-bounce-slow" style={{transform: 'translate(-50%, -200%)'}} viewBox="0 0 64 32"><polygon points="0,16 64,8 64,24" fill="#f472b6" /></svg>
    </div>
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 drop-shadow-lg"
        >
          Cerita Perjalananmu
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 max-w-2xl mx-auto text-lg font-medium"
        >
          Setiap perjalanan punya cerita. Mulai dari mencari hotel hingga liburan berkesan, nikmati pengalaman unik bersama kami!
        </motion.p>
      </div>
      {/* Timeline zig-zag desktop, vertikal mobile */}
      <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-16 md:gap-0 z-10">
        {travelSteps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: i % 2 === 0 ? 60 : -60, x: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.7, type: 'spring' }}
            className={`relative flex flex-col items-center md:w-1/4 w-full group ${i % 2 === 1 ? 'md:mt-24' : ''}`}
          >
            {/* Garis timeline */}
            {i < travelSteps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-0 w-full h-1 bg-gradient-to-r from-pink-300 via-purple-200 to-purple-400 opacity-60 z-0" style={{ left: '50%', width: '100%', transform: 'translateY(-50%)' }} />
            )}
            {/* Icon lingkaran dengan animasi pulse/rotate */}
            <div className={`z-10 flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 via-pink-500 to-purple-500 shadow-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ${i === travelSteps.length-1 ? 'ring-4 ring-pink-300 animate-glow' : ''}`}>
              <step.icon className="w-12 h-12 text-white drop-shadow-lg animate-pulse-slow group-hover:animate-spin-slow" />
            </div>
            {/* Bubble narasi zig-zag */}
            <div className={`relative bg-white/90 backdrop-blur-xl border border-pink-200/40 shadow-lg rounded-2xl px-7 py-6 mb-2 text-center max-w-xs group-hover:scale-105 transition-transform ${i % 2 === 0 ? 'md:mb-10' : 'md:mt-10'}`}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white/80 border border-pink-200/40 rotate-45 z-0" />
              <h3 className="text-lg font-bold text-pink-600 mb-1 relative z-10">{step.title}</h3>
              <p className="text-gray-700 text-sm relative z-10">{step.story}</p>
            </div>
            {/* Step number */}
            <span className="mt-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow tracking-wide z-10">
              {`Langkah ${i + 1}`}
            </span>
            {/* Confetti animasi di step terakhir */}
            {i === travelSteps.length-1 && (
              <svg className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-16 pointer-events-none animate-confetti" viewBox="0 0 128 32">
                <circle cx="16" cy="16" r="4" fill="#f472b6"/>
                <circle cx="32" cy="8" r="3" fill="#a5b4fc"/>
                <circle cx="64" cy="24" r="4" fill="#fbbf24"/>
                <circle cx="96" cy="12" r="3" fill="#34d399"/>
                <circle cx="112" cy="20" r="4" fill="#f472b6"/>
              </svg>
            )}
          </motion.div>
        ))}
      </div>
      {/* Garis timeline vertikal untuk mobile */}
      <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-32 bottom-32 w-1 bg-gradient-to-b from-pink-300 via-purple-200 to-purple-400 opacity-40 z-0" />
      {/* Layered effect */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -z-10 w-[90vw] h-[350px] bg-gradient-to-r from-pink-100/60 via-white/0 to-purple-100/60 rounded-3xl blur-2xl opacity-60" />
    </div>
    {/* Animasi CSS tambahan */}
    <style jsx>{`
      @keyframes pulse-slow { 0%,100%{opacity:1;} 50%{opacity:0.7;} }
      .animate-pulse-slow { animation: pulse-slow 2.5s infinite; }
      @keyframes spin-slow { 100% { transform: rotate(360deg); } }
      .group-hover\:animate-spin-slow:hover { animation: spin-slow 2s linear infinite; }
      @keyframes bounce-slow { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
      .animate-bounce-slow { animation: bounce-slow 4s infinite; }
      @keyframes glow { 0%,100%{box-shadow:0 0 0 0 #f472b6;} 50%{box-shadow:0 0 32px 8px #f472b6;} }
      .animate-glow { animation: glow 2.5s infinite; }
      @keyframes confetti { 0%{opacity:0;transform:translateY(-10px);} 20%{opacity:1;} 100%{opacity:0;transform:translateY(10px);} }
      .animate-confetti { animation: confetti 2.5s infinite; }
    `}</style>
  </section>
);

// Komponen Quiz Interaktif
const quizQuestions = [
  {
    question: "Tipe liburan favoritmu?",
    options: [
      { label: "Santai di Pantai", icon: SparklesIcon },
      { label: "Petualangan Alam", icon: SunIcon },
      { label: "Kota Modern", icon: BuildingOfficeIcon },
      { label: "Staycation Nyaman", icon: HomeIcon },
    ],
  },
  {
    question: "Budget per malam?",
    options: [
      { label: "< 500rb", icon: CurrencyDollarIcon },
      { label: "500rb - 1jt", icon: CurrencyDollarIcon },
      { label: "> 1jt", icon: CurrencyDollarIcon },
    ],
  },
  {
    question: "Suasana impian?",
    options: [
      { label: "Dekat Pantai", icon: SunIcon },
      { label: "Pegunungan", icon: Castle },
      { label: "Pusat Kota", icon: MapPinIcon },
      { label: "Tropis", icon: SparklesIcon },
    ],
  },
];

const QuizSection = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [loadingResult, setLoadingResult] = useState(false);
  const [resultHotels, setResultHotels] = useState<any[]>([]);

  const handleAnswer = (idx: number) => {
    const newAnswers = [...answers];
    newAnswers[step] = idx;
    setAnswers(newAnswers);
    if (step < quizQuestions.length - 1) {
      setTimeout(() => setStep(step + 1), 400);
    } else {
      setLoadingResult(true);
      // Mapping jawaban ke preferensi
      const tipeLiburan = quizQuestions[0].options[newAnswers[0]]?.label || "";
      const budget = quizQuestions[1].options[newAnswers[1]]?.label || "";
      const suasana = quizQuestions[2].options[newAnswers[2]]?.label || "";
      fetch("/api/hotels/rekomendasi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tipeLiburan, budget, suasana }),
      })
        .then((res) => res.json())
        .then((data) => {
          setResultHotels(data);
          setTimeout(() => {
            setShowResult(true);
            setLoadingResult(false);
          }, 1000); // delay minimal 1 detik agar animasi loading muncul
        })
        .catch(() => {
          setResultHotels([]);
          setTimeout(() => {
            setShowResult(true);
            setLoadingResult(false);
          }, 1000);
        });
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-pink-50 to-white overflow-visible">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 drop-shadow-lg"
        >
          Temukan Hotel Impianmu
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 max-w-xl mx-auto text-lg font-medium mb-8"
        >
          Jawab 3 pertanyaan singkat, dapatkan rekomendasi hotel yang cocok dengan kepribadian dan mood liburanmu!
        </motion.p>
        {/* Progress bar */}
        {!showResult && (
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div
              className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all"
              style={{ width: `${((step + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>
        )}
        {/* Quiz */}
        {!showResult ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-white/80 backdrop-blur-xl border border-pink-200/40 shadow-xl rounded-3xl px-6 py-10 mb-4"
          >
            <h3 className="text-xl font-bold mb-6 text-pink-600">{quizQuestions[step].question}</h3>
            <div className="grid grid-cols-2 gap-6">
              {quizQuestions[step].options.map((opt, idx) => (
                <button
                  key={opt.label}
                  onClick={() => handleAnswer(idx)}
                  className="flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 rounded-2xl p-6 shadow group transition-all hover:scale-105 focus:outline-none"
                >
                  <opt.icon className="w-8 h-8 text-pink-500 mb-2 group-hover:scale-125 transition-transform" />
                  <span className="font-semibold text-gray-700">{opt.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : loadingResult ? (
          <div className="flex flex-col items-center justify-center py-16">
            {/* Spinner besar sebagai fallback */}
            <div className="mb-6">
              <svg className="animate-spin h-16 w-16 text-pink-400 mx-auto" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
            </div>
            {/* Animasi pesawat terbang di atas garis */}
            <div className="relative w-64 h-16 mb-6">
              <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-6" viewBox="0 0 256 24">
                <rect x="0" y="10" width="256" height="4" rx="2" fill="#fbcfe8" />
              </svg>
              <svg className="absolute animate-plane-move" style={{left:0,top:0}} width="48" height="24" viewBox="0 0 48 24">
                <polygon points="0,12 48,6 48,18" fill="#f472b6" />
                <rect x="36" y="10" width="8" height="4" rx="2" fill="#fbbf24" />
              </svg>
            </div>
            {/* Icon hotel berdenyut */}
            <div className="mb-4 animate-pulse-slow">
              <svg width="48" height="48" viewBox="0 0 48 48">
                <rect x="8" y="20" width="32" height="20" rx="4" fill="#a5b4fc" />
                <rect x="16" y="28" width="4" height="8" rx="1" fill="#f472b6" />
                <rect x="28" y="28" width="4" height="8" rx="1" fill="#f472b6" />
                <rect x="22" y="28" width="4" height="4" rx="1" fill="#fff" />
                <rect x="22" y="34" width="4" height="4" rx="1" fill="#fff" />
                <rect x="12" y="16" width="24" height="8" rx="2" fill="#fbbf24" />
              </svg>
            </div>
            <div className="text-pink-500 font-bold text-lg animate-bounce">Mencari hotel impianmu...</div>
            <div className="text-gray-400 text-sm mt-2">Tunggu sebentar, kami sedang memilihkan yang terbaik ✈️</div>
            <style jsx>{`
              @keyframes plane-move { 0%{left:0;} 100%{left:220px;} }
              .animate-plane-move { animation: plane-move 2s linear infinite; }
              @keyframes pulse-slow { 0%,100%{opacity:1;} 50%{opacity:0.7;} }
              .animate-pulse-slow { animation: pulse-slow 2.5s infinite; }
            `}</style>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white/90 backdrop-blur-xl border border-pink-200/40 shadow-2xl rounded-3xl px-2 py-10 mb-4 flex flex-col items-center overflow-visible"
          >
            {/* Confetti animasi saat hasil muncul */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
              <svg className="w-48 h-16 animate-confetti" viewBox="0 0 192 32">
                <circle cx="16" cy="16" r="4" fill="#f472b6"/>
                <circle cx="32" cy="8" r="3" fill="#a5b4fc"/>
                <circle cx="64" cy="24" r="4" fill="#fbbf24"/>
                <circle cx="96" cy="12" r="3" fill="#34d399"/>
                <circle cx="112" cy="20" r="4" fill="#f472b6"/>
                <circle cx="150" cy="10" r="4" fill="#f472b6"/>
                <circle cx="180" cy="20" r="3" fill="#a5b4fc"/>
              </svg>
            </div>
            {resultHotels.length === 0 ? (
              <div className="text-gray-400 py-8">Tidak ada hotel yang cocok ditemukan.</div>
            ) : null}
            {resultHotels.length > 0 && (
              <motion.div
                key={resultHotels[0].id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, type: 'spring' }}
                className={"relative bg-white rounded-3xl shadow-xl border border-pink-200/60 flex flex-col items-center w-full max-w-md mx-auto p-8 group hover:scale-105 hover:shadow-2xl transition-all ring-4 ring-pink-300 animate-glow"}
              >
                {/* Badge */}
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold shadow-lg z-10 bg-gradient-to-r from-pink-500 to-yellow-400 text-white animate-pulse">
                  🏆 Paling Cocok!
                </span>
                {/* Gambar hotel */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4 group-hover:shadow-lg">
                  <Image
                    src={resultHotels[0].gambar?.[0]?.url || "/images/hotel1.jpg"}
                    alt={resultHotels[0].nama}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                {/* Info hotel */}
                <h3 className="text-2xl font-bold text-pink-600 mb-1 text-center">{resultHotels[0].nama}</h3>
                <div className="flex items-center gap-2 text-gray-500 text-base mb-1 justify-center">
                  <MapPinIcon className="w-5 h-5" />
                  {resultHotels[0].kota}, {resultHotels[0].negara}
                </div>
                <div className="flex items-center gap-1 mb-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(resultHotels[0].rating ?? 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-pink-500 font-bold text-lg">{resultHotels[0].rating}</span>
                </div>
                <div className="text-gray-700 text-base mb-2 text-center">{resultHotels[0].alamat}</div>
                <div className="text-pink-600 font-bold mb-4 text-center text-lg">
                  {resultHotels[0].kamar?.[0]?.harga ? `Rp ${resultHotels[0].kamar[0].harga.toLocaleString("id-ID")}/malam` : '-'}
                </div>
                <Link
                  href={`/hotels/${resultHotels[0].id}`}
                  className="w-full mt-auto bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-bold shadow hover:scale-105 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ArrowRightIcon className="w-6 h-6" /> Kunjungi Hotel
                </Link>
              </motion.div>
            )}
            <button
              onClick={() => { setStep(0); setAnswers([]); setShowResult(false); setResultHotels([]); }}
              className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition-all"
            >
              Coba Lagi
            </button>
            <style jsx>{`
              @keyframes confetti { 0%{opacity:0;transform:translateY(-10px);} 20%{opacity:1;} 100%{opacity:0;transform:translateY(10px);} }
              .animate-confetti { animation: confetti 2.5s infinite; }
              @keyframes glow { 0%,100%{box-shadow:0 0 0 0 #f472b6;} 50%{box-shadow:0 0 32px 8px #f472b6;} }
              .animate-glow { animation: glow 2.5s infinite; }
            `}</style>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Komponen CTA
const CTA = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Siap untuk Berlibur?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl mb-8 text-white/90"
        >
          Temukan hotel impian Anda sekarang dan dapatkan pengalaman menginap yang tak terlupakan
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link 
            href="/hotels"
            className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
          >
            Cari Hotel
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <QuizSection />
      <TravelStoryTimeline />
      <PopularHotels />
      <CTA />
    </main>
  );
}

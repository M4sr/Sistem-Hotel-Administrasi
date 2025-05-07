import { BellIcon } from '@heroicons/react/24/outline';

export default function NotificationsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-pink-50 px-4 py-16">
      <div className="flex flex-col items-center">
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
    </div>
  );
} 
export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white font-sans max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Booking Kamar</h1>
      <form className="space-y-6">
        <div>
          <label className="block font-medium mb-1">Tanggal Check-in</label>
          <input type="date" className="w-full border rounded-lg px-4 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">Tanggal Check-out</label>
          <input type="date" className="w-full border rounded-lg px-4 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">Jumlah Tamu</label>
          <input type="number" min={1} max={8} defaultValue={2} className="w-full border rounded-lg px-4 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">Permintaan Khusus</label>
          <textarea className="w-full border rounded-lg px-4 py-2" placeholder="Contoh: kamar dekat lift, tanpa rokok, dll" />
        </div>
        <div className="bg-gray-50 rounded-lg p-4 flex flex-col gap-2">
          <div className="flex justify-between font-medium">
            <span>Harga per malam</span>
            <span>Rp 850.000</span>
          </div>
          <div className="flex justify-between">
            <span>Total (3 malam)</span>
            <span className="font-bold text-pink-600">Rp 2.550.000</span>
          </div>
        </div>
        <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold shadow">Lanjut ke Pembayaran</button>
      </form>
    </div>
  );
} 
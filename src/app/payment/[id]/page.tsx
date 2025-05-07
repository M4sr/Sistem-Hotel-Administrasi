export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-white font-sans max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Pembayaran</h1>
      <div className="mb-6">
        <div className="font-medium mb-2">Pilih Metode Pembayaran</div>
        <div className="flex gap-4">
          <button className="border rounded-lg px-4 py-2 hover:border-pink-600">Transfer Bank</button>
          <button className="border rounded-lg px-4 py-2 hover:border-pink-600">E-Wallet</button>
          <button className="border rounded-lg px-4 py-2 hover:border-pink-600">Kartu Kredit</button>
        </div>
      </div>
      <div className="mb-6">
        <div className="font-medium mb-2">Upload Bukti Pembayaran</div>
        <input type="file" className="block" />
      </div>
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex justify-between font-medium">
          <span>Total Pembayaran</span>
          <span className="text-pink-600 font-bold">Rp 2.550.000</span>
        </div>
        <div className="text-xs text-gray-500 mt-2">Setelah pembayaran diverifikasi, booking Anda akan dikonfirmasi.</div>
      </div>
      <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold shadow">Konfirmasi Pembayaran</button>
    </div>
  );
} 
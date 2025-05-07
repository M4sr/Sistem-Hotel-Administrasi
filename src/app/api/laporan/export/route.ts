import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import ExcelJS from "exceljs"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const tanggalMulai = searchParams.get("tanggalMulai")
    const tanggalSelesai = searchParams.get("tanggalSelesai")
    const status = searchParams.get("status")
    const hotelId = searchParams.get("hotelId")

    // Buat filter berdasarkan parameter yang diberikan
    const where: any = {}

    if (tanggalMulai && tanggalSelesai) {
      where.createdAt = {
        gte: new Date(tanggalMulai),
        lte: new Date(tanggalSelesai)
      }
    }

    if (status) {
      where.status = status
    }

    if (hotelId) {
      where.kamar = {
        hotelId: hotelId
      }
    }

    // Ambil data pemesanan dengan relasi yang diperlukan
    const pemesanan = await prisma.pemesanan.findMany({
      where,
      include: {
        kamar: {
          include: {
            hotel: true
          }
        },
        user: true
      },
      orderBy: {
        createdAt: "desc"
      }
    })

    // Buat workbook Excel
    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet("Laporan Pemesanan")

    // Set header kolom
    worksheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "Tanggal", key: "tanggal", width: 15 },
      { header: "Hotel", key: "hotel", width: 30 },
      { header: "Kamar", key: "kamar", width: 20 },
      { header: "Pelanggan", key: "pelanggan", width: 30 },
      { header: "Check In", key: "checkIn", width: 15 },
      { header: "Check Out", key: "checkOut", width: 15 },
      { header: "Total Harga", key: "totalHarga", width: 20 },
      { header: "Status", key: "status", width: 15 }
    ]

    // Tambahkan data ke worksheet
    pemesanan.forEach(p => {
      worksheet.addRow({
        id: p.id,
        tanggal: p.createdAt.toISOString().split("T")[0],
        hotel: p.kamar.hotel.nama,
        kamar: p.kamar.nama,
        pelanggan: p.user.name || "Tidak ada nama",
        checkIn: p.checkIn.toISOString().split("T")[0],
        checkOut: p.checkOut.toISOString().split("T")[0],
        totalHarga: p.totalHarga,
        status: p.status
      })
    })

    // Styling header
    worksheet.getRow(1).font = { bold: true }
    worksheet.getRow(1).alignment = { vertical: "middle", horizontal: "center" }

    // Format kolom total harga
    worksheet.getColumn("totalHarga").numFmt = '"Rp "#,##0'

    // Generate buffer Excel
    const buffer = await workbook.xlsx.writeBuffer()

    // Set header response
    const headers = new Headers()
    headers.append("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    headers.append("Content-Disposition", `attachment; filename=laporan-${new Date().toISOString().split("T")[0]}.xlsx`)

    return new NextResponse(buffer, {
      status: 200,
      headers
    })
  } catch (error) {
    console.error("Error exporting laporan:", error)
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengekspor data laporan" },
      { status: 500 }
    )
  }
} 
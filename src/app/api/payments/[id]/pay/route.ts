import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id
  const formData = await request.formData()
  const metodePembayaran = formData.get("metodePembayaran")
  // const catatan = formData.get("catatan") // dihapus karena tidak ada di schema
  // Jika ingin simpan file bukti, tambahkan logic upload di sini

  await prisma.pembayaran.update({
    where: { id },
    data: {
      metodePembayaran: typeof metodePembayaran === "string" ? metodePembayaran : "TRANSFER",
      status: "PENDING"
    }
  })
  return NextResponse.json({ success: true })
} 
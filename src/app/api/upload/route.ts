import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"
import { v4 as uuidv4 } from "uuid"
import { writeFile } from 'fs/promises'

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const ext = path.extname(file.name)
    const filename = `${Date.now()}-${uuidv4()}${ext}`
    const uploadDir = path.join(process.cwd(), "public", "foto_kamar")
    
    await fs.mkdir(uploadDir, { recursive: true })
    const filePath = path.join(uploadDir, filename)
    
    await writeFile(filePath, buffer)
    const url = `/foto_kamar/${filename}`

    return NextResponse.json({ url })
  } catch (error) {
    console.error("[UPLOAD_POST]", error)
    return NextResponse.json({ error: "Upload gagal" }, { status: 500 })
  }
} 
import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const image = formData.get('image') as File | null;

    if (!image) {
      return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
    }

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    const filename = `${uniqueSuffix}-${image.name}`;
    const uploadDir = join(process.cwd(), 'public/uploads');
    const filepath = join(uploadDir, filename);

    await writeFile(filepath, buffer);
    const imagePath = `/uploads/${filename}`;

    return NextResponse.json({ url: imagePath });
  } catch (error) {
    console.error("[USER_IMAGE_UPLOAD]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

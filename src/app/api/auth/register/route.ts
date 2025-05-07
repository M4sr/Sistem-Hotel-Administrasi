import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import * as z from "zod";

const registerSchema = z.object({
  name: z.string().min(2, "Nama harus minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password harus minimal 6 karakter"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = registerSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors[0].message }, { status: 400 });
    }
    const { name, email, password } = parsed.data;

    // Cek email sudah terdaftar
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "Email sudah digunakan" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cari role default (Pengguna)
    const defaultRole = await prisma.role.findFirst({ where: { name: "Pengguna" } });
    if (!defaultRole) {
      return NextResponse.json({ error: "Role default tidak ditemukan" }, { status: 500 });
    }

    // Buat user baru
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        roleId: defaultRole.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error("[REGISTER]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
} 
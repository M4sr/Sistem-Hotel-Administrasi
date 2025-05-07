-- 1. Tambahkan kolom tanpa NOT NULL dulu
ALTER TABLE "Kamar" ADD COLUMN "nomorKamar" TEXT;

-- 2. Isi data lama dengan nomor kamar unik (misal: 101, 102, dst)
UPDATE "Kamar" SET "nomorKamar" = '101' WHERE "id" = 'ID_KAMAR_1';
UPDATE "Kamar" SET "nomorKamar" = '102' WHERE "id" = 'ID_KAMAR_2';
UPDATE "Kamar" SET "nomorKamar" = '103' WHERE "id" = 'ID_KAMAR_3';

-- 3. Baru set kolom menjadi NOT NULL dan UNIQUE
ALTER TABLE "Kamar" ALTER COLUMN "nomorKamar" SET NOT NULL;
ALTER TABLE "Kamar" ADD CONSTRAINT "Kamar_nomorKamar_key" UNIQUE("nomorKamar");
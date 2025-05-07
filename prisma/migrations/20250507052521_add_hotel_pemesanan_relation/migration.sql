/*
  Warnings:

  - Added the required column `hotelId` to the `Pemesanan` table without a default value. This is not possible if the table is not empty.

*/
-- First, add the column as nullable
ALTER TABLE "Pemesanan" ADD COLUMN "hotelId" TEXT;

-- Update existing records with hotelId from Kamar
UPDATE "Pemesanan" p
SET "hotelId" = k."hotelId"
FROM "Kamar" k
WHERE p."kamarId" = k.id;

-- Now make the column required
ALTER TABLE "Pemesanan" ALTER COLUMN "hotelId" SET NOT NULL;

-- Add the foreign key constraint
ALTER TABLE "Pemesanan" ADD CONSTRAINT "Pemesanan_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Add the relation to Hotel model
ALTER TABLE "Hotel" ADD COLUMN "pemesanan" TEXT[] DEFAULT ARRAY[]::TEXT[];

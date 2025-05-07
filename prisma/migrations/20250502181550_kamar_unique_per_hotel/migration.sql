/*
  Warnings:

  - A unique constraint covering the columns `[hotelId,nomorKamar]` on the table `Kamar` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
ALTER TABLE "Kamar" DROP CONSTRAINT "Kamar_nomorKamar_key";

-- CreateIndex
CREATE UNIQUE INDEX "Kamar_hotelId_nomorKamar_key" ON "Kamar"("hotelId", "nomorKamar");

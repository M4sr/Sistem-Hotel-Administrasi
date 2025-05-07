/*
  Warnings:

  - You are about to drop the column `hotelId` on the `Pemesanan` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pemesanan" DROP CONSTRAINT "Pemesanan_hotelId_fkey";

-- AlterTable
ALTER TABLE "Pemesanan" DROP COLUMN "hotelId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "resetPasswordExpires" TIMESTAMP(3),
ADD COLUMN     "resetPasswordToken" TEXT;

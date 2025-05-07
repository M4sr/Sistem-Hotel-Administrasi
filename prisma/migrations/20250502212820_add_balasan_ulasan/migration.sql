-- CreateTable
CREATE TABLE "BalasanUlasan" (
    "id" TEXT NOT NULL,
    "ulasanId" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "isi" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BalasanUlasan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BalasanUlasan" ADD CONSTRAINT "BalasanUlasan_ulasanId_fkey" FOREIGN KEY ("ulasanId") REFERENCES "Ulasan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BalasanUlasan" ADD CONSTRAINT "BalasanUlasan_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

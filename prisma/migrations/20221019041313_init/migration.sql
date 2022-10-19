/*
  Warnings:

  - You are about to drop the `Alerts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Alerts";

-- CreateTable
CREATE TABLE "Alert" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "body" TEXT NOT NULL,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);

/*
  Warnings:

  - You are about to drop the `Poject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Poject";

-- CreateTable
CREATE TABLE "project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

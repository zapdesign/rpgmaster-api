/*
  Warnings:

  - You are about to drop the `master-image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `player-image-project` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "master-image";

-- DropTable
DROP TABLE "player-image-project";

-- CreateTable
CREATE TABLE "masterImage" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "image_name" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "player_visible" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "masterImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "playerImageProject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "image_name" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "playerImageProject_pkey" PRIMARY KEY ("id")
);

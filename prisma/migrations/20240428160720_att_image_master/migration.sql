/*
  Warnings:

  - Added the required column `is_active` to the `masterImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "masterImage" ADD COLUMN     "is_active" BOOLEAN NOT NULL;

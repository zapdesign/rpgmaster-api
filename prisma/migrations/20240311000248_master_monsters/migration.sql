/*
  Warnings:

  - Added the required column `nickname` to the `masterMonster` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "masterMonster" ADD COLUMN     "nickname" TEXT NOT NULL;

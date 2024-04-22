/*
  Warnings:

  - Added the required column `rodada` to the `project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "project" ADD COLUMN     "rodada" INTEGER NOT NULL;

/*
  Warnings:

  - Added the required column `project_id` to the `masterMonster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rodada` to the `masterMonster` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "masterMonster" ADD COLUMN     "project_id" TEXT NOT NULL,
ADD COLUMN     "rodada" BOOLEAN NOT NULL;

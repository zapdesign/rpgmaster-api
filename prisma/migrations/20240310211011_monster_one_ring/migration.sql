/*
  Warnings:

  - Added the required column `nome` to the `monsterOneRing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "monsterOneRing" ADD COLUMN     "nome" TEXT NOT NULL;

/*
  Warnings:

  - You are about to drop the column `arcos` on the `personagem` table. All the data in the column will be lost.
  - You are about to drop the column `espadas` on the `personagem` table. All the data in the column will be lost.
  - You are about to drop the column `lancas` on the `personagem` table. All the data in the column will be lost.
  - You are about to drop the column `machados` on the `personagem` table. All the data in the column will be lost.
  - Added the required column `arcos_bool` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `espadas_bool` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lancas_bool` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `machados_bool` to the `personagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "personagem" DROP COLUMN "arcos",
DROP COLUMN "espadas",
DROP COLUMN "lancas",
DROP COLUMN "machados",
ADD COLUMN     "arcos_bool" INTEGER NOT NULL,
ADD COLUMN     "espadas_bool" INTEGER NOT NULL,
ADD COLUMN     "lancas_bool" INTEGER NOT NULL,
ADD COLUMN     "machados_bool" INTEGER NOT NULL;

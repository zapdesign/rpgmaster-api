/*
  Warnings:

  - Added the required column `arcos` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `batalha` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `batalha_bool` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `busca` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `busca_bool` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cortesia` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cortesia_bool` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cura` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cura_bool` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discernimento` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discernimento_bool` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enigma` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enigma_bool` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `espadas` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exploracao` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exploracao_bool` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `furtividade` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `furtividade_bool` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `historia` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `historia_bool` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inducao` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inducao_bool` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lancas` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `machados` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `persuasao` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `persuasao_bool` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recompensa` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recompensa_valor` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `viagem` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `viagem_bool` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `virtudes` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `virtudes_sabedoria` to the `personagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "personagem" ADD COLUMN     "arcos" INTEGER NOT NULL,
ADD COLUMN     "batalha" BOOLEAN NOT NULL,
ADD COLUMN     "batalha_bool" INTEGER NOT NULL,
ADD COLUMN     "busca" BOOLEAN NOT NULL,
ADD COLUMN     "busca_bool" INTEGER NOT NULL,
ADD COLUMN     "cortesia" BOOLEAN NOT NULL,
ADD COLUMN     "cortesia_bool" INTEGER NOT NULL,
ADD COLUMN     "cura" BOOLEAN NOT NULL,
ADD COLUMN     "cura_bool" INTEGER NOT NULL,
ADD COLUMN     "discernimento" BOOLEAN NOT NULL,
ADD COLUMN     "discernimento_bool" INTEGER NOT NULL,
ADD COLUMN     "enigma" BOOLEAN NOT NULL,
ADD COLUMN     "enigma_bool" INTEGER NOT NULL,
ADD COLUMN     "espadas" INTEGER NOT NULL,
ADD COLUMN     "exploracao" BOOLEAN NOT NULL,
ADD COLUMN     "exploracao_bool" INTEGER NOT NULL,
ADD COLUMN     "furtividade" BOOLEAN NOT NULL,
ADD COLUMN     "furtividade_bool" INTEGER NOT NULL,
ADD COLUMN     "historia" BOOLEAN NOT NULL,
ADD COLUMN     "historia_bool" INTEGER NOT NULL,
ADD COLUMN     "inducao" BOOLEAN NOT NULL,
ADD COLUMN     "inducao_bool" INTEGER NOT NULL,
ADD COLUMN     "lancas" INTEGER NOT NULL,
ADD COLUMN     "machados" INTEGER NOT NULL,
ADD COLUMN     "persuasao" BOOLEAN NOT NULL,
ADD COLUMN     "persuasao_bool" INTEGER NOT NULL,
ADD COLUMN     "recompensa" TEXT NOT NULL,
ADD COLUMN     "recompensa_valor" INTEGER NOT NULL,
ADD COLUMN     "viagem" BOOLEAN NOT NULL,
ADD COLUMN     "viagem_bool" INTEGER NOT NULL,
ADD COLUMN     "virtudes" TEXT NOT NULL,
ADD COLUMN     "virtudes_sabedoria" INTEGER NOT NULL;

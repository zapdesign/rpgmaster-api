/*
  Warnings:

  - Added the required column `armadura` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `armadura_carga` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `armadura_protecao` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `arrasado` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carga` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carga_atual` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cicatrizes_sombra` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `elmo` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `elmo_carga` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `elmo_protecao` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipamento_de_viagem` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `escudo` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `escudo_carga` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `escudo_protecao` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `esperanca_atual` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exausto` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fadiga` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ferido` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ferimento` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pontos_de_aventura` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pontos_de_pericia` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pontos_de_sociedade` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sombra` to the `personagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tempo_ferimento` to the `personagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "personagem" ADD COLUMN     "armadura" TEXT NOT NULL,
ADD COLUMN     "armadura_carga" INTEGER NOT NULL,
ADD COLUMN     "armadura_protecao" INTEGER NOT NULL,
ADD COLUMN     "arrasado" BOOLEAN NOT NULL,
ADD COLUMN     "carga" INTEGER NOT NULL,
ADD COLUMN     "carga_atual" INTEGER NOT NULL,
ADD COLUMN     "cicatrizes_sombra" INTEGER NOT NULL,
ADD COLUMN     "elmo" TEXT NOT NULL,
ADD COLUMN     "elmo_carga" INTEGER NOT NULL,
ADD COLUMN     "elmo_protecao" INTEGER NOT NULL,
ADD COLUMN     "equipamento_de_viagem" TEXT NOT NULL,
ADD COLUMN     "escudo" TEXT NOT NULL,
ADD COLUMN     "escudo_carga" INTEGER NOT NULL,
ADD COLUMN     "escudo_protecao" INTEGER NOT NULL,
ADD COLUMN     "esperanca_atual" INTEGER NOT NULL,
ADD COLUMN     "exausto" BOOLEAN NOT NULL,
ADD COLUMN     "fadiga" INTEGER NOT NULL,
ADD COLUMN     "ferido" BOOLEAN NOT NULL,
ADD COLUMN     "ferimento" TEXT NOT NULL,
ADD COLUMN     "pontos_de_aventura" INTEGER NOT NULL,
ADD COLUMN     "pontos_de_pericia" INTEGER NOT NULL,
ADD COLUMN     "pontos_de_sociedade" INTEGER NOT NULL,
ADD COLUMN     "sombra" INTEGER NOT NULL,
ADD COLUMN     "tempo_ferimento" INTEGER NOT NULL;

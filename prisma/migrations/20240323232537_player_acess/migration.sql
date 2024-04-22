/*
  Warnings:

  - You are about to drop the `playerCard` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "PlayerPage_name_project_id_key";

-- DropTable
DROP TABLE "playerCard";

-- CreateTable
CREATE TABLE "PlayerAcess" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlayerAcess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personagem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "player_id" TEXT NOT NULL,
    "cultura_heroica" TEXT NOT NULL,
    "idade" TEXT NOT NULL,
    "padrao_de_vida" TEXT NOT NULL,
    "bencao_cultural" TEXT NOT NULL,
    "patrono" TEXT NOT NULL,
    "chamado" TEXT NOT NULL,
    "caminho_das_sombras" TEXT NOT NULL,
    "tesouro" TEXT NOT NULL,
    "caracteristicas_notaveis" TEXT NOT NULL,
    "falhas" TEXT NOT NULL,
    "forca_na" INTEGER NOT NULL,
    "forca_nivel" INTEGER NOT NULL,
    "forca_resistencia" INTEGER NOT NULL,
    "fascinio" BOOLEAN NOT NULL,
    "fascinio_bool" INTEGER NOT NULL,
    "atletismo" BOOLEAN NOT NULL,
    "atletismo_bool" INTEGER NOT NULL,
    "vigilancia" BOOLEAN NOT NULL,
    "vigilancia_bool" INTEGER NOT NULL,
    "cacada" BOOLEAN NOT NULL,
    "cacada_bool" INTEGER NOT NULL,
    "musica" BOOLEAN NOT NULL,
    "musica_bool" INTEGER NOT NULL,
    "oficio" BOOLEAN NOT NULL,
    "oficio_bool" INTEGER NOT NULL,
    "coracao_na" INTEGER NOT NULL,
    "coracao_nivel" INTEGER NOT NULL,
    "coracao_resistencia" INTEGER NOT NULL,
    "astucia_na" INTEGER NOT NULL,
    "astucia_nivel" INTEGER NOT NULL,
    "astucia_resistencia" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "personagem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlayerAcess_name_project_id_key" ON "PlayerAcess"("name", "project_id");

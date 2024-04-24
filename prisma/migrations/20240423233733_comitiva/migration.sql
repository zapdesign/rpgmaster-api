-- CreateTable
CREATE TABLE "Comitiva" (
    "id" TEXT NOT NULL,
    "player_id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "ano" TEXT NOT NULL,
    "estacao" TEXT NOT NULL,
    "jornada_de" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "dias_de_viagem" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "papel" TEXT NOT NULL,
    "fadiga_da_viagem" INTEGER NOT NULL,
    "ponei_1" TEXT NOT NULL,
    "p1_vigor" INTEGER NOT NULL,
    "ponei_2" TEXT NOT NULL,
    "p2_vigor" INTEGER NOT NULL,
    "ponei_3" TEXT NOT NULL,
    "p3_vigor" INTEGER NOT NULL,
    "diario" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comitiva_pkey" PRIMARY KEY ("id")
);

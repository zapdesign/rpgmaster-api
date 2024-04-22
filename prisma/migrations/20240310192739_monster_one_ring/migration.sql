-- CreateTable
CREATE TABLE "monsterOneRing" (
    "id" TEXT NOT NULL,
    "image_monster" TEXT NOT NULL,
    "caracteristicas" TEXT NOT NULL,
    "nivel_de_atributo" TEXT NOT NULL,
    "resistencia" TEXT NOT NULL,
    "poder" TEXT NOT NULL,
    "odio" TEXT NOT NULL,
    "bloqueio" TEXT NOT NULL,
    "armadura" TEXT NOT NULL,
    "proeficiencia_de_combate" TEXT NOT NULL,
    "habilidades_mortais" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "grupo" TEXT NOT NULL,
    "rpg" TEXT NOT NULL,

    CONSTRAINT "monsterOneRing_pkey" PRIMARY KEY ("id")
);

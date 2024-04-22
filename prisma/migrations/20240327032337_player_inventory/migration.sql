-- CreateTable
CREATE TABLE "PlayerInventory" (
    "id" TEXT NOT NULL,
    "player_id" TEXT NOT NULL,
    "equipamento_de_guerra" TEXT NOT NULL,
    "dano" INTEGER NOT NULL,
    "ferimento" INTEGER NOT NULL,
    "carga" INTEGER NOT NULL,
    "anotacao_equipamento" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlayerInventory_pkey" PRIMARY KEY ("id")
);

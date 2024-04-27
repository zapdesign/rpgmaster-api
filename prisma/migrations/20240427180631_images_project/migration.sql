-- CreateTable
CREATE TABLE "master-image" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "image_name" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "player_visible" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "master-image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player-image-project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "image_name" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "player-image-project_pkey" PRIMARY KEY ("id")
);

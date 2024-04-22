-- CreateTable
CREATE TABLE "Poject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Poject_pkey" PRIMARY KEY ("id")
);

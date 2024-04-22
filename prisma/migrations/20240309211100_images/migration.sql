-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL,
    "imageName" TEXT NOT NULL,
    "id_project" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "width" TEXT NOT NULL,
    "left" TEXT NOT NULL,
    "top" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

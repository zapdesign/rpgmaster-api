/*
  Warnings:

  - You are about to drop the column `password` on the `playerCard` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,project_id]` on the table `PlayerPage` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "playerCard" DROP COLUMN "password";

-- CreateIndex
CREATE UNIQUE INDEX "PlayerPage_name_project_id_key" ON "PlayerPage"("name", "project_id");

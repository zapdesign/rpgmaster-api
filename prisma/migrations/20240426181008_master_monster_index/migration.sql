/*
  Warnings:

  - A unique constraint covering the columns `[project_id,index]` on the table `masterMonster` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `index` to the `masterMonster` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "masterMonster" ADD COLUMN     "index" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "masterMonster_project_id_index_key" ON "masterMonster"("project_id", "index");

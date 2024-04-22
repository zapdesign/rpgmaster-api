/*
  Warnings:

  - A unique constraint covering the columns `[email,project_id]` on the table `PlayerAcess` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "PlayerAcess_name_project_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "PlayerAcess_email_project_id_key" ON "PlayerAcess"("email", "project_id");

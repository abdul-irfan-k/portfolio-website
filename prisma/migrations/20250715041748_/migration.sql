/*
  Warnings:

  - A unique constraint covering the columns `[project_id]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - Made the column `project_id` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Project_project_name_key";

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "project_id" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Project_project_id_key" ON "Project"("project_id");

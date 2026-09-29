/*
  Warnings:

  - You are about to drop the column `lighthouseImg` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "lighthouseImg",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "githubLink" DROP NOT NULL,
ALTER COLUMN "liveLink" DROP NOT NULL;

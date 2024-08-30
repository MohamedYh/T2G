/*
  Warnings:

  - You are about to drop the column `projectId` on the `Background_Image` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Background_Image` DROP FOREIGN KEY `Background_Image_projectId_fkey`;

-- AlterTable
ALTER TABLE `Background_Image` DROP COLUMN `projectId`;

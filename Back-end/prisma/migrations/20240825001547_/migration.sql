/*
  Warnings:

  - Added the required column `projectId` to the `Background_Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Background_Image` ADD COLUMN `projectId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Background_Image` ADD CONSTRAINT `Background_Image_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

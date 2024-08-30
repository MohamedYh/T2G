/*
  Warnings:

  - You are about to drop the column `src` on the `Background_Image` table. All the data in the column will be lost.
  - Added the required column `Date` to the `Background_Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_name` to the `Background_Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Background_Image` DROP COLUMN `src`,
    ADD COLUMN `Date` DATETIME(3) NOT NULL,
    ADD COLUMN `image_name` TINYTEXT NOT NULL;

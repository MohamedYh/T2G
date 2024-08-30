/*
  Warnings:

  - You are about to drop the column `border_raduis` on the `Bars` table. All the data in the column will be lost.
  - You are about to drop the column `border_raduis` on the `Column` table. All the data in the column will be lost.
  - You are about to drop the column `b_border_raduis` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `b_border_raduis` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `innter_raduis` on the `Donut` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Bars` DROP COLUMN `border_raduis`,
    ADD COLUMN `border_radius` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `Column` DROP COLUMN `border_raduis`,
    ADD COLUMN `border_radius` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `Column_Area` DROP COLUMN `b_border_raduis`,
    ADD COLUMN `b_border_radius` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `Column_Line` DROP COLUMN `b_border_raduis`,
    ADD COLUMN `b_border_radius` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `Donut` DROP COLUMN `innter_raduis`,
    ADD COLUMN `inner_radius` INTEGER NOT NULL DEFAULT 60;

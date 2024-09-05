/*
  Warnings:

  - You are about to drop the column `a_axisX` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `a_axisY` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `a_axis_txt_color` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `a_axis_txt_size` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `a_isAxis` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `a_isLegend` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `a_is_axis_txt_bold` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `a_is_axis_txt_italic` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `a_is_legend_bold` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `a_is_legend_italic` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `a_legend_color` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `a_legend_size` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `b_axisX` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `b_axisY` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `b_axis_txt_color` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `b_axis_txt_size` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `b_isAxis` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `b_isLegend` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `b_is_axis_txt_bold` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `b_is_axis_txt_italic` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `b_is_legend_bold` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `b_is_legend_italic` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `b_legend_color` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `b_legend_size` on the `Column_Area` table. All the data in the column will be lost.
  - You are about to drop the column `b_axisX` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `b_axisY` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `b_axis_txt_color` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `b_axis_txt_size` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `b_isAxis` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `b_isLegend` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `b_is_axis_txt_bold` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `b_is_axis_txt_italic` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `b_is_legend_bold` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `b_is_legend_italic` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `b_legend_color` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `b_legend_size` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `l_axisX` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `l_axisY` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `l_axis_txt_color` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `l_axis_txt_size` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `l_isAxis` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `l_isLegend` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `l_is_axis_txt_bold` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `l_is_axis_txt_italic` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `l_is_legend_bold` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `l_is_legend_italic` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `l_legend_color` on the `Column_Line` table. All the data in the column will be lost.
  - You are about to drop the column `l_legend_size` on the `Column_Line` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Column_Area` DROP COLUMN `a_axisX`,
    DROP COLUMN `a_axisY`,
    DROP COLUMN `a_axis_txt_color`,
    DROP COLUMN `a_axis_txt_size`,
    DROP COLUMN `a_isAxis`,
    DROP COLUMN `a_isLegend`,
    DROP COLUMN `a_is_axis_txt_bold`,
    DROP COLUMN `a_is_axis_txt_italic`,
    DROP COLUMN `a_is_legend_bold`,
    DROP COLUMN `a_is_legend_italic`,
    DROP COLUMN `a_legend_color`,
    DROP COLUMN `a_legend_size`,
    DROP COLUMN `b_axisX`,
    DROP COLUMN `b_axisY`,
    DROP COLUMN `b_axis_txt_color`,
    DROP COLUMN `b_axis_txt_size`,
    DROP COLUMN `b_isAxis`,
    DROP COLUMN `b_isLegend`,
    DROP COLUMN `b_is_axis_txt_bold`,
    DROP COLUMN `b_is_axis_txt_italic`,
    DROP COLUMN `b_is_legend_bold`,
    DROP COLUMN `b_is_legend_italic`,
    DROP COLUMN `b_legend_color`,
    DROP COLUMN `b_legend_size`,
    ADD COLUMN `axisX` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `axisY` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `axis_txt_color` VARCHAR(191) NOT NULL DEFAULT '#000000',
    ADD COLUMN `axis_txt_size` INTEGER NOT NULL DEFAULT 10,
    ADD COLUMN `isAxis` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `isLegend` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `is_axis_txt_bold` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `is_axis_txt_italic` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `is_legend_bold` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `is_legend_italic` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `legend_color` VARCHAR(191) NOT NULL DEFAULT 'rgba(0,0,0,.75)',
    ADD COLUMN `legend_size` INTEGER NOT NULL DEFAULT 16;

-- AlterTable
ALTER TABLE `Column_Line` DROP COLUMN `b_axisX`,
    DROP COLUMN `b_axisY`,
    DROP COLUMN `b_axis_txt_color`,
    DROP COLUMN `b_axis_txt_size`,
    DROP COLUMN `b_isAxis`,
    DROP COLUMN `b_isLegend`,
    DROP COLUMN `b_is_axis_txt_bold`,
    DROP COLUMN `b_is_axis_txt_italic`,
    DROP COLUMN `b_is_legend_bold`,
    DROP COLUMN `b_is_legend_italic`,
    DROP COLUMN `b_legend_color`,
    DROP COLUMN `b_legend_size`,
    DROP COLUMN `l_axisX`,
    DROP COLUMN `l_axisY`,
    DROP COLUMN `l_axis_txt_color`,
    DROP COLUMN `l_axis_txt_size`,
    DROP COLUMN `l_isAxis`,
    DROP COLUMN `l_isLegend`,
    DROP COLUMN `l_is_axis_txt_bold`,
    DROP COLUMN `l_is_axis_txt_italic`,
    DROP COLUMN `l_is_legend_bold`,
    DROP COLUMN `l_is_legend_italic`,
    DROP COLUMN `l_legend_color`,
    DROP COLUMN `l_legend_size`,
    ADD COLUMN `axisX` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `axisY` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `axis_txt_color` VARCHAR(191) NOT NULL DEFAULT '#000000',
    ADD COLUMN `axis_txt_size` INTEGER NOT NULL DEFAULT 10,
    ADD COLUMN `isAxis` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `isLegend` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `is_axis_txt_bold` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `is_axis_txt_italic` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `is_legend_bold` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `is_legend_italic` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `legend_color` VARCHAR(191) NOT NULL DEFAULT 'rgba(0,0,0,.75)',
    ADD COLUMN `legend_size` INTEGER NOT NULL DEFAULT 16;

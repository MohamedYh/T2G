/*
  Warnings:

  - You are about to drop the column `bar_spacing` on the `Donut` table. All the data in the column will be lost.
  - You are about to drop the column `bar_spacing` on the `Pie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Area` MODIFY `show_pointer_mark` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `isAxis` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `is_axis_txt_italic` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `is_axis_txt_bold` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `axis_txt_color` VARCHAR(191) NOT NULL DEFAULT 'black',
    MODIFY `axisX` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `axisY` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `isLegend` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `legend_size` INTEGER NOT NULL DEFAULT 16,
    MODIFY `is_legend_italic` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `is_legend_bold` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `legend_color` VARCHAR(191) NOT NULL DEFAULT 'black',
    MODIFY `thickness` INTEGER NOT NULL DEFAULT 0,
    MODIFY `is_line_smoth` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Bars` MODIFY `bar_spacing` DOUBLE NOT NULL DEFAULT 1.5,
    MODIFY `border_raduis` INTEGER NOT NULL DEFAULT 0,
    MODIFY `border_bld` INTEGER NOT NULL DEFAULT 0,
    MODIFY `border_color` VARCHAR(191) NOT NULL DEFAULT 'transparent',
    MODIFY `isLegend` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `legend_size` INTEGER NOT NULL DEFAULT 16,
    MODIFY `is_legend_italic` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `is_legend_bold` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `legend_color` VARCHAR(191) NOT NULL DEFAULT 'black',
    MODIFY `isAxis` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `is_axis_txt_italic` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `is_axis_txt_bold` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `axis_txt_color` VARCHAR(191) NOT NULL DEFAULT 'black',
    MODIFY `axisX` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `axisY` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `Column` MODIFY `bar_spacing` DOUBLE NOT NULL DEFAULT 1.5,
    MODIFY `border_raduis` INTEGER NOT NULL DEFAULT 0,
    MODIFY `border_bld` INTEGER NOT NULL DEFAULT 0,
    MODIFY `border_color` VARCHAR(191) NOT NULL DEFAULT 'transparent',
    MODIFY `isLegend` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `legend_size` INTEGER NOT NULL DEFAULT 16,
    MODIFY `is_legend_italic` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `is_legend_bold` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `legend_color` VARCHAR(191) NOT NULL DEFAULT 'black',
    MODIFY `isAxis` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `is_axis_txt_italic` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `is_axis_txt_bold` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `axis_txt_color` VARCHAR(191) NOT NULL DEFAULT 'black',
    MODIFY `axisX` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `axisY` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `Column_Area` MODIFY `b_bar_spacing` DOUBLE NOT NULL DEFAULT 1.5,
    MODIFY `b_border_raduis` INTEGER NOT NULL DEFAULT 0,
    MODIFY `b_border_bld` INTEGER NOT NULL DEFAULT 0,
    MODIFY `b_border_color` VARCHAR(191) NOT NULL DEFAULT 'transparent',
    MODIFY `b_isLegend` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `b_legend_size` INTEGER NOT NULL DEFAULT 16,
    MODIFY `b_is_legend_italic` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `b_is_legend_bold` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `b_legend_color` VARCHAR(191) NOT NULL DEFAULT 'black',
    MODIFY `b_isAxis` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `b_is_axis_txt_italic` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `b_is_axis_txt_bold` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `b_axis_txt_color` VARCHAR(191) NOT NULL DEFAULT 'black',
    MODIFY `b_axisX` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `b_axisY` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `a_show_pointer_mark` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `a_isAxis` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `a_is_axis_txt_italic` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `a_is_axis_txt_bold` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `a_axis_txt_color` VARCHAR(191) NOT NULL DEFAULT 'black',
    MODIFY `a_axisX` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `a_axisY` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `a_isLegend` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `a_legend_size` INTEGER NOT NULL DEFAULT 16,
    MODIFY `a_is_legend_italic` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `a_is_legend_bold` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `a_legend_color` VARCHAR(191) NOT NULL DEFAULT 'black',
    MODIFY `a_thickness` INTEGER NOT NULL DEFAULT 0,
    MODIFY `a_is_line_smoth` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Column_Line` MODIFY `b_bar_spacing` DOUBLE NOT NULL DEFAULT 1.5,
    MODIFY `b_border_raduis` INTEGER NOT NULL DEFAULT 0,
    MODIFY `b_border_bld` INTEGER NOT NULL DEFAULT 0,
    MODIFY `b_border_color` VARCHAR(191) NOT NULL DEFAULT 'transparent',
    MODIFY `b_isLegend` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `b_legend_size` INTEGER NOT NULL DEFAULT 16,
    MODIFY `b_is_legend_italic` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `b_is_legend_bold` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `b_legend_color` VARCHAR(191) NOT NULL DEFAULT 'black',
    MODIFY `b_isAxis` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `b_is_axis_txt_italic` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `b_is_axis_txt_bold` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `b_axis_txt_color` VARCHAR(191) NOT NULL DEFAULT 'black',
    MODIFY `b_axisX` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `b_axisY` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `l_show_pointer_mark` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `l_isAxis` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `l_is_axis_txt_italic` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `l_is_axis_txt_bold` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `l_axis_txt_color` VARCHAR(191) NOT NULL DEFAULT 'black',
    MODIFY `l_axisX` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `l_axisY` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `l_isLegend` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `l_legend_size` INTEGER NOT NULL DEFAULT 16,
    MODIFY `l_is_legend_italic` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `l_is_legend_bold` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `l_legend_color` VARCHAR(191) NOT NULL DEFAULT 'black',
    MODIFY `l_thickness` INTEGER NOT NULL DEFAULT 0,
    MODIFY `l_is_line_smoth` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Donut` DROP COLUMN `bar_spacing`,
    MODIFY `start_angle` INTEGER NOT NULL DEFAULT 0,
    MODIFY `innter_raduis` INTEGER NOT NULL DEFAULT 60,
    MODIFY `isLegend` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `legend_size` INTEGER NOT NULL DEFAULT 16,
    MODIFY `is_legend_italic` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `is_legend_bold` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `legend_color` VARCHAR(191) NOT NULL DEFAULT 'black';

-- AlterTable
ALTER TABLE `Line` MODIFY `show_pointer_mark` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `isAxis` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `is_axis_txt_italic` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `is_axis_txt_bold` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `axis_txt_color` VARCHAR(191) NOT NULL DEFAULT 'black',
    MODIFY `axisX` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `axisY` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `isLegend` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `legend_size` INTEGER NOT NULL DEFAULT 16,
    MODIFY `is_legend_italic` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `is_legend_bold` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `legend_color` VARCHAR(191) NOT NULL DEFAULT 'black',
    MODIFY `thickness` INTEGER NOT NULL DEFAULT 0,
    MODIFY `is_line_smoth` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Pie` DROP COLUMN `bar_spacing`,
    MODIFY `start_angle` INTEGER NOT NULL DEFAULT 0,
    MODIFY `isLegend` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `legend_size` INTEGER NOT NULL DEFAULT 16,
    MODIFY `is_legend_italic` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `is_legend_bold` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `legend_color` VARCHAR(191) NOT NULL DEFAULT 'black';

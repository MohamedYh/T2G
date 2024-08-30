-- AlterTable
ALTER TABLE `Area` ADD COLUMN `axis_txt_size` INTEGER NOT NULL DEFAULT 10;

-- AlterTable
ALTER TABLE `Bars` ADD COLUMN `axis_txt_size` INTEGER NOT NULL DEFAULT 10;

-- AlterTable
ALTER TABLE `Column` ADD COLUMN `axis_txt_size` INTEGER NOT NULL DEFAULT 10;

-- AlterTable
ALTER TABLE `Column_Area` ADD COLUMN `a_axis_txt_size` INTEGER NOT NULL DEFAULT 10,
    ADD COLUMN `b_axis_txt_size` INTEGER NOT NULL DEFAULT 10;

-- AlterTable
ALTER TABLE `Column_Line` ADD COLUMN `b_axis_txt_size` INTEGER NOT NULL DEFAULT 10,
    ADD COLUMN `l_axis_txt_size` INTEGER NOT NULL DEFAULT 10;

-- AlterTable
ALTER TABLE `Line` ADD COLUMN `axis_txt_size` INTEGER NOT NULL DEFAULT 10;

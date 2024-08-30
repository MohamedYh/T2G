-- AlterTable
ALTER TABLE `Area` MODIFY `thickness` INTEGER NOT NULL DEFAULT 1,
    MODIFY `is_line_smoth` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Column_Area` MODIFY `a_thickness` INTEGER NOT NULL DEFAULT 1,
    MODIFY `a_is_line_smoth` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Column_Line` MODIFY `l_thickness` INTEGER NOT NULL DEFAULT 1,
    MODIFY `l_is_line_smoth` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Line` MODIFY `thickness` INTEGER NOT NULL DEFAULT 1,
    MODIFY `is_line_smoth` BOOLEAN NOT NULL DEFAULT false;

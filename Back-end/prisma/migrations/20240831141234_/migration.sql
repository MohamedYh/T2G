-- AlterTable
ALTER TABLE `Area` MODIFY `legend_color` VARCHAR(191) NOT NULL DEFAULT 'rgba(0,0,0,.75)';

-- AlterTable
ALTER TABLE `Bars` MODIFY `legend_color` VARCHAR(191) NOT NULL DEFAULT 'rgba(0,0,0,.75)';

-- AlterTable
ALTER TABLE `Column` MODIFY `legend_color` VARCHAR(191) NOT NULL DEFAULT 'rgba(0,0,0,.75)';

-- AlterTable
ALTER TABLE `Column_Area` MODIFY `b_legend_color` VARCHAR(191) NOT NULL DEFAULT 'rgba(0,0,0,.75)',
    MODIFY `a_legend_color` VARCHAR(191) NOT NULL DEFAULT 'rgba(0,0,0,.75)';

-- AlterTable
ALTER TABLE `Column_Line` MODIFY `b_legend_color` VARCHAR(191) NOT NULL DEFAULT 'rgba(0,0,0,.75)',
    MODIFY `l_legend_color` VARCHAR(191) NOT NULL DEFAULT 'rgba(0,0,0,.75)';

-- AlterTable
ALTER TABLE `Donut` MODIFY `legend_color` VARCHAR(191) NOT NULL DEFAULT 'rgba(0,0,0,.75)';

-- AlterTable
ALTER TABLE `Line` MODIFY `legend_color` VARCHAR(191) NOT NULL DEFAULT 'rgba(0,0,0,.75)';

-- AlterTable
ALTER TABLE `Pie` MODIFY `legend_color` VARCHAR(191) NOT NULL DEFAULT 'rgba(0,0,0,.75)';

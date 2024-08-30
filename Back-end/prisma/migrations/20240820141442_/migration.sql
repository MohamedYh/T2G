-- AlterTable
ALTER TABLE `Data` ADD COLUMN `name` VARCHAR(191) NOT NULL DEFAULT 'Sample Data';

-- AlterTable
ALTER TABLE `Projects` ADD COLUMN `graph_selected` INTEGER NOT NULL DEFAULT 0;

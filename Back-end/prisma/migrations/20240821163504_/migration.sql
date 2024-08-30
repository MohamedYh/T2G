-- AlterTable
ALTER TABLE `Data` MODIFY `data` VARCHAR(191) NOT NULL,
    MODIFY `headers` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `Data_projectId_idx` ON `Data`(`projectId`);

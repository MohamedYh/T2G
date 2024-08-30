-- CreateTable
CREATE TABLE `Data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` VARCHAR(191) NOT NULL,
    `headers` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `projectId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Data` ADD CONSTRAINT `Data_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

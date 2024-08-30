-- CreateTable
CREATE TABLE `Projects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `background_color` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` JSON NOT NULL,
    `projectId` INTEGER NOT NULL,

    UNIQUE INDEX `Data_projectId_key`(`projectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Background_Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `src` VARCHAR(191) NOT NULL,
    `is_set` BOOLEAN NOT NULL,
    `projectId` INTEGER NOT NULL,

    UNIQUE INDEX `Background_Image_projectId_key`(`projectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Column` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bar_spacing` DOUBLE NOT NULL,
    `border_raduis` INTEGER NOT NULL,
    `border_bld` INTEGER NOT NULL,
    `border_color` VARCHAR(191) NOT NULL,
    `isLegend` BOOLEAN NOT NULL,
    `legend_size` INTEGER NOT NULL,
    `is_legend_italic` BOOLEAN NOT NULL,
    `is_legend_bold` BOOLEAN NOT NULL,
    `legend_color` VARCHAR(191) NOT NULL,
    `isAxis` BOOLEAN NOT NULL,
    `is_axis_txt_italic` BOOLEAN NOT NULL,
    `is_axis_txt_bold` BOOLEAN NOT NULL,
    `axis_txt_color` VARCHAR(191) NOT NULL,
    `axisX` VARCHAR(191) NOT NULL,
    `axisY` VARCHAR(191) NOT NULL,
    `projectId` INTEGER NOT NULL,

    UNIQUE INDEX `Column_projectId_key`(`projectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bars` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bar_spacing` DOUBLE NOT NULL,
    `border_raduis` INTEGER NOT NULL,
    `border_bld` INTEGER NOT NULL,
    `border_color` VARCHAR(191) NOT NULL,
    `isLegend` BOOLEAN NOT NULL,
    `legend_size` INTEGER NOT NULL,
    `is_legend_italic` BOOLEAN NOT NULL,
    `is_legend_bold` BOOLEAN NOT NULL,
    `legend_color` VARCHAR(191) NOT NULL,
    `isAxis` BOOLEAN NOT NULL,
    `is_axis_txt_italic` BOOLEAN NOT NULL,
    `is_axis_txt_bold` BOOLEAN NOT NULL,
    `axis_txt_color` VARCHAR(191) NOT NULL,
    `axisX` VARCHAR(191) NOT NULL,
    `axisY` VARCHAR(191) NOT NULL,
    `projectId` INTEGER NOT NULL,

    UNIQUE INDEX `Bars_projectId_key`(`projectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bar_spacing` DOUBLE NOT NULL,
    `start_angle` INTEGER NOT NULL,
    `isLegend` BOOLEAN NOT NULL,
    `legend_size` INTEGER NOT NULL,
    `is_legend_italic` BOOLEAN NOT NULL,
    `is_legend_bold` BOOLEAN NOT NULL,
    `legend_color` VARCHAR(191) NOT NULL,
    `projectId` INTEGER NOT NULL,

    UNIQUE INDEX `Pie_projectId_key`(`projectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Donut` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bar_spacing` DOUBLE NOT NULL,
    `start_angle` INTEGER NOT NULL,
    `innter_raduis` INTEGER NOT NULL,
    `isLegend` BOOLEAN NOT NULL,
    `legend_size` INTEGER NOT NULL,
    `is_legend_italic` BOOLEAN NOT NULL,
    `is_legend_bold` BOOLEAN NOT NULL,
    `legend_color` VARCHAR(191) NOT NULL,
    `projectId` INTEGER NOT NULL,

    UNIQUE INDEX `Donut_projectId_key`(`projectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Area` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `show_pointer_mark` BOOLEAN NOT NULL,
    `isAxis` BOOLEAN NOT NULL,
    `is_axis_txt_italic` BOOLEAN NOT NULL,
    `is_axis_txt_bold` BOOLEAN NOT NULL,
    `axis_txt_color` VARCHAR(191) NOT NULL,
    `axisX` VARCHAR(191) NOT NULL,
    `axisY` VARCHAR(191) NOT NULL,
    `isLegend` BOOLEAN NOT NULL,
    `legend_size` INTEGER NOT NULL,
    `is_legend_italic` BOOLEAN NOT NULL,
    `is_legend_bold` BOOLEAN NOT NULL,
    `legend_color` VARCHAR(191) NOT NULL,
    `thickness` INTEGER NOT NULL,
    `is_line_smoth` BOOLEAN NOT NULL,
    `projectId` INTEGER NOT NULL,

    UNIQUE INDEX `Area_projectId_key`(`projectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Line` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `show_pointer_mark` BOOLEAN NOT NULL,
    `isAxis` BOOLEAN NOT NULL,
    `is_axis_txt_italic` BOOLEAN NOT NULL,
    `is_axis_txt_bold` BOOLEAN NOT NULL,
    `axis_txt_color` VARCHAR(191) NOT NULL,
    `axisX` VARCHAR(191) NOT NULL,
    `axisY` VARCHAR(191) NOT NULL,
    `isLegend` BOOLEAN NOT NULL,
    `legend_size` INTEGER NOT NULL,
    `is_legend_italic` BOOLEAN NOT NULL,
    `is_legend_bold` BOOLEAN NOT NULL,
    `legend_color` VARCHAR(191) NOT NULL,
    `thickness` INTEGER NOT NULL,
    `is_line_smoth` BOOLEAN NOT NULL,
    `projectId` INTEGER NOT NULL,

    UNIQUE INDEX `Line_projectId_key`(`projectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Column_Line` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `b_bar_spacing` DOUBLE NOT NULL,
    `b_border_raduis` INTEGER NOT NULL,
    `b_border_bld` INTEGER NOT NULL,
    `b_border_color` VARCHAR(191) NOT NULL,
    `b_isLegend` BOOLEAN NOT NULL,
    `b_legend_size` INTEGER NOT NULL,
    `b_is_legend_italic` BOOLEAN NOT NULL,
    `b_is_legend_bold` BOOLEAN NOT NULL,
    `b_legend_color` VARCHAR(191) NOT NULL,
    `b_isAxis` BOOLEAN NOT NULL,
    `b_is_axis_txt_italic` BOOLEAN NOT NULL,
    `b_is_axis_txt_bold` BOOLEAN NOT NULL,
    `b_axis_txt_color` VARCHAR(191) NOT NULL,
    `b_axisX` VARCHAR(191) NOT NULL,
    `b_axisY` VARCHAR(191) NOT NULL,
    `l_show_pointer_mark` BOOLEAN NOT NULL,
    `l_isAxis` BOOLEAN NOT NULL,
    `l_is_axis_txt_italic` BOOLEAN NOT NULL,
    `l_is_axis_txt_bold` BOOLEAN NOT NULL,
    `l_axis_txt_color` VARCHAR(191) NOT NULL,
    `l_axisX` VARCHAR(191) NOT NULL,
    `l_axisY` VARCHAR(191) NOT NULL,
    `l_isLegend` BOOLEAN NOT NULL,
    `l_legend_size` INTEGER NOT NULL,
    `l_is_legend_italic` BOOLEAN NOT NULL,
    `l_is_legend_bold` BOOLEAN NOT NULL,
    `l_legend_color` VARCHAR(191) NOT NULL,
    `l_thickness` INTEGER NOT NULL,
    `l_is_line_smoth` BOOLEAN NOT NULL,
    `projectId` INTEGER NOT NULL,

    UNIQUE INDEX `Column_Line_projectId_key`(`projectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Column_Area` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `b_bar_spacing` DOUBLE NOT NULL,
    `b_border_raduis` INTEGER NOT NULL,
    `b_border_bld` INTEGER NOT NULL,
    `b_border_color` VARCHAR(191) NOT NULL,
    `b_isLegend` BOOLEAN NOT NULL,
    `b_legend_size` INTEGER NOT NULL,
    `b_is_legend_italic` BOOLEAN NOT NULL,
    `b_is_legend_bold` BOOLEAN NOT NULL,
    `b_legend_color` VARCHAR(191) NOT NULL,
    `b_isAxis` BOOLEAN NOT NULL,
    `b_is_axis_txt_italic` BOOLEAN NOT NULL,
    `b_is_axis_txt_bold` BOOLEAN NOT NULL,
    `b_axis_txt_color` VARCHAR(191) NOT NULL,
    `b_axisX` VARCHAR(191) NOT NULL,
    `b_axisY` VARCHAR(191) NOT NULL,
    `a_show_pointer_mark` BOOLEAN NOT NULL,
    `a_isAxis` BOOLEAN NOT NULL,
    `a_is_axis_txt_italic` BOOLEAN NOT NULL,
    `a_is_axis_txt_bold` BOOLEAN NOT NULL,
    `a_axis_txt_color` VARCHAR(191) NOT NULL,
    `a_axisX` VARCHAR(191) NOT NULL,
    `a_axisY` VARCHAR(191) NOT NULL,
    `a_isLegend` BOOLEAN NOT NULL,
    `a_legend_size` INTEGER NOT NULL,
    `a_is_legend_italic` BOOLEAN NOT NULL,
    `a_is_legend_bold` BOOLEAN NOT NULL,
    `a_legend_color` VARCHAR(191) NOT NULL,
    `a_thickness` INTEGER NOT NULL,
    `a_is_line_smoth` BOOLEAN NOT NULL,
    `projectId` INTEGER NOT NULL,

    UNIQUE INDEX `Column_Area_projectId_key`(`projectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Projects` ADD CONSTRAINT `Projects_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Data` ADD CONSTRAINT `Data_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Background_Image` ADD CONSTRAINT `Background_Image_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Column` ADD CONSTRAINT `Column_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bars` ADD CONSTRAINT `Bars_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pie` ADD CONSTRAINT `Pie_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Donut` ADD CONSTRAINT `Donut_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Area` ADD CONSTRAINT `Area_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Line` ADD CONSTRAINT `Line_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Column_Line` ADD CONSTRAINT `Column_Line_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Column_Area` ADD CONSTRAINT `Column_Area_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

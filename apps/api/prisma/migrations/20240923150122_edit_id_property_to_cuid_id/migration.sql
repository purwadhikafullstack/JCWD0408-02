/*
  Warnings:

  - The primary key for the `property` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `propertypic` DROP FOREIGN KEY `PropertyPic_property_Id_fkey`;

-- DropForeignKey
ALTER TABLE `room` DROP FOREIGN KEY `Room_property_Id_fkey`;

-- AlterTable
ALTER TABLE `property` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `propertypic` MODIFY `property_Id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `room` MODIFY `property_Id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `PropertyPic` ADD CONSTRAINT `PropertyPic_property_Id_fkey` FOREIGN KEY (`property_Id`) REFERENCES `Property`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_property_Id_fkey` FOREIGN KEY (`property_Id`) REFERENCES `Property`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the `availability` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `priceadjustment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `availability` DROP FOREIGN KEY `Availability_roomId_fkey`;

-- DropForeignKey
ALTER TABLE `priceadjustment` DROP FOREIGN KEY `PriceAdjustment_roomId_fkey`;

-- DropTable
DROP TABLE `availability`;

-- DropTable
DROP TABLE `priceadjustment`;

-- CreateTable
CREATE TABLE `RoomAvailability` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `isAvailable` BOOLEAN NOT NULL DEFAULT true,
    `priceAdjustment` DOUBLE NULL,
    `room_Id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RoomAvailability` ADD CONSTRAINT `RoomAvailability_room_Id_fkey` FOREIGN KEY (`room_Id`) REFERENCES `Room`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

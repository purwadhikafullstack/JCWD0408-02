/*
  Warnings:

  - The primary key for the `room` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `facility` DROP FOREIGN KEY `Facility_roomId_fkey`;

-- DropForeignKey
ALTER TABLE `reservation` DROP FOREIGN KEY `Reservation_room_Id_fkey`;

-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `Review_room_Id_fkey`;

-- DropForeignKey
ALTER TABLE `roompic` DROP FOREIGN KEY `RoomPic_room_Id_fkey`;

-- AlterTable
ALTER TABLE `facility` MODIFY `roomId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `reservation` MODIFY `room_Id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `review` MODIFY `room_Id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `room` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `roompic` MODIFY `room_Id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Facility` ADD CONSTRAINT `Facility_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomPic` ADD CONSTRAINT `RoomPic_room_Id_fkey` FOREIGN KEY (`room_Id`) REFERENCES `Room`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_room_Id_fkey` FOREIGN KEY (`room_Id`) REFERENCES `Room`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_room_Id_fkey` FOREIGN KEY (`room_Id`) REFERENCES `Room`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

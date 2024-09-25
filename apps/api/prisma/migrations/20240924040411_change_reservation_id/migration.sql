/*
  Warnings:

  - The primary key for the `reservation` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `Review_reservation_Id_fkey`;

-- AlterTable
ALTER TABLE `reservation` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `review` MODIFY `reservation_Id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_reservation_Id_fkey` FOREIGN KEY (`reservation_Id`) REFERENCES `Reservation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

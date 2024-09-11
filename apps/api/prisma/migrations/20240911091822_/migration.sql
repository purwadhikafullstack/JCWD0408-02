/*
  Warnings:

  - You are about to drop the column `property_Id` on the `review` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `Review_property_Id_fkey`;

-- AlterTable
ALTER TABLE `review` DROP COLUMN `property_Id`;

-- AlterTable
ALTER TABLE `room` ADD COLUMN `facility` VARCHAR(191) NOT NULL DEFAULT '';

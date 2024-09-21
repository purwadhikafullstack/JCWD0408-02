/*
  Warnings:

  - Added the required column `pricediscount` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `room` ADD COLUMN `pricediscount` VARCHAR(191) NOT NULL;

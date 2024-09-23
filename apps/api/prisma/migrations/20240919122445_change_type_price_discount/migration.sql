/*
  Warnings:

  - You are about to alter the column `pricediscount` on the `room` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `room` MODIFY `pricediscount` DOUBLE NOT NULL;

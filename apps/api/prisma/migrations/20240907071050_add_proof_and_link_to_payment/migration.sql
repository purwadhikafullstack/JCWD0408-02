-- AlterTable
ALTER TABLE `reservation` ADD COLUMN `paymentLink` VARCHAR(191) NULL,
    ADD COLUMN `paymentProof` VARCHAR(191) NULL;

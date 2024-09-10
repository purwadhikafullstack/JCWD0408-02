-- AlterTable
ALTER TABLE `tenant` ADD COLUMN `otp` VARCHAR(191) NULL,
    ADD COLUMN `otpExpired` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `otp` VARCHAR(191) NULL,
    ADD COLUMN `otpExpired` DATETIME(3) NULL;

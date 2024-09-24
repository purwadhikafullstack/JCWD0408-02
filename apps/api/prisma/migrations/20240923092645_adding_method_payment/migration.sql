-- AlterTable
ALTER TABLE `reservation` ADD COLUMN `method` ENUM('VA', 'TF') NOT NULL DEFAULT 'VA';

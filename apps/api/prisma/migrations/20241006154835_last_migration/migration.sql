/*
  Warnings:

  - The values [FACEBOOK] on the enum `Tenant_provider` will be removed. If these variants are still used in the database, this will fail.
  - The values [FACEBOOK] on the enum `Tenant_provider` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `reservation` ADD COLUMN `guest` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `tenant` MODIFY `provider` ENUM('GOOGLE', 'TWITTER', 'GITHUB', 'CREDENTIAL') NOT NULL DEFAULT 'CREDENTIAL';

-- AlterTable
ALTER TABLE `user` MODIFY `provider` ENUM('GOOGLE', 'TWITTER', 'GITHUB', 'CREDENTIAL') NOT NULL DEFAULT 'CREDENTIAL';

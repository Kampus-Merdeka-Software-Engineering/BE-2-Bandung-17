/*
  Warnings:

  - Added the required column `description` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Product_catalogId_fkey` ON `product`;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `description` VARCHAR(255) NOT NULL;

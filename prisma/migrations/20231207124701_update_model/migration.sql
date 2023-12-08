/*
  Warnings:

  - You are about to alter the column `imageUrl` on the `product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `contact` MODIFY `message` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `product` MODIFY `imageUrl` VARCHAR(191) NULL,
    MODIFY `description` TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_catalogId_fkey` FOREIGN KEY (`catalogId`) REFERENCES `Catalog`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

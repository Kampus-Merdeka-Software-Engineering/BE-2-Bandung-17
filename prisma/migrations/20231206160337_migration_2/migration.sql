-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_catalogId_fkey`;

-- AlterTable
ALTER TABLE `catalog` MODIFY `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `product` MODIFY `name` VARCHAR(255) NOT NULL,
    MODIFY `price` INTEGER NULL,
    MODIFY `imageUrl` VARCHAR(255) NULL;

-- CreateTable
CREATE TABLE `contact` (
    `name` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `message` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `contact_name_key`(`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

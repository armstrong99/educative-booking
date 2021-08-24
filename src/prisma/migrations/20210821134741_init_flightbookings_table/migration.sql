-- CreateTable
CREATE TABLE `flightBooking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `leavingAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `returningAt` DATETIME(3) NOT NULL,
    `country` VARCHAR(255) NOT NULL,
    `state` VARCHAR(255) NOT NULL,
    `destination` VARCHAR(255) NOT NULL,
    `tripType` VARCHAR(255) NOT NULL,
    `passangerSize` INTEGER NOT NULL DEFAULT 1,
    `promoCode` VARCHAR(255) NOT NULL,
    `amount` INTEGER NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `user_id` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

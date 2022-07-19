-- CreateTable
CREATE TABLE "flightBooking" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "leavingAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "returningAt" TIMESTAMP(3) NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "destination" VARCHAR(255) NOT NULL,
    "tripType" VARCHAR(255) NOT NULL,
    "passangerSize" INTEGER NOT NULL DEFAULT 1,
    "promoCode" VARCHAR(255) NOT NULL,
    "amount" INTEGER NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "flightBooking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userData" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "national_id" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "userData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "flightBooking" ADD CONSTRAINT "flightBooking_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "userData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const lagosFlight = await prisma.flightBookings.createMany({
    data: [
      {
        leavingAt: `${
          new Date().toISOString().split("T")[0]
        } ${new Date().toLocaleTimeString("en-US", { hour12: false })}`,
        returningAt: `${
          new Date().toISOString().split("T")[0]
        } ${new Date().toLocaleTimeString("en-US", { hour12: false })}`,
        country: "nigeria",
        state: "rivers",
        destination: "lagos",
        tripType: "round",
        passangerSize: 1,
        promoCode: "n/a",
        amount: 40000,
        email: "arms@gmail.com",
        user_id: "3siuduisu3990X-9393",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

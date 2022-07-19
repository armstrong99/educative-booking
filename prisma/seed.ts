import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  

  const userRegistration = await prisma.user.create({
    data: {
      name: "Alice wonderland",
      nationality: "Wonderland Republic",
      national_id: "WLR-490-372-000",
      maritalStatus: "Single",
      sex: "Male",
      age: 21,
    },
  });

  const lagosFlight = await prisma.flightBookings.create({
    data: {
      leavingAt: new Date('05 October 2011 14:48 UTC').toISOString(),
      returningAt: new Date('05 December 2011 14:48 UTC').toISOString(),
      country: "nigeria",
      state: "rivers",
      destination: "lagos",
      tripType: "round",
      passangerSize: 1,
      promoCode: "n/a",
      amount: 40000,
      email: "arms@gmail.com",
      user_id: 1,
    },
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

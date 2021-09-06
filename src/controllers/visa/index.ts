import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    let {
      country,
      state,
      amount,
      email,
      user_id,
      passportType,
      passportNumber,
      passportIssuedCountry,
      passportIssuedDate,
      passportExpirationDate,
      employer,
      schoolName,
      monthyIncome,
    } = req.body;

    let bookVisa = await prisma.visaBookings.create({
      data: {
        country,
        state,
        amount,
        email,
        user_id,
        passportType,
        passportNumber,
        passportIssuedCountry,
        passportIssuedDate,
        passportExpirationDate,
        employer,
        schoolName,
        monthyIncome,
      },
    });

    res.send({
      status: "success",
      message: "congratulations!, your visa is in progress.",
      data: bookVisa,
    });
  } catch (error) {
    console.log(error);

    return res.status(401).send({
      status: "fail",
      message: "Sorry, we could not proceed with your application at this time",
    });
  } finally {
    await prisma.$disconnect();
  }
};

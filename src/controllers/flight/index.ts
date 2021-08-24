import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    let {
      leavingAt,
      returningAt,
      country,
      state,
      destination,
      tripType,
      passangerSize,
      promoCode,
      amount,
      email,
      user_id,
    } = req.body;

    let bookFlight = await prisma.flightBookings.create({
      data: {
        leavingAt,
        returningAt,
        country,
        state,
        destination,
        tripType,
        passangerSize,
        promoCode,
        amount,
        email,
        user_id,
      },
      
    });

    console.log(bookFlight);

    res.send({
        status: "success",
        message: "congratulations!, your flight is successfully booked.",
        data: bookFlight
      })

  } 
  catch (error) {
      console.log(error)

    return res.status(401).send({
      status: "fail",
      message: "Sorry, we could not book your flight at this time",
    });
  } 
  
  finally {
    await prisma.$disconnect();
  }

};

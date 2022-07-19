import { Request, Response, NextFunction } from "express";
import { flightBookings, PrismaClient } from "@prisma/client";
import { IFlightController, IRes } from "../../global";
const prisma = new PrismaClient();

class FlightController {
  constructor() {}

  static async bookFlight(req: Request, res: Response, next: NextFunction) {
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
          leavingAt: new Date(leavingAt).toISOString(),
          returningAt: new Date(returningAt).toISOString(),
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

      console.table(bookFlight);

      res.send({
        status: "success",
        message: "congratulations!, your flight is successfully booked.",
        data: bookFlight,
      });
    } catch (error) {
      console.error(error);

      return res.status(501).send({
        status: "fail",
        message: "Sorry, we could not book your flight at this time",
      });
    } finally {
      await prisma.$disconnect();
    }
  }

  static async getFlightDtById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    let _id = Number(req.params.id);

    try {
      let foundFlight: flightBookings | null =
        await prisma.flightBookings.findUnique({
          where: {
            id: _id,
          },
        });

      if (!foundFlight) throw new Error("This flight is not found");

      let resBody: IRes<flightBookings> = {
        data: foundFlight,
        status: true,
        statusCode: 201,
        message: "Flight data found",
      };

      res.status(resBody.statusCode).send(resBody);
    } catch (e) {
      res.status(404).send({ message: (e as Error).message });
    }
  }

  static async cancelFlightById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      let _id = Number(req.params.id);
      await prisma.flightBookings.delete({
        where: {
          id: _id,
        },
      });

      res.send({
        message: "Flight deleted successfully",
      });
    } catch (e) {
      res.send({
        message: (e as Error).message,
      });
    }
  }
}

export default {
  bookFlight: FlightController.bookFlight,
  getFlightDtById: FlightController.getFlightDtById,
  cancelFlightById: FlightController.cancelFlightById
} as IFlightController;

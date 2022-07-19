import { Request, Response } from "express";
import * as express from "express";
import flightController from "../controllers/flight";
 
const flightRoute = express.Router();

flightRoute.get("/", async (req: Request, res: Response) => {
  return res.send("I am flying!!!");
});done

//you can add middle ware for validating token,etc
flightRoute.post("/", flightController.bookFlight);

flightRoute.get("/get-flight/:id", flightController.getFlightDtById);

flightRoute.delete("/cancel-flight/:id", flightController.cancelFlightById);

export default flightRoute;
import express, { Request, Response } from "express";
import flightController from "../controllers/flight";
import authToken from "../middleware/authToken";
 
const flightRoute = express.Router();

flightRoute.get("/", async (req: Request, res: Response) => {
  return res.send("I am working!!!");
});

//you can add middle ware for validating token,etc
flightRoute.post("/", authToken, flightController);

export default flightRoute;
import express, { Request, Response } from "express";
import visaController from "../controllers/visa";
import authToken from "../middleware/authToken";
 
const visaRoute = express.Router();

//you can add middle ware for validating token,etc
visaRoute.post("/", authToken, visaController);

export default visaRoute;
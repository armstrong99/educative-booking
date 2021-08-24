import axios from "axios";
import { NextFunction, Request, Response } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  const _api: string = "https://rivon-bus.herokuapp.com/verify/";
  const { user_id, email } = req.body;
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  try {
    let { data } = await axios.post(_api, { _id: user_id, token });

    if (data?.data._id) {
      return next();
    } else throw new Error("invalid token, user may not be logged in");
  } catch (error) {
    
    return res.status(401).send({
      status: "fail",
      message: `User with email-${email} may not be logged in or does not exist`,
    });
  }
};

import { Request, Response, NextFunction } from "express";
declare class UserController {
    constructor();
    static registerUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    static getUsertDtById(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const _default: {
    registerUser: typeof UserController.registerUser;
    getUsertDtById: typeof UserController.getUsertDtById;
};
export default _default;

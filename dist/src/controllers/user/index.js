"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class UserController {
    constructor() { }
    static registerUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { name, nationality, national_id, maritalStatus, sex, age } = req.body;
                console.log("working!!", nationality);
                let userFlightReg = yield prisma.user.create({
                    data: {
                        name,
                        nationality,
                        national_id,
                        maritalStatus,
                        sex,
                        age,
                    },
                });
                console.log(userFlightReg);
                let responseBody = {
                    data: userFlightReg,
                    status: true,
                    statusCode: 201,
                    message: "User details saved.",
                };
                res.status(201).send(responseBody);
            }
            catch (e) {
                res.status(501).send({ message: e.message });
            }
            finally {
            }
        });
    }
    static getUsertDtById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userId = Number(req.params.id);
                let foundUser = yield prisma.user.findUnique({
                    where: {
                        id: userId,
                    },
                });
                if (!foundUser)
                    throw new Error("This user is not found or not registered.");
                let resBody = {
                    message: "User successfully found",
                    status: true,
                    statusCode: 200,
                    data: foundUser,
                };
                return res.status(resBody.statusCode).send(resBody);
            }
            catch (e) {
                res.status(404).send({ message: e.message });
            }
        });
    }
}
exports.default = {
    registerUser: UserController.registerUser,
    getUsertDtById: UserController.getUsertDtById,
};
//# sourceMappingURL=index.js.map
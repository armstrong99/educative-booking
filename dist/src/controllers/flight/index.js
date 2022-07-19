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
class FlightController {
    constructor() { }
    static bookFlight(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { leavingAt, returningAt, country, state, destination, tripType, passangerSize, promoCode, amount, email, user_id, } = req.body;
                let bookFlight = yield prisma.flightBookings.create({
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
            }
            catch (error) {
                console.error(error);
                return res.status(501).send({
                    status: "fail",
                    message: "Sorry, we could not book your flight at this time",
                });
            }
            finally {
                yield prisma.$disconnect();
            }
        });
    }
    static getFlightDtById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let _id = Number(req.params.id);
            try {
                let foundFlight = yield prisma.flightBookings.findUnique({
                    where: {
                        id: _id,
                    },
                });
                if (!foundFlight)
                    throw new Error("This flight is not found");
                let resBody = {
                    data: foundFlight,
                    status: true,
                    statusCode: 201,
                    message: "Flight data found",
                };
                res.status(resBody.statusCode).send(resBody);
            }
            catch (e) {
                res.status(404).send({ message: e.message });
            }
        });
    }
    static cancelFlightById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let _id = Number(req.params.id);
                yield prisma.flightBookings.delete({
                    where: {
                        id: _id,
                    },
                });
                res.send({
                    message: "Flight deleted successfully",
                });
            }
            catch (e) {
                res.send({
                    message: e.message,
                });
            }
        });
    }
}
exports.default = {
    bookFlight: FlightController.bookFlight,
    getFlightDtById: FlightController.getFlightDtById,
    cancelFlightById: FlightController.cancelFlightById
};
//# sourceMappingURL=index.js.map
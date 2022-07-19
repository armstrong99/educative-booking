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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const userRegistration = yield prisma.user.create({
            data: {
                name: "Alice wonderland",
                nationality: "Wonderland Republic",
                national_id: "WLR-490-372-000",
                maritalStatus: "Single",
                sex: "Male",
                age: 21,
            },
        });
        const lagosFlight = yield prisma.flightBookings.create({
            data: {
                leavingAt: new Date('05 October 2011 14:48 UTC').toISOString(),
                returningAt: new Date('05 December 2011 14:48 UTC').toISOString(),
                country: "nigeria",
                state: "rivers",
                destination: "lagos",
                tripType: "round",
                passangerSize: 1,
                promoCode: "n/a",
                amount: 40000,
                email: "arms@gmail.com",
                user_id: 1,
            },
        });
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
//# sourceMappingURL=seed.js.map
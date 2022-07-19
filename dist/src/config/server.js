"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const flight_1 = __importDefault(require("../routes/flight"));
const user_1 = __importDefault(require("../routes/user"));
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const PORT = process.env.PORT || 5200;
app.get("/", (req, res) => {
    res.status(404).send("ERROR 404!");
});
app.get("/favicon.ico", (req, res) => {
    res.status(200).send("ERROR 404!");
});
app.use("/api/booking/flight", flight_1.default);
app.use("/api/flight/user", user_1.default);
app.listen(PORT, () => {
    console.log("listening on port", PORT);
});
//# sourceMappingURL=server.js.map
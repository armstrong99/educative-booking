"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var flight_1 = __importDefault(require("../routes/flight"));
require("dotenv").config();
var app = express_1.default();
app.use(morgan_1.default("dev"));
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
var PORT = process.env.PORT || 5200;
app.get("/", function (req, res) {
    res.status(200).send("ERROR 404!");
});
app.get("/favicon.ico", function (req, res) {
    res.status(200).send("ERROR 404!");
});
//define router here
app.use("/api/booking/flight", flight_1.default);
app.listen(PORT, function () {
    console.log("listening on port", PORT);
});

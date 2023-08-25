"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mainError_1 = require("./error/mainError");
const errorHandler_1 = require("./error/errorHandler");
const userRouter_1 = __importDefault(require("./router/userRouter"));
const FriendRouter_1 = __importDefault(require("./router/FriendRouter"));
const RequestRouter_1 = __importDefault(require("./router/RequestRouter"));
const articleRouter_1 = __importDefault(require("./router/articleRouter"));
const categoryRouter_1 = __importDefault(require("./router/categoryRouter"));
const RatingRouter_1 = __importDefault(require("./router/RatingRouter"));
const adminRouter_1 = __importDefault(require("./router/adminRouter"));
const adRouter_1 = __importDefault(require("./router/adRouter"));
const commentRouter_1 = __importDefault(require("./router/commentRouter"));
const mainApp = (app) => {
    app.use(express_1.default.json());
    app.use((0, cors_1.default)({
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE"],
    }));
    app.get("/", (req, res) => {
        res.status(mainError_1.HTTP.OK).json({
            message: "Nice work ",
        });
    });
    app.use("/api/v1", userRouter_1.default);
    app.use("/api/v1", FriendRouter_1.default);
    app.use("/api/v1", RequestRouter_1.default);
    app.use("/api/v1", RatingRouter_1.default);
    app.use("/api/v1", articleRouter_1.default);
    app.use("/api/v1", categoryRouter_1.default);
    app.use("/api/v1", adminRouter_1.default);
    app.use("/api/v1", adRouter_1.default);
    app.use("/api/v1", commentRouter_1.default);
    app.all("*", (req, res, next) => {
        next(new mainError_1.mainError({
            name: "Router Error",
            message: `This error is coming up because the  URL, isn't correct`,
            status: mainError_1.HTTP.BAD_REQUEST,
            success: false,
        }));
    });
    app.use(errorHandler_1.errorHandler);
};
exports.mainApp = mainApp;

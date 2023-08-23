import cors from "cors";
import express, { Application, NextFunction, Request, Response} from "express";
import { HTTP, mainError } from "./error/mainError";
import { errorHandler } from "./error/errorHandler";
import user from "./router/userRouter";
import friend from "./router/FriendRouter";
import request from "./router/RequestRouter";
import articles from "./router/articleRouter";


export const mainApp = (app: Application) => {
    app.use(express.json());
    app.use(
        cors({
            origin: "*",
            methods: ["GET", "POST", "PATCH", "DELETE"],
        })
    );

    app.get("/",(req: Request, res: Response) => {
        res.status(HTTP.OK).json({
            message: "Nice work ",
        })
    } )

    app.use("/api/v1", user);
    app.use("/api/v1", friend);
    app.use("/api/v1", request);
    app.use("/api/v1", articles);

    app.all("*", (req : Request, res :Response, next: NextFunction) => {
        next(
            new mainError({
                name: "Router Error",
                message: `This error is coming up because the  URL, isn't correct`,
                status: HTTP.BAD_REQUEST,
                success: false,
            })
        )
    } )
app.use(errorHandler)
}

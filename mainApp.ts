import { Application, Request, Response } from "express";
import user from "./router/userRouter";



export const mainApp = async (app:Application) =>{
try {
    app.use("/api", user)
    app.get("/", (req:Request, res:Response) =>{
        try {
            return res.status(200).json({
                message: "Welcome to Default Api"
            })
        } catch (error) {
            return res.status(404).json({
                message: "Error Loading Api"
            })
        }
    })
} catch (error) {
    return error
}
}
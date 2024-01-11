import { Request, Response } from "express"
import crypto from "crypto"
import userModel from "../model/userModel"

export const createUser = async (req:Request, res:Response) =>{
    try {
        const { email } = req.body
        const token  = crypto.randomBytes(3).toString("hex")

        const user = await userModel.create({
            email,
            token,
            status: "main"
        })

        return res.status(200).json({
            message: "User Created Successfully",
            data: user
        })

    } catch (error) {
        return res.status(404).json({
            message: "Error Creating User"
        })
    }
}
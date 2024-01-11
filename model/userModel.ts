import {Schema, Types, model} from "mongoose"
import { iUserData } from "../utils/interfaces"




const userModel = new Schema<iUserData>(

    {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        email: {
            type: String
        },
        avatar: {
            type: String
        },
        status: {
            type: String
        },
        user: [{
            type: Types.ObjectId,
            ref: "user"
        }],
        userHistory:[ {
            type: Types.ObjectId,
            ref: "userHistory"
        }],
    },
    {timestamps: true}
)

export default model<iUserData>("user", userModel)
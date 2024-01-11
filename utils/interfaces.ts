import { Document } from "mongoose";

export interface iUser{
    firstName: string
    lastName: string
    email: string
    status: string
    avatar: string
    user: {};
    userHistory: Array<{}>
}

export interface iUserData extends iUser, Document{}
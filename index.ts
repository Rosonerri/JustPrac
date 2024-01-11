console.clear()
import express, { Application } from "express"
import cors from "cors"
import {mainApp} from "./mainApp"
import { dbConfig } from "./router/dbConfig"
import dotenv from "dotenv"
dotenv.config()


const app: Application = express()
const Port:number = parseInt(process.env.PORT!)


app.use(cors());
app.use(express());

// app.use(
//     session({

//     })
// )


mainApp(app)
const server = app.listen(Port, ()=>{
    console.log("Listening to port on", Port)
    console.log()
    dbConfig()
})

process.on("uncaughtException", (error: Error) =>{
    console.log("uncaughtException", error)
    process.exit(1)
});

process.on("unhandledRejection", (reason: any) =>{
    console.log("unhandledRejection", reason)

    server.close(() =>{
        process.exit(1)
    })
})
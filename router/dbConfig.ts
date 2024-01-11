import { connect } from "mongoose"

const URL: string = "mongodb://127.0.0.1:27017"
export const dbConfig = async () =>{
try {
    return await connect(URL).then(() =>{
        console.log("DataBase Connected Successfullly🌎🌏🌎");
    })
    .catch(err => console.error())
} catch (error) {
    return error
}
}
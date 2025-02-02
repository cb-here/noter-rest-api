import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        mongoose.connect("mongodb://localhost:27017/notes")
        console.log("Connect established!")
    } catch(error){
        console.log("Error: " + error)
    }
}
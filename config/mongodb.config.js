import mongoose from "mongoose";

export const connectDb = async()=>{
    try {
       await mongoose.connect(process.env.Mongo_URI) 
       console.log('mongo Db connected successfully');

    } catch (error) {
        console.log(error);
    }
}
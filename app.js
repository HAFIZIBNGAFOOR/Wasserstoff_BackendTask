import express from "express";
import morgan from "morgan";
import { connectDb } from "./config/mongodb.config.js";
import dotenv from "dotenv"
import cors from 'cors'
import router from "./routes/index.route.js";

const app = express();

app.use(cors())
app.use(express.json());
app.use(morgan('dev'));
app.use('api',router)
dotenv.config()
connectDb()

const PORT = 3000 || process.env.PORT
app.listen(PORT,()=>{
    console.log('server started running successfuly');
})
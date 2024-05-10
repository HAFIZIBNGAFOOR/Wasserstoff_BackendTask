import express from "express";
import auth from "../auth/auth";
import { controller } from "../controllers/common.controller.js";
import { getSignedUrl } from "../services/awsS3.service";

const awsRouter = express.Router()

awsRouter.get('/signed-url', auth(),controller(getSignedUrl))


export default awsRouter
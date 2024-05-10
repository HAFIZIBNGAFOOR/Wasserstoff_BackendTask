import express from "express";
import auth from "../auth/auth.js";
import { controller } from "../controllers/common.controller.js";
import { getSignedUrl } from "../services/aws.service.js";

const awsRouter = express.Router()

awsRouter.get('/signed-url',controller(getSignedUrl))

export default awsRouter
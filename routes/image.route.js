import express from "express";
import {controller} from "../controllers/common.controller.js";
import { allImages, getImage, manualAnnotation, postImage } from "../services/image.service.js";
import auth from "../auth/auth.js";

const imageRouter = express.Router()


imageRouter.get('/',controller(getImage));
imageRouter.post('/',controller(postImage));
imageRouter.post('/manual-annotation',controller(manualAnnotation))
imageRouter.get('/image-lists',controller(allImages))

export default imageRouter
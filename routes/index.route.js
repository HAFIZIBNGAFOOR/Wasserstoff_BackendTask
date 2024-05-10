import express from"express"
import userRouter from "./user.route.js";
import awsRouter from "./aws.route.js";
import imageRouter from "./image.route.js";
import auth from "../auth/auth.js";

const router = express.Router();

router.use('/auth',userRouter)
router.use('/aws',auth(),awsRouter);
router.use('/image',auth(),imageRouter)

export default router
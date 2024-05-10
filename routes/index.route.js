import express from"express"
import userRouter from "./user.route.js";
import awsRouter from "./aws.route.js";

const router = express.Router();

router.use('/auth',userRouter)
router.use('/aws',awsRouter)

export default router
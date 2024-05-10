
import express, { Router } from 'express'
import { doLogin, postUser } from '../services/user.service'
import { controller } from '../controllers/common.controller'

const userRouter = express.Router()

userRouter.post('/auth',controller(doLogin))
userRouter.post('/',controller(postUser))



export default userRouter






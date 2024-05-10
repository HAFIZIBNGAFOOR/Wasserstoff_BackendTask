
import express, { Router } from 'express'
import { blockOrUnblockUser, doLogin, postUser, users } from '../services/user.service.js'
import { controller } from '../controllers/common.controller.js'

const userRouter = express.Router()

userRouter.post('/login',controller(doLogin))
userRouter.post('/',controller(postUser))
userRouter.post('/blockUnblock',controller(blockOrUnblockUser))
userRouter.get('/users',controller(users))


export default userRouter






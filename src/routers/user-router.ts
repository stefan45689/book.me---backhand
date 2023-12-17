import express from "express";
import userController from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.route('/signUp').post(userController.signUp);
userRouter.route('/login').post(userController.login)

export default  userRouter 
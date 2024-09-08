import express from "express";
import userController from "../controllers/user-controller";
import authenticateToken from "../middleware/middleware";

const userRouter = express.Router();

userRouter.route('/signUp').post(userController.signUp);
userRouter.route('/login').post(userController.login)

userRouter.route('/user/:id').get(authenticateToken, userController.getUserById)

export default  userRouter 
import userService from "../services/user-service";
import { Request, Response } from "express";

const signUp =async (req: Request, res: Response) => {
    const result = await userService.signUp(req.body);
    res.send(result)
}

const login = async (req: Request, res: Response) => {
    const result = await userService.login(req.body);
    res.send(result)
}
export default { signUp, login }
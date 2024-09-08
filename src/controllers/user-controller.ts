import { result } from "lodash";
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

const getUserById =async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const result = await userService.getUserById(id)
    res.send(result);
}
export default { signUp, login, getUserById }
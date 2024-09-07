import { registerServicesUser } from "@/services/user/register.services";
import { Request, Response } from "express";

export class UserController {
    async register(req: Request, res: Response) {
        const result = await registerServicesUser(req.body, res)
        return res.status(200).send(result);
    }
}
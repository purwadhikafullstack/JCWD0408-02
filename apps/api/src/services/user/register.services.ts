import { User } from "@prisma/client";
import { checkExistingAccount } from "../checkExistingAccount";
import { Response } from "express";

export const registerServicesUser = async (body: User, res: Response) => {
    try {
        const { email, username, phone, password } = body
        await checkExistingAccount(email, res)
        
    } catch (error) {
        throw error
    }
}
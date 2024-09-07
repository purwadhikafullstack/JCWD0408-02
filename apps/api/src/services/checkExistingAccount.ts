import { responseError } from "@/helper/ResponseError"
import prisma from "@/prisma"
import { Response } from "express"

export const checkExistingAccount = async (email: string, res: Response) => {
    const existUser = await prisma.user.findFirst({ where: { email } })
    if (existUser) return responseError(res, "Email already exist")
}
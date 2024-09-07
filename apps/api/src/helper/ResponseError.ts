import { Response } from "express";

type errorType = string | Error

export const responseError = (res: Response, error: errorType) => {
    const errMsg = typeof error === "string" ? error : error.message
    return res.status(400).send({
        status: "Error",
        msg: error
    })
}
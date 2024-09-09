import { UserType } from "@/types/user"
import { axiosInstance } from "../axios"

export const registerAxios = async (payload: UserType) => {
    const res = await axiosInstance.post('/api/users/register', {
        email: payload.email
    })
    return res
}
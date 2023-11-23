import instance from "../instance"
import { GetAllUserRes } from "../responses/user.responses"

export const getAllUser = () => {
  const response = instance.get<any, GetAllUserRes>("/user")
  return response
}
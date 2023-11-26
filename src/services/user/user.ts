import instance from "../instance"
import { GetAllUserRes } from "../responses/user.responses"

export const getAllUser = (page:number,limit:number) => {
  const response = instance.get<any, GetAllUserRes>(`/user?_page=${page}&_limit=${limit}`)
  return response
}


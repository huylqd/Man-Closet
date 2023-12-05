import instance from "../instance"
import { GetAllUserRes } from "../responses/user.responses"

export const getAllUser = (page:number,limit:number) => {
  const response = instance.get<any, GetAllUserRes>(`/user?_page=${page}&_limit=${limit}`)
  return response
}

export const getUserById = (id: string) => {
  const response = instance.get(`/user/${id}`)
  return response
}

export const updateUserInfo = (id: string, data: {[key:string] : number | string | boolean}) => {
  const response = instance.patch(`/user/${id}`, data)
  return response
}

export const getUserAddress = (id:string) => {
  const response = instance.get(`/user/${id}/address`)
  return response
}

import instance from "../instance"
import { GetAllUserRes, GetUserAddressRes } from "../responses/user.responses"

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
  const response = instance.get<any, GetUserAddressRes>(`/user/${id}/address`)
  return response
}

export const deleteUserAddress = (user_id: string, address_id: string) => {
  const response = instance.delete(`/user/${user_id}/address/${address_id}`)
  return response
}

export const updateUserAddress = (user_id: string, address_id: string, data: {[key:string]: string | boolean}) => {
  const response = instance.patch(`/user/${user_id}/address/${address_id}`, data)
  return response
}
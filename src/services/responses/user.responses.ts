import { User } from "@/interfaces/user.interface";
import { AxiosResponse } from "axios";

export interface GetAllUserRes extends AxiosResponse {
  messages: string
  data: User[]
}

export interface GetUserAddressRes extends AxiosResponse {
  message : string,
  
}
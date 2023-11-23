


type Address = {
    id?: any,
    city?: String,
    district?: String,
    wards?: String,
    detailAdress?: String
    isDefault?: Boolean
  }
export interface IUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    address?: Address[];
    phone?: number | undefined;
    role: string;
  }

  export interface ILoginRegister{
    message:string,
    data:IUser,
    accessToken:string,
    refreshToken:string,
  }
  
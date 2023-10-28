
import instance from "../instance"

export const signUp = (user: any) => {
    const res = instance.post("api/signUp", user);


    return res
}
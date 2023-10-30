
import instance from "../instance"

export const signUp = (user: any) => {
    const res = instance.post("/signUp", user);
    return res
}
export const signIn = (user: any) => {
    const res = instance.post("/signIn", user);
    return res
}
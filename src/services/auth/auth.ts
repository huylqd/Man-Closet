
import instance from "../instance"

export const signUp = (user: any) => {
    const res = instance.post("/signUp", user);
    return res
}
export const signIn = (user: any) => {
    const res = instance.post("/signIn", user);
    return res
}
export const lockUser = (userId: any) => {
    const res = instance.patch(`/user/${userId}/lock`,{})
    return res
}

export const getListWishListByUserId = (userId: any) => {
    const res = instance.get(`/user/${userId}/wishlist`);
    return res
}

export const addRemoveWishList = (userId: string,item:any) => {
    const res = instance.patch(`/user/${userId}/wishlist`,item);
    return res
}


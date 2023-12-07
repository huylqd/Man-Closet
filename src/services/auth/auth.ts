
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

export const addRemoveWishList = (data:any) => {
    const res = instance.patch(`/user/wishlist`,data);
    return res
}

export const loginWithGoogle =async () => {
    try {
        const response = await instance.get("api/auth/google");
        return response.data; // Trả về dữ liệu từ server nếu cần
      } catch (error) {
        console.error("Error while logging in with Google:", error);
        throw error; // Xử lý lỗi nếu cần
      }
}


import instance from "../instance"

export interface DataComment {
    product_id: string | string[];
    message: string;
    rating: number
}

export const getCommentByProductId = async (productId: string | string[]) => {
    const response = await instance.get(`/api/comment/${productId}`)
    return response.data
}
export const createComment = async (data: DataComment) => {
    const response = await instance.post(`/api/comment`, data);
    return response.data
}
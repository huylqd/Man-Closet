import instance from "../instance";

export const getById = (id:any) => {
    const res = instance.get(`/products/${id}`)
    return res
}

export const getAll = () => {
    const res = instance.get(`/products`)
    return res
}
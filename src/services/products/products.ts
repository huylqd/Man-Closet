import instance from "../instance";

export const getById = (id:any) => {
    const res = instance.get(`api/products/${id}`)
    return res
}

export const getAll = () => {
    const res = instance.get(`api/products`)
    return res
}
export const createPro = (products : any) => {
    const res = instance.post(`api/products`, products)
    return res
}
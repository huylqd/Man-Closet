import { ICategory } from "@/interfaces/category";
import instance from "../instance";
import { commonErrorToast } from "@/utils/notify";


const getAllCategory = (page:number,limit:number) => {
    try {
        const res = instance.get(`api/category?_page=${page}&_limit=${limit}`)
        return res
    } catch (error) {
        console.log(error);
    }

}

const getCategoryById = async (id: string) => {
    try {
        const res = await instance.get(`api/category/${id}`)
        return res
    } catch (error) {
        console.log(error);

    }
}
const addCategory = async (category: any) => {
    try {
        const res = await instance.post(`api/category`, category)
        return res
    } catch (error:any) {
        console.log(error);
        
        commonErrorToast(`${error.response.data.message}`)

    }
}
const updateCategory = async (category: ICategory) => {
    try {
        const res = await instance.patch(`api/category/${category._id}`, category)
        return res
    } catch (error) {
        console.log(error);

    }
}
const deleteCategory = async (id: any) => {
    try {
        const res = await instance.delete(`api/category/${id}`)
        return res
    } catch (error) {
        console.log(error);

    }
}
const removeCategory = async (id: any) => {
    try {
        const res = await instance.patch(`api/category/remove/${id}`)
        return res
    } catch (error) {
        console.log(error);

    }
}

export { getAllCategory, getCategoryById, addCategory, updateCategory, deleteCategory,removeCategory }



import instance from "../instance";


const getAllCategory = () => {
    try {
        const res = instance.get('api/category')
        return res
    } catch (error) {
        console.log(error);
    }
  
}

const getCategoryById = async (id:string) => {
    try {
        const res = await instance.get(`api/category/${id}`)
        return res
    } catch (error) {
        console.log(error);
        
    }
}
const addCategory = async (category:any) => {
    try {
        const res = await instance.post(`api/category`,category)
        return res
    } catch (error) {
        console.log(error);
        
    }
}
const updateCategory = async (category:any) => {
    try {
        console.log(category);
        
        const res = await instance.patch(`api/category/${category._id}`,category)
        return res
    } catch (error) {
        console.log(error);
        
    }
}
const deleteCategory = async (id:any) => {
    try {
        const res = await instance.delete(`api/category/${id}`)
        return res
    } catch (error) {
        console.log(error);
        
    }
}

export { getAllCategory,getCategoryById,addCategory,updateCategory,deleteCategory }



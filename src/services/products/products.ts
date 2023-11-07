import instance from "../instance";

 const getById = async(id: any) => {
    try {
        const res = await instance.get(`api/products/${id}`)
        console.log('res' ,res);
        
        return res
    } catch (error) {
        console.log(error);
    }
}

 const getAll = async () => {
    try {
        const res =await instance.get(`api/products`)
        return res
    } catch (error) {
        console.log(error);
    }
}
 const createPro = async (products: any) => {
    try {
        const res = await instance.post(`api/products`, products)
        return res
    } catch (error) {
        console.log(error);
    }
}

 const updatePro =async (products: any) => {
    try {
        const res = await instance.patch(`api/products/${products._id}`, products)
        return res
    } catch (error) {
        console.log(error);
    }
}
 const deletePro = async (id: any) => {
    try {
        const res = await instance.delete(`api/products/${id}`)
        return res
    } catch (error) {
        console.log(error);
    }
}

export {deletePro , getAll , createPro , getById , updatePro }
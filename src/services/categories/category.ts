import instance from "../instance";


const getAllCategory = () => {
    const res = instance.get('/category')
    return res
}

export { getAllCategory }



import instance from "../instance";


const getAllCategory = () => {
    const res = instance.get('api/category')
    return res
}

export { getAllCategory }



import instance from "../instance";


const getAll = () => {
    const res = instance.get('api/products')
    return res
}

export {getAll}



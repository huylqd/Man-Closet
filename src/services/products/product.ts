import instance from "../instance";


const getAll = () => {
    const res = instance.get('/products')
    return res
}

export {getAll}



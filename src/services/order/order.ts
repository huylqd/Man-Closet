import instance from "../instance";



export const getBillByUser = (id_user:string) => {
    // console.log(id_user);
    
    const response = instance.get(`/order/${id_user}`)
    return response
}
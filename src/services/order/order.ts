import { IBill } from "@/interfaces/bill";
import instance from "../instance";
import { GetAllOrderBillRes, GetProductSoldRes } from "../responses/order.responses";



export const getBillByUser = (id_user:string,page:number) => {
    // console.log(id_user);
    const response = instance.get<IBill>(`/order/${id_user}?_page=${page}`)
    return response
}
export const getAllOrderBill = () => {
    const response = instance.get<any, GetAllOrderBillRes>("/order")
    return response
}

export const getProductSold = () => {
  const response = instance.get<any, GetProductSoldRes>("/analyst");
return response
};

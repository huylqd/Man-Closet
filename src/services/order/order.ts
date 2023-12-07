import { IBill } from "@/interfaces/bill";
import instance from "../instance";
import { GetAllOrderBillRes, GetProductSoldRes } from "../responses/order.responses";



export const getBillByUser = (id_user: string, page: number) => {
  // console.log(id_user);
  const response = instance.get<IBill>(`/order/user/${id_user}?_page=${page}`)
  return response
}
export const getAllOrderBill = (page: number, limit: number) => {
  const response = instance.get<any, GetAllOrderBillRes>(`/order?_page=${page}&_limit=${limit}`)
  return response
}
export const exportBillById = (billId: string | undefined) => {
  const response = instance.get<any>(`/order/export/${billId}`);
  return response
}
export const getProductSold = () => {
  const response = instance.get<any, GetProductSoldRes>("/analyst/product");
  return response
};

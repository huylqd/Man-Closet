import instance from "../instance";
import { GetAllOrderBillRes, GetProductSoldRes } from "../responses/order.responses";

export const getBillByUser = (id_user: string) => {
  // console.log(id_user);

  const response = instance.get(`/order/${id_user}`);
  return response;
};

export const getAllOrderBill = () => {
    const response = instance.get<any, GetAllOrderBillRes>("/order")
    return response
}

export const getProductSold = () => {
  const response = instance.get<any, GetProductSoldRes>("/analyst");
return response
};

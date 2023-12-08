import instance from "../instance";
import { GetProductSoldRes } from "../responses/order.responses";

export const getProductSold = () => {
  const response = instance.get<any, GetProductSoldRes>("/analyst/product");
  return response;
};
export const Thongkedonhang = () => {
  const response = instance.get<any>("/analyst/bill");
  return response;
};
export const Thongkedoanhthu = () => {
  const response = instance.get<any>("/analyst/doanhthu");
  return response;
};
export const Thongketaikhoanmoi = () => {
  const response = instance.get<any>("/analyst/user");
  return response;
};

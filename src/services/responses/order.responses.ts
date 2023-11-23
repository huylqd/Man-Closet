import { OrderItem } from "@/interfaces/order.interface";
import { ProductSold } from "@/interfaces/product";
import { AxiosResponse } from "axios";

export interface GetProductSoldRes extends AxiosResponse {
  message: string;
  data: ProductSold[];
}

export interface GetAllOrderBillRes extends AxiosResponse {
  message: string;
  data: OrderItem[];
}

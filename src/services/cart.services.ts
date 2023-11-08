import { AxiosResponse } from "axios";
import instance from "./instance";
import { ProductInCartResponse } from "./responses/product.responses";
import { IProductInCart } from "@/interfaces/product";

export const getAllProductInCart = (user_id: string) => {
  const res = instance.get<any, ProductInCartResponse>(`api/cart/${user_id}`);
  return res;
};

export const addProductToCartAxios = (
  user_id: string,
  product_data: IProductInCart
) => {
  const res = instance.post(`api/cart/add-to-cart`, {
    user_id,
    product: product_data,
  });
  return res
};

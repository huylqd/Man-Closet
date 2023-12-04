import instance from "./instance";
import { ProductInCartResponse } from "./responses/product.responses";
import { IProductInCart } from "@/interfaces/product";

export const getAllProductInCart = () => {
  const res = instance.get<any, ProductInCartResponse>(`api/cart`);
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

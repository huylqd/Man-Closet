import instance from "./instance";
import { ProductInCartResponse } from "./responses/product.responses";
import { IProductInCart, ProductInCart } from "@/interfaces/product";

export const getAllProductInCart = (signal? : AbortSignal) => {
  const res = instance.get<any, ProductInCartResponse>(`api/cart`, {signal: signal});
  return res;
};

export const addProductToCartAxios = (
  user_id: string,
  product_data: IProductInCart
) => {
  const res = instance.patch(`api/cart/add-to-cart`, {
    user_id,
    product: product_data,
  });
  return res
};


type DeleteProductInCartResponse = {
  message: string,
  data: IProductInCart[]
}
export const deleteProductInCart = (user_id: string, data: ProductInCart[]) => {
  const response = instance.put<any, DeleteProductInCartResponse>(`/api/cart/${user_id}`, data)
  return response
}

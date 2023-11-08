import { IProduct } from "@/interfaces/product";
import instance from "../instance";
import { GetProductResponse } from "../responses/product.responses";

export const getById = (id: string) => {
  const res = instance.get<any, GetProductResponse>(`api/products/${id}`);
  return res;
};

export const getProductById = (product_id: string) => {
  const response = instance.get<any, GetProductResponse>(
    `api/products/${product_id}`
  );
  return response;
};

export const getAll = () => {
  const res = instance.get(`api/products`);
  return res;
};
export const createPro = (products: any) => {
  const res = instance.post(`api/products`, products);
  return res;
};

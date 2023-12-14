import { IProduct } from "@/interfaces/product";
import instance from "../instance";
import { GetAllProductResponse, GetProductResponse } from "../responses/product.responses";
  

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

export const getProductByCategoryId = (id: string) => {
  const response = instance.get(`api/products/cate/${id}`);
  return response
}

export const getAll = (page: number) => {
  const res = instance.get(`api/products?_page=${page}`);
  return res
}
export const getAllProduct = () => {
  const response = instance.get<any, GetAllProductResponse>("api/products")
  return response
}
export const filterProduct = (page:number,sort:string,order:string) => {
  const res = instance.get<any, GetAllProductResponse>(`api/products?_page=${page}&_sort=${sort}&_order=${order}`);
  return res
}


export const createPro = (products: any) => {

  const res = instance.post(`api/products`, products);
  return res;
};
export const updatePro = (products: any,id:string) => {
  const res = instance.patch(`api/products/${id}`, products);
  return res;
};
export const deletePro = (id: string) => {
  const res = instance.delete(`api/products/${id}`);
  return res;
};

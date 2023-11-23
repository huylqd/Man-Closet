export interface Property {
  imageUrl: string;
  color: string;
  quantity: number;
  size: string;
}
export interface IProduct {
  _id: string;
  productName: string;
  price: number;
  description?: string;
  properties: Property[];
  categoryId: string;
  couponId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  deleted?: boolean;
}
export interface IProductResponse {
  data: IProduct[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
}

export interface IProductInCart {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  imageUrl: string;
  addedAt?: Date;
  updatedAt?: Date;
}

export interface ProductSold {
  totalQuantitySold: number;
  totalAmountSold: number;
  product_id: string;
}

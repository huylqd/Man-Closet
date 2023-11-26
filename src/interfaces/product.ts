export interface Variant {
    quantity: number;
    size: string;
    _id:string
}

export interface Property {
    imageUrl: string;
    color: string;
    variants: Variant[]
}
export interface IProduct {
    _id: string,
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
    _id: string,
    name: string,
    price: number,
    quantity: number,
    color: string,
    size: string,
    imageUrl: string,
    addedAt?: Date,
    updatedAt?: Date
}

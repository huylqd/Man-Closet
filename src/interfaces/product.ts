export interface property {
    imageUrl: string;
    color: string;
    quantity: number;
    size: string;
}
export interface IProduct {
    _id: string,
    productName: string;
    price: number;
    description?: string;
    properties: property[];
    categoryId: string;
    couponId: string;
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

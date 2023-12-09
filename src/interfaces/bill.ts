
export interface IBill {
  _id?: string,
  user_id: string;
  items: IOrderItem[];
  shipping_address: string;
  payment_method: string;
  total_price: number;
  history_order_status: IHistoryStatus[];
  id_transaction: String;
  createdAt: Date;
  updatedAt: Date;
  userName?: string
}
export enum OrderStatus {
  Processing = "Đang xử lý",
  NotPaid = "Chưa thanh toán",
  Paid = "Đã thanh toán",
  Delivering = "Đang giao hàng",
  Received = "Đã nhận",
  Cancelled = "Đã hủy",
}
export interface IHistoryStatus {
  _id?: string,
  status: OrderStatus;
  createdAt: Date;
}
export interface IOrderItem {
  product_id: string;
  property: {
    quantity: number;
    color: string;
    size: string;
    imageUrl: string
  };
  price: number;
  sub_total: number;
}

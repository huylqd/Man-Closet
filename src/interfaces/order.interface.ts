export interface OrderItem {
  _id: string;
  user_id: string;
  payment_method: string;
  shipping_address: string;
  items: {
    property: {
      quantity: number;
      color: string;
      size: string;
    };
    product_id: string;
    price: number;
    sub_total: number;
  }[];
  total_price: number;
  id_transaction: string;
  history_order_status: [
    {
      status: string;
      createdAt: Date;
      _id: string;
    },
  ];
  createdAt: Date;
  updatedAt: Date;
}

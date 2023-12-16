"use client";

import { parseNumberToCurrency } from "@/helper/convertCurrency";
import { customDate } from "@/helper/convertDate";
import { IBill, ORDER_STATUS } from "@/interfaces/bill";
import { changeStatusBillState } from "@/redux/reducer/order.reducer";
import { useAppDispatch } from "@/redux/store";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { v4 as uuidv4 } from "uuid";

type Props = {
  order: IBill;
  onClose: () => void;
};
const OrderPreviewModal = ({ order, onClose }: Props) => {
  const dispatch = useAppDispatch();
  const handleChangeBillStatus = (orderS: string, paymentS: string) => {
    dispatch(
      changeStatusBillState({
        billId: order?._id,
        orderStatus: orderS,
        paymentStatus: paymentS || order?.payment_status?.status,
      })
    );
    onClose()
  };

  return (
    <>
      <div className="w-[500px] rounded p-3 bg-white">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-gray-800 underline">
            Thông tin đơn hàng:
          </h5>
          <button
            className="flex items-center text-gray-800 hover:text-gray-500 transition-all"
            onClick={() => onClose()}
          >
            <X />
          </button>
        </div>
        <div className="pt-4 flex flex-col gap-4">
          <div>
            <p className="font-medium text-gray-500">Mã số đơn hàng</p>
            <p>{order?._id}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500 pb-1">Sản phẩm đặt mua</p>
            <ul className="flex flex-col gap-3">
              {order?.items?.map((item) => {
                return (
                  <li key={uuidv4()} className="flex items-center">
                    <figure className="relative w-[60px] h-[60px] rounded overflow-hidden">
                      <Image
                        src={item?.property?.imageUrl}
                        alt={item?.product_name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </figure>
                    <div className="pl-2 flex flex-col">
                      <p className="flex-[1]">{item?.product_name}</p>
                      <p>
                        Phân loại: {item?.property?.size},{" "}
                        {item?.property?.color}
                      </p>
                      <p>Số lượng: {item?.property?.quantity}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="font-medium text-gray-500">Ship tới</p>
            <p>{order?.shipping_address}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Thanh toán</p>
            <div>
              <p>Tổng: {parseNumberToCurrency(order?.total_price)}</p>
              <p>Phương thức: {order?.payment_method}</p>
              <p>Trạng thái: {order?.payment_status?.status}</p>
              <p>
                Thời gian:{" "}
                {customDate(order?.payment_status?.updatedAt.toString())}
              </p>
            </div>
          </div>
          <div>
            <p className="font-medium text-gray-500">Lịch sử vận chuyển</p>
            <ul className="flex flex-col gap-3">
              {order?.history_order_status
                ?.slice()
                ?.reverse()
                ?.map((item, index) => {
                  return (
                    <li key={uuidv4()}>
                      <div className="flex items-start gap-3">
                        <p className="text-green-500">
                          {index === 0 ? "Hiện tại" : ""}
                        </p>
                        <div>
                          <p>Tình trạng: {item?.status}</p>
                          <p>
                            Thời gian: {customDate(item?.updatedAt.toString())}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div>
          {order?.current_order_status?.status === ORDER_STATUS.PENDING && (
            <div className=" pt-2 flex w-full md:w-fit h-[50px] gap-1 sm:gap-2 sm:ml-auto">
              <button
                className="bg-rose-500 rounded h-full px-2 py-1"
                onClick={() => handleChangeBillStatus(ORDER_STATUS.CANCEL, "")}
              >
                Huỷ đơn hàng
              </button>
              <button
                onClick={() => handleChangeBillStatus(ORDER_STATUS.CONFIRM, "")}
                className="bg-zinc-800 rounded h-full px-2 py-1"
              >
                Xác nhận đơn hàng
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderPreviewModal;

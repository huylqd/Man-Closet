import { ORDER_STATUS, PAYMENT_STATUS } from "@/interfaces/bill";
import { changeStatusBillState } from "@/redux/reducer/order.reducer";
import { useAppDispatch } from "@/redux/store";
import { useMemo } from "react";

type ButtonsFucProps = {
  orderStatus: string;
  data: {
    billId: string;
    payment_status: string;
  };
};
const ButtonsFunc = ({ orderStatus, data }: ButtonsFucProps) => {
  const dispatch = useAppDispatch();
  const { billId, payment_status } = data;

  const typeNextCase = useMemo(() => {
    switch (orderStatus) {
      case ORDER_STATUS.DELIVERY:
        return ORDER_STATUS.RECEIVER;
      case ORDER_STATUS.RECEIVER:
        return ORDER_STATUS.EXCHANGE;
    }
  }, [orderStatus]);

  const handleChangeBillStatus = (orderS: string, paymentS: string) => {
    dispatch(
      changeStatusBillState({
        billId,
        orderStatus: orderS,
        paymentStatus: paymentS || payment_status,
      })
    );
  };
  return (
    <>
      <div className=" pt-2 flex w-full md:w-fit h-[50px] gap-1 sm:gap-2 sm:ml-auto">
        {payment_status === PAYMENT_STATUS.UNPAID && (
          <button
            onClick={() => handleChangeBillStatus("", PAYMENT_STATUS.PAID)}
            className="flex-[1] sm:w-[180px] text-gray-800 hover:text-gray600-500 transition-all border rounded border-gray-800 hover:border-rose-500"
          >
            <p>Thanh toán</p>
          </button>
        )}
        {(orderStatus === ORDER_STATUS.PENDING ||
          orderStatus === ORDER_STATUS.CONFIRM) && (
          <button
            onClick={() =>
              handleChangeBillStatus(ORDER_STATUS.CANCEL, payment_status)
            }
            className="flex-[1] sm:w-[180px] text-gray-800 hover:text-rose-500 transition-all border rounded border-gray-800 hover:border-rose-500"
          >
            <p>Huỷ đơn</p>
          </button>
        )}
        {typeNextCase && (
          <button
            onClick={() => handleChangeBillStatus(typeNextCase, payment_status)}
            className="flex-[1] sm:w-[180px] bg-zinc-800 text-white hover:bg-zinc-600 rounded transition-all"
          >
            <p>{typeNextCase}</p>
          </button>
        )}
      </div>
    </>
  );
};

export default ButtonsFunc;

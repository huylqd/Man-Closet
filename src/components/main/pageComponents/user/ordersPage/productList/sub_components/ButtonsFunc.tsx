import { ORDER_STATUS } from "@/interfaces/bill";
import { useMemo } from "react";

type ButtonsFucProps = {
  orderStatus: string;
};
const ButtonsFunc = ({ orderStatus }: ButtonsFucProps) => {
  const typeNextCase = useMemo(() => {
    switch (orderStatus) {
      case ORDER_STATUS.DELIVERY:
        return ORDER_STATUS.RECEIVER;
      case ORDER_STATUS.RECEIVER:
        return ORDER_STATUS.EXCHANGE
    }
  }, [orderStatus]);
  return (
    <>
      <div className=" pt-2 flex w-full md:w-fit h-[50px] gap-1 sm:gap-2 sm:ml-auto">
        {(orderStatus === ORDER_STATUS.PENDING ||
          orderStatus === ORDER_STATUS.CONFIRM) && (
          <button className="flex-[1] sm:w-[180px] text-gray-800 hover:text-rose-500 transition-all border rounded border-gray-800 hover:border-rose-500">
            <p>Huỷ đơn</p>
          </button>
        )}
        {typeNextCase && (
          <button className="flex-[1] sm:w-[180px] bg-zinc-800 text-white hover:bg-zinc-600 rounded transition-all">
            <p>{typeNextCase}</p>
          </button>
        )}
      </div>
    </>
  );
};

export default ButtonsFunc;

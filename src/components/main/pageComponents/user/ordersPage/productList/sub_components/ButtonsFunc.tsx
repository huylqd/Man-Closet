import { OrderStatus } from "@/interfaces/bill";
import { useMemo } from "react";

type ButtonsFucProps = {
  orderStatus: string;
};
const ButtonsFunc = ({ orderStatus }: ButtonsFucProps) => {
  const typeNextCase = useMemo(() => {
    switch (orderStatus) {
      case OrderStatus.PENDING:
        return OrderStatus.CANCEL;
    }
  }, [orderStatus]);
  return (
    <>
      <div className=" pt-2 flex w-full md:w-fit h-[50px] gap-1 sm:gap-2 sm:ml-auto">
        <button className="flex-[1] sm:w-[180px] text-gray-800 hover:text-rose-500 transition-all border rounded border-gray-800 hover:border-rose-500">
          <p>Huỷ</p>
        </button>
        <button className="flex-[1] sm:w-[180px] bg-zinc-800 text-white hover:bg-zinc-600 rounded transition-all">
          <p>{typeNextCase}</p>
        </button>
      </div>
    </>
  );
};

export default ButtonsFunc


import { parseNumberToCurrency } from "@/helper/convertCurrency";
import { OrderStatus } from "@/interfaces/bill";
import { OrderItem } from "@/interfaces/order.interface";
import { Hash, Receipt, ScatterChart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";

type Props = {
  data: OrderItem;
};

const ProductListItem = ({ data }: Props) => {
  const { _id, current_order_status, total_price } = data;
  const router = useRouter();
  const typeNextCase = useMemo(() => {
    switch (current_order_status.status) {
      case OrderStatus.PENDING:
        return OrderStatus.CONFIRM;
    }
  }, [current_order_status]);

  return (
    <>
      <li
        className="flex flex-col gap-3 cursor-pointer bg-white p-3 rounded"
        onClick={() => router.push(`/user/orders/${_id}`)}
      >
        <>
          <SubItem
            label="Mã đơn hàng"
            icon={<Hash className="w-5 h-5 text-rose-400" />}
            data={_id}
          />
          <SubItem
            label="Trạng thái"
            icon={<ScatterChart className="w-5 h-5 text-yellow-400" />}
            data={current_order_status.status}
          />
          <SubItem
            label="Tổng thanh toán"
            icon={<Receipt className="w-5 h-5 text-green-400" />}
            data={parseNumberToCurrency(total_price)}
          />
        </>

        <div className=" pt-2 flex w-full md:w-fit h-[50px] gap-1 sm:gap-2 sm:ml-auto">
          <button className="flex-[1] sm:w-[180px] text-gray-800 hover:text-rose-500 transition-all border rounded border-gray-800 hover:border-rose-500">
            <p>Huỷ</p>
          </button>
          <button className="flex-[1] sm:w-[180px] bg-zinc-800 text-white hover:bg-zinc-600 rounded transition-all">
            <p>{typeNextCase}</p>
          </button>
        </div>
      </li>
    </>
  );
};

export default ProductListItem;



type SubProps = {
  data: number | string;
  label: string;
  icon?: React.ReactNode;
};
const SubItem = ({ data, label, icon }: SubProps) => {
  return (
    <>
      <div className="flex-col m:flex-row flex items-start m:items-center justify-center m:justify-between gap-1">
        <p className="flex items-center gap-1">
          <span>{icon}</span>
          <span className="text-gray-500">{label}: </span>
        </p>
        <p>{data}</p>
      </div>
    </>
  );
};

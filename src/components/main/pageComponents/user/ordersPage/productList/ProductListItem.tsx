import { parseNumberToCurrency } from "@/helper/convertCurrency";
import { IBill, OrderStatus } from "@/interfaces/bill";
import { Hash, Receipt, ScatterChart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import ButtonsFunc from "./sub_components/ButtonsFunc";

type Props = {
  data: IBill;
};

const ProductListItem = ({ data }: Props) => {
  const { _id, current_order_status, total_price } = data;
  const router = useRouter();

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

        <ButtonsFunc orderStatus={current_order_status.status}/>
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



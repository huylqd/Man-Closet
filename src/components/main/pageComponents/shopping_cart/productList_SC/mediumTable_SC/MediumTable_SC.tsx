import { IProductInCart } from "@/interfaces/product";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import MediumTableItem_SC from "./mediumTableItem_SC/MediumTableItem_SC";

const tableHeaderData = [
  {
    label: "Sản phẩm",
    className: "product_column flex-[5] text-left",
  },
  {
    label: "Giá",
    className: "price_column flex-[2] text-center",
  },
  {
    label: "Số lượng",
    className: "quantity_column flex-[2] text-center",
  },
  {
    label: "Giá cuối",
    className: "final_price_column flex-[2] text-center",
  },
];

type Props = {
  data: IProductInCart[];
};

const MediumTable_SC = ({ data }: Props) => {
  return (
    <>
      <div className="h-[70vh] overflow-y-auto w-full bg-zinc-100">
        {/* table header */}
        <ul className="flex gap-3 pb-3 border-b">
          <li className="flex-[1]"></li>
          {tableHeaderData.map(({ label, className }) => (
            <li key={uuidv4()} className={`${className}`}>
              <span className="text-gray-400 font-medium">{label}</span>
            </li>
          ))}
          <li className="flex-[1]"></li>
        </ul>

        {/* table content */}
        <ul>
          {data?.map((item) => (
            <MediumTableItem_SC key={uuidv4()} data={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default MediumTable_SC;

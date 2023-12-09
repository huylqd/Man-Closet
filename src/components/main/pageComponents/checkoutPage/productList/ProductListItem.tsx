import { useCurrency } from "@/hooks";
import { ProductInCart } from "@/interfaces/product";
import Image from "next/image";
import React from "react";

const ProductListItem = ({ data }: { data: ProductInCart }) => {
  const { _id, color, imageUrl, name, quantity, size, totalPrice } = data;
  return (
    <>
      <li className="flex items-start flex-col gap-1 pb-6">
        <div className="flex item-center gap-2">
          <figure className="relative w-[60px] h-[60px] overflow-hidden rounded">
            <Image
              src={imageUrl}
              alt={name}
              fill
              style={{ objectFit: "cover" }}
            />
          </figure>

          <div className="flex flex-col">
            <p className="font-medium text-gray-800 flex-[1]">{name}</p>
            <p className="font-medium text-gray-800">
              <span>Phân loại: </span>
              <span>{color}, {size}</span>
            </p>
          </div>
        </div>
        <div></div>
        <div>
          <div>
            <p className="font-medium text-gray-800">
              <span>SL: </span>
              <span>{quantity}</span>
            </p>
          </div>
          <div>
            <p className="font-medium text-gray-800">
              <span>Tổng: </span>
              <span>{useCurrency(totalPrice)}</span>
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProductListItem;

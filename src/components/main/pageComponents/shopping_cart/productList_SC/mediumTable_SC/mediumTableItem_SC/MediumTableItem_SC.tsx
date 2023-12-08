"use client"

import { useCurrency } from "@/hooks";
import { IProductInCart } from "@/interfaces/product";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Props = {
  data: IProductInCart;
};

const MediumTableItem_SC = ({ data }: Props) => {
  const { _id, color, imageUrl, name, price, quantity, size } = data;

  const [finalQuantity, setFinalQuantity] = useState(quantity.toString())

  return (
    <>
      <li key={uuidv4()} className="flex items-center py-3 border-b gap-3">
        <input type="checkbox" className="flex-[1]" />
        <article className="flex-[5] flex items-center gap-3">
          <figure className="relative w-[60px] h-[60px] rounded overflow-hidden">
            <Image
              alt={name}
              src={imageUrl}
              fill
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
              }}
            />
          </figure>
          <p className="flex-[1] font-medium text-gray-800">{name}</p>
        </article>
        <p className="flex-[2] text-center font-medium text-gray-800">{useCurrency(price)}</p>
        <div className="flex-[2] flex items-center justify-center">
          <input type="text" className="w-[60px] text-center" value={finalQuantity}/>
          <div className="flex flex-col">
            <button><Plus className="w-5 h-5"/></button>
            <button><Minus className="w-5 h-5"/></button>
          </div>
        </div>
        <p className="flex-[2] text-center font-medium text-[--secondary-color]">{useCurrency(price * +finalQuantity)}</p>
        <button className="flex-[1] text-center">
          <X className="w-5 h-5"/>
        </button>
      </li>
    </>
  );
};

export default MediumTableItem_SC;

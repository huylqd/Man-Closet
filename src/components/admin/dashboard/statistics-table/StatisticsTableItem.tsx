"use client";

import { Button } from "@/components/ui/button";
import { useCurrency } from "@/hooks";
import Image from "next/image";
import React, { useState } from "react";

interface StatisticsTableItemProps {
  product: {
    _id: string;
    imageUrl: string;
    productName: string;
    price: number;
    quantity: number;
    ratting: number;
    sold: number;
  };
  index: number;
}

const StatisticsTableItem = ({ product, index }: StatisticsTableItemProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleToggleModal = () => {
    setIsOpenModal((curr) => !curr);
  };

  return (
    <>
      <li className="flex">
        <div className="flex-[1] flex justify-center items-center">
          {index + 1}
        </div>
        <div className="flex-[2] flex justify-center items-center">
          <figure className="w-[80px] h-[80px] relative rounded overflow-hidden">
            <Image
              src={product.imageUrl}
              fill
              objectFit="contain"
              className="absolute"
              alt=""
            />
          </figure>
        </div>
        <div className="flex-[6] flex justify-center items-center">
          {product.productName}
        </div>
        <div className="flex-[3] flex justify-center items-center">
         {product.ratting}
        </div>
        <div className="flex-[3] flex justify-center items-center">
          {product.sold}
        </div>
        <div className="flex-[2] flex justify-center items-center">
          <Button onClick={() => handleToggleModal()} variant={"bordered"}>
            Chi tiết
          </Button>
        </div>
      </li>
    </>
  );
};

export default StatisticsTableItem;

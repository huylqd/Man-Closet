"use client";

import { Button } from "@/components/ui/button";
import { useCurrency } from "@/hooks";
import { IProduct, ProductSold } from "@/interfaces/product";
import { getProduct } from "@/redux/reducer/product.reducer";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface StatisticsTableItemProps {
  data: ProductSold
  index: number;
}

const StatisticsTableItem = ({ data, index }: StatisticsTableItemProps) => {
  const  {product_id, totalAmountSold, totalQuantitySold}  = data
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [product, setProduct] = useState({} as IProduct) 
  const productState = useAppSelector(state => state.product.product)

  const dispatchThunk = useAppDispatch()

  useEffect(() => {
    dispatchThunk(getProduct(product_id))
  }, [dispatchThunk, product_id])

  useEffect(() => {
    setProduct(productState)
  }, [productState])

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
              src={product.properties?.[0]?.imageUrl}
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
         {useCurrency(totalAmountSold)}
        </div>
        <div className="flex-[3] flex justify-center items-center">
          {totalQuantitySold}
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

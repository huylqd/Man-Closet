"use client";

import { Button } from "@/components/ui/button";
import { useCurrency } from "@/hooks";
import Image from "next/image";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import StatisticsTableItem from "./StatisticsTableItem";

const StatisticsTable = () => {
  const products = [
    {
      _id: "asdflaksdfjnas",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSo5E2dzpFfNNWkRmQaKEPj25yJgazU9NQD0AjXTxMiL1-aNYkfQOLXM2COuq0arNN17MrFugWB01K6V46mVgz-3QiGAz_bPs8PM7mFSmtf&usqp=CAE",
      productName: "Áo test",
      price: 1000000,
      quantity: 100,
      ratting: 5,
      sold: 1000,
    },
    {
      _id: "asdflaksdfjnad",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSo5E2dzpFfNNWkRmQaKEPj25yJgazU9NQD0AjXTxMiL1-aNYkfQOLXM2COuq0arNN17MrFugWB01K6V46mVgz-3QiGAz_bPs8PM7mFSmtf&usqp=CAE",
      productName: "Áo test",
      price: 1000000,
      quantity: 50,
      ratting: 4,
      sold: 1000,
    },
    {
      _id: "asdflaksdfjnad",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSo5E2dzpFfNNWkRmQaKEPj25yJgazU9NQD0AjXTxMiL1-aNYkfQOLXM2COuq0arNN17MrFugWB01K6V46mVgz-3QiGAz_bPs8PM7mFSmtf&usqp=CAE",
      productName: "Áo test",
      price: 1000000,
      quantity: 50,
      ratting: 4,
      sold: 1000,
    },
    {
      _id: "asdflaksdfjnad",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSo5E2dzpFfNNWkRmQaKEPj25yJgazU9NQD0AjXTxMiL1-aNYkfQOLXM2COuq0arNN17MrFugWB01K6V46mVgz-3QiGAz_bPs8PM7mFSmtf&usqp=CAE",
      productName: "Áo test",
      price: 1000000,
      quantity: 50,
      ratting: 4,
      sold: 1000,
    },
    {
      _id: "asdflaksdfjnad",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSo5E2dzpFfNNWkRmQaKEPj25yJgazU9NQD0AjXTxMiL1-aNYkfQOLXM2COuq0arNN17MrFugWB01K6V46mVgz-3QiGAz_bPs8PM7mFSmtf&usqp=CAE",
      productName: "Áo test",
      price: 1000000,
      quantity: 50,
      ratting: 4,
      sold: 1000,
    },
  ];

  return (
    <>
      <div className="bg-white  px-6 py-3 ">
        <h2 className="pb-6 text-lg font-medium text-center">Sản phẩm bán chạy</h2>
        <div className="overflow-x-auto flex flex-col gap-2">
          <div className="flex py-2 bg-slate-50 rounded">
            <div className="flex-[1] flex justify-center items-center">Stt</div>
            <div className="flex-[2] flex justify-center items-center">Ảnh</div>
            <div className="flex-[6] flex justify-center items-center">Tên</div>
            <div className="flex-[3] flex justify-center items-center">Đánh giá</div>
            <div className="flex-[3] flex justify-center items-center">
              Đã bán
            </div>
            <div className="flex-[2] flex justify-center items-center">
              Chi tiết
            </div>
          </div>

          <ul className="flex flex-col gap-2 py-1">
            {products.map((item, index) => {
              return (
                <StatisticsTableItem key={uuidv4()} index={index} product={item}/>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default StatisticsTable;

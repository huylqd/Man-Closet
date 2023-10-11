"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// ui
import { ProductCardV1 } from "@/components/card";
import { SwiperSlide } from "swiper/react";


// css
import "swiper/css";
import "swiper/css/pagination";
import TitleDivide from "@/components/titleDivide";
import { BasicCarousel } from "@/components/carousel";

// type
interface ProductListProps {
  title: string;
  data: Array<{
    href: string;
    name: string;
    imageUrl: string;
    price: number;
  }>;
}

const ProductList = ({ title, data }: ProductListProps) => {
  const [typeSelect, setTypeSelect] = useState(0);
  return (
    <div>
      <div className="">
        <TitleDivide title={title} align="center" />
        <ul className="flex items-center justify-center gap-6 pb-4 ">
          <li className="text-lg font-normal hover:text-red-700 cursor-pointer">
            Bán Chạy
          </li>
          <li className="text-lg font-normal hover:text-red-700 cursor-pointer">
            Đặc Sắc
          </li>
          <li className="text-lg font-normal hover:text-red-700 cursor-pointer">
            Offer Chất
          </li>
        </ul>
      </div>
      <div className="py-4">
        <div className="hidden md:flex flex-wrap gap-y-20 ml-[-40]">
          {data.map((item) => (
            <ProductCardV1
              key={uuidv4()}
              data={item}
              marginLeft={40}
              previews={4}
            />
          ))}
        </div>

        <div className="block md:hidden">
          <BasicCarousel previews={1}>
            {data.map((item) => (
              <SwiperSlide key={uuidv4()}>
                <ProductCardV1 data={item} />
              </SwiperSlide>
            ))}
          </BasicCarousel>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

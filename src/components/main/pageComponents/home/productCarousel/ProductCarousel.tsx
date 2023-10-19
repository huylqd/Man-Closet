"use client"


import {v4 as uuidv4} from "uuid";
// ui
import TitleDivide from "@/components/titleDivide";
import { SwiperSlide } from "swiper/react";
import { ProductCardV1 } from "@/components/card";
import { BasicCarousel } from "@/components/carousel";

// css

// type
interface Data {
  href: string;
  imageUrl: string;
  name: string;
  price: number;
}

interface ProductCarouselProps {
  title: string;
  data: Data[];
}

const ProductCarousel = ({ title, data }: ProductCarouselProps) => {
  return (
    <div>
      <div className="py-2 pt-4">
        <TitleDivide title={title} align="center"/>
      </div>
      <div>
        <BasicCarousel previews={4}>
          {data.map(item => (
            <SwiperSlide key={uuidv4()}>
              <ProductCardV1 data={item}/>
            </SwiperSlide>
          ))}
        </BasicCarousel>
      </div>
    </div>
  );
};

export default ProductCarousel;

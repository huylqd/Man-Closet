'use client'
import { ProductCardV1 } from '@/components/card';
import { BasicCarousel } from '@/components/carousel';
import { GridView } from '@/components/dataViews';
import TitleDivide from '@/components/titleDivide';
import { v4 as uuidv4 } from "uuid";
import React from 'react'
import { SwiperSlide } from 'swiper/react';
import { IProduct, IProductResponse, property } from '@/interfaces/product';
import { useState, useEffect } from 'react'
import { getAll } from '@/services/products/product';
interface ShopListProp {
  title: string;
  data: IProduct[]
}

const ShopList = ({ title, data }: ShopListProp) => {

  return (
    <div>
      <div className="">
        <TitleDivide title={title} align="center" />

      </div>
      <div className="py-4">
        <GridView marginLeft="40px" previews={3} wrap className="gap-y-6 hidden sm:flex">
          {data?.map((item) => (
            <ProductCardV1
              key={uuidv4()}
              data={item}
              marginLeft="40px"
            />
          ))}
        </GridView>
        <div className="block sm:hidden">
          <BasicCarousel previews={1}>
            {data?.map((item) => (
              <SwiperSlide key={uuidv4()}>
                <ProductCardV1 data={item} />
              </SwiperSlide>
            ))}
          </BasicCarousel>
        </div>
      </div>
    </div>
  );
}

export default ShopList
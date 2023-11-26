"use client";

import { v4 as uuidv4 } from "uuid";
// ui
import { SwiperSlide } from "swiper/react";
import { ProductCardV2 } from "@/components/card";
import { BasicCarousel } from "@/components/carousel";
import { IProduct } from "@/interfaces/product";
import TitleGap from "@/components/titleGap";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import { getAllProductState } from "@/redux/reducer/product.reducer";

const ProductCarousel = () => {
  const productsState = useAppSelector((state) => state.product.products);
  const [product, setProduct] = useState<IProduct[]>([]);

  const dispatchThunk = useAppDispatch();

  useEffect(() => {
    dispatchThunk(getAllProductState());
  }, [dispatchThunk]);

  useEffect(() => {
    setProduct(productsState);
  }, [productsState]);

  return (
    <div>
      <div>
        <TitleGap title={"Sản phẩm nổi bật"} />
      </div>
      <div className="pt-2">
        <BasicCarousel previews={4}>
          {product.map((item) => {
            const data = {
              _id: item._id,
              name: item.productName,
              price: item.price,
              imageUrl: item.properties[0].imageUrl,
            }
            return (
              <SwiperSlide key={uuidv4()}>
                <ProductCardV2 data={data} />
              </SwiperSlide>
            );
          })}
        </BasicCarousel>
      </div>
    </div>
  );
};

export default ProductCarousel;

"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { addProductToCart } from "@/redux/reducer/cart.reducer";
import { commonSuccessToast } from "@/utils/notify";
import { IProduct, Variant } from "@/interfaces/product";
import { getProductState } from "@/redux/reducer/product.reducer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { useCurrency } from "@/hooks";

import "swiper/css";
import "swiper/css/pagination";
import "./detailCustomSwiper.scss";

const ImageItem = ({ src }: { src: string }) => {
  return (
    <div className="relative w-full h-full">
      <Image
        alt="product-detail-image"
        src={src}
        width={1000}
        height={1000}
        style={{ objectFit: "contain", width: "100%", height: "100%" }}
      />
    </div>
  );
};

const Detail = () => {
  const { productId } = useParams();
  const user = JSON.parse(localStorage.getItem("user") as string);
  // state
  const productState = useAppSelector((state) => state.product.product);
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [sizeSelected, setSizeSelected] = useState("");
  const [colorSelected, setColorSelected] = useState("");
  const [inventoryQuantity, setInventoryQuantity] = useState(0);
  const [imageSelected, setImageSelected] = useState("");
  const [quantitySelected, setQuantitySelected] = useState(1);

  // useEffect
  const dispatchThunk = useAppDispatch();

  useEffect(() => {
    dispatchThunk(getProductState(productId.toString()));
  }, [dispatchThunk, productId]);

  useEffect(() => {
    setProduct(productState);
    setColorSelected(productState.properties?.[0]?.color);
    setSizeSelected(productState.properties?.[0]?.variants?.[0].size);
    setImageSelected(productState.properties?.[0]?.imageUrl);
  }, [productState]);

  useEffect(() => {
    getProductQuantityExist();
  }, [colorSelected, sizeSelected]);

  // func
  const getProductQuantityExist = () => {
    const indexOfColor = product.properties?.findIndex(
      (item) => item.color === colorSelected
    );
    const indexOfSize = product.properties?.[indexOfColor]?.variants.findIndex(
      (item) => item.size === sizeSelected
    );
    const quantity =
      product.properties?.[indexOfColor]?.variants?.[indexOfSize]?.quantity;
    setInventoryQuantity(quantity);
  };

  const handleChangeImageSelected = (color: string) => {
    const indexOfColor = product.properties?.findIndex(
      (item) => item.color === colorSelected
    );
    const image = product.properties?.[indexOfColor]?.imageUrl;
    setImageSelected(image);
  };

  const convertVariantArr = (arr: Array<Array<Variant>>) => {
    if (!arr) {
      return;
    }
    const result = arr.map((item) => {
      return item[0];
    });

    return result;
  };

  const addToCart = () => {
    const userId = user._id;

    const data = {
      user_id: userId,
      product: {
        _id: product._id,
        name: product.productName,
        quantity: quantitySelected,
        imageUrl: imageSelected,
        color: colorSelected,
        size: sizeSelected,
        price: product.price,
      },
    };

    if (inventoryQuantity > 0 && inventoryQuantity >= data.product.quantity) {
      dispatchThunk(addProductToCart(data));
      commonSuccessToast("Thêm sản phẩm thành cồng");
    }
  };

  // variable
  const imageArr = product.properties?.map((item) => item?.imageUrl);
  const variantArr = convertVariantArr(
    product.properties?.map((item) => item.variants)
  );

  return (
    <>
      <div className="flex flex-col md:items-start md:flex-row gap-6 md:gap-16">
        <div className="rounded overflow-hidden flex-[1]">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiperProductDetailImage"
          >
            {imageArr?.map((item) => (
              <SwiperSlide key={uuidv4()}>
                <ImageItem src={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex-[1]">
          <h3 className="text-lg md:text-2xl font-medium text-gray-800">
            {product.productName}
          </h3>
          <h4 className="py-1 md:py-3 text-md md:text-xl font-semibold text-gray-800">
            {useCurrency(product.price)}
          </h4>

          <div className="py-2">
            <div className="h-[4px] w-[40px] bg-[--secondary-color] rounded"></div>
          </div>

          <div className="py-4 md:py-6">
            <div className="flex flex-col sm:flex-row items-center sm:gap-2 w-full">
              <div className="flex flex-[1] my-1 items-center gap-2 border border-gray-300 rounded px-3 py-2 md:px-4 w-full">
                <h5 className="text-gray-800 font-medium text-base md:text-md">
                  Màu:
                </h5>
                <select
                  onChange={(e) => {
                    setColorSelected(e.target.value);
                    handleChangeImageSelected(e.target.value);
                  }}
                  value={colorSelected}
                  className="selectTagOfProductDetail outline-none flex-[1]"
                  name="color"
                >
                  {product.properties?.map((item) => (
                    <option
                      className="text-gray-800 font-medium text-base md:text-md"
                      key={uuidv4()}
                      value={item.color}
                    >
                      {item.color}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-[1] my-1  w-full items-center gap-2 border border-gray-300 rounded px-3 py-2 md:px-4">
                <h5 className="text-gray-800 font-medium text-base md:text-md">
                  Size:
                </h5>
                <select
                  onChange={(e) => {
                    setSizeSelected(e.target.value);
                  }}
                  value={sizeSelected}
                  className="selectTagOfProductDetail outline-none flex-[1]"
                  name="size"
                >
                  {variantArr?.map((item) => (
                    <option
                      className="text-gray-800 font-medium text-base md:text-md"
                      key={uuidv4()}
                      value={item.size}
                    >
                      {item.size}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>{inventoryQuantity || 0}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;

"use client";

import { getProductsInCart } from "@/redux/reducer/cart.reducer";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MediumTable_SC from "./mediumTable_SC/MediumTable_SC";
import { ControlBar_SC } from "..";




const ProductList_SC = () => {
  const products = useAppSelector((state) => state.cart.products);
  const [productsSelected, setProductsSelected] = useState([])

  const dispatchThunk = useAppDispatch();

  useEffect(() => {
    dispatchThunk(getProductsInCart());
  }, [dispatchThunk]);

  return (
    <>
      <div>
        <h5 className="text-gray-800 font-semibold pb-6">
          Giỏ hàng ({products?.length})
        </h5>
        <div>
          {/* medium table */}
          <MediumTable_SC data={products}/>
        </div>

        <ControlBar_SC/>
      </div>
    </>
  );
};

export default ProductList_SC;

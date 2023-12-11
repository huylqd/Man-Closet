import React from "react";
import ProductListItem from "./ProductListItem";
import { v4 as uuidv4 } from "uuid";
import { OrderItem } from "@/interfaces/order.interface";
import style from "./productList.module.scss";
import { LineSkeleton } from "@/components/skeletons";

type Props = {
  data: OrderItem[];
  isLoading: boolean;
};

const ProductList = ({ data, isLoading }: Props) => {
  return (
    <>
      {isLoading && <LineSkeleton />}
      {!isLoading && (
        <ul className={style.product_list}>
          {data?.map((item) => <ProductListItem data={item} key={uuidv4()} />)}
        </ul>
      )}
    </>
  );
};

export default ProductList;

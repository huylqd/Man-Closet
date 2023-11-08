"use client";

import CartProductCard from "@/components/card/productCard/cart-product-card/CartProductCard";
import { ListView } from "@/components/dataViews";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/hooks";
import { IProductInCart } from "@/interfaces/product";
import { getProductsInCart } from "@/redux/reducer/cart.reducer";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ProductInCart extends IProductInCart {
  totalPrice: number;
  selected: boolean;
}

const testUserId = "65489ed7149281c60f0cefe3";

const CartPage = () => {

  const {user_id} = useParams()

  const productList = useAppSelector((state) => state.cart.products);
  const [products, setProducts] = useState<ProductInCart[]>([]);
  const [productsSelected, setProductsSelected] = useState<ProductInCart[]>([]);
  const [billPrice, setBillPrice] = useState<number[]>([]);

  const dispatchThunk = useAppDispatch();

  useEffect(() => {
    dispatchThunk(getProductsInCart(testUserId));
  }, [dispatchThunk]);

  useEffect(() => {
    const initialProducts = productList.map((item) => {
      return {
        ...item,
        totalPrice: item?.price * item?.quantity,
        selected: true,
      };
    });
    setProducts(initialProducts);
    setProductsSelected(initialProducts);
    setBillPrice(
      initialProducts.map((product) => {
        return product.totalPrice;
      })
    );
  }, [productList]);

  useEffect(() => {
    setProductsSelected(products.filter((product) => product.selected));
  }, [products]);

  useEffect(() => {
    setBillPrice(
      productsSelected.map((product) => {
        return product.totalPrice;
      })
    );
  }, [productsSelected]);

  const totalBillPrice = useCurrency(
    billPrice.length !== 0
      ? billPrice.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        )
      : 0
  );

  const handleUpdateQuantity = (
    product_id: string,
    quantity: number,
    totalPrice: number
  ) => {
    const updateProducts = products.map((product) => {
      if (product._id === product_id && quantity > 0) {
        return { ...product, quantity, totalPrice };
      } else if (product._id === product_id && quantity === 0) {
        return { ...product, quantity, totalPrice, selected: false };
      }
      return product;
    });
    setProducts(updateProducts);
  };

  const handleProductSelect = (product_id: string, isChecked: boolean) => {
    const updateProducts = products.map((product) => {
      if (product._id === product_id) {
        return { ...product, selected: isChecked };
      }
      return product;
    });
    setProducts(updateProducts);
  };

  const handleProductSelectAll = () => {
    const updateProduct = products.map((product) => {
      if (product.quantity > 0) {
        return {
          ...product,
          selected: true,
        };
      }
      return product;
    });
    setProducts(updateProduct);
  };

  const handleProductUnSelect = () => {
    const updateProduct = products.map((product) => {
      return {
        ...product,
        selected: false,
      };
    });

    setProducts(updateProduct);
  };

  return (
    <div className="cart-page">
      <section className="cart-page--wrap flex flex-col-reverse md:flex-row section_container py-10 gap-10">
        <div className="product-list flex-[3]">
          <div className="product-list__header flex items-center justify-between pb-4">
            <h2 className="text-md md:text-xl font-medium">Giỏ Hàng</h2>
          </div>
          <div className="rounded-sm overflow-hidden bg-white dark:bg-zinc-900">
            <div className="flex flex-col md:flex-row gap-2 justify-between p-4">
              <div className="flex flex-col md:flex-row gap-2">
                <Button
                  onClick={() => handleProductSelectAll()}
                  variant={"bordered"}
                >
                  Chọn tất cả
                </Button>
                <Button
                  onClick={() => handleProductUnSelect()}
                  variant={"bordered"}
                >
                  Bỏ chọn tất cả
                </Button>
              </div>
              <Button variant={"danger_border"}>
                Xoá ({productsSelected.length})
              </Button>
            </div>
            <ListView overflowY="auto" className="gap-2 h-[90vh]">
              {products.length === 0 && <div>Không có sản phẩm nào :( </div>}
              {products.map((item) => (
                <div key={uuidv4()}>
                  <CartProductCard
                    {...item}
                    handleChangeSelect={handleProductSelect}
                    handleUpdateQuantity={handleUpdateQuantity}
                  />
                </div>
              ))}
            </ListView>
          </div>
        </div>
        <div className="payment flex-1">
          <h2 className="text-md md:text-xl font-medium pb-4">Tổng Bill</h2>
          <div className="bg-white dark:bg-zinc-900 w-full p-4 rounded-sm flex flex-col gap-4">
            <div className="flex flex-col border-b-[1px] gap-4">
              <span className="text-base md:text-md font-medium">
                Sản phẩm được chọn:
              </span>
              <span className="self-end">{productsSelected.length}</span>
            </div>
            <div className="flex flex-col border-b-[1px] gap-4">
              <span className="text-base md:text-md font-medium">
                Tổng số tiền:
              </span>
              <span className="self-end">{totalBillPrice}</span>
            </div>
            <Button variant={"primary"}>Thanh toán</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;

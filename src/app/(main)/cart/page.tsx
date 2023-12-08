"use client";

import CartProductCard from "@/components/card/productCard/cart-product-card/CartProductCard";
import { ListView } from "@/components/dataViews";
import { PrivateRouter } from "@/components/privateRouter";
import { Button } from "@/components/ui/button";
import { useCurrency, useUserInfo } from "@/hooks";
import { IProductInCart } from "@/interfaces/product";
import { cn } from "@/lib/utils";
import { getProductsInCart } from "@/redux/reducer/cart.reducer";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import instance from "@/services/instance";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ProductInCart extends IProductInCart {
  totalPrice: number;
  selected: boolean;
}

interface ProductInPayment {
  product_id: string;
  price: number;
  property: {
    quantity: number;
    color: string;
    size: string;
    imageUrl:string;
  };
  sub_total: number;
}

const Modal = ({
  isOpen,
  productsSelected,
  totalPrice,
}: {
  isOpen: boolean;
  productsSelected: ProductInCart[];
  totalPrice: number;
}) => {
  const [address, setAddress] = useState<{ shipping_address: string }>({
    shipping_address: "",
  });
  const [products, setProducts] = useState<ProductInPayment[]>([]);
  const [totalPriceOfProducts, setTotalPriceOfProducts] = useState(0);
  const router = useRouter();
  const user = useUserInfo()

  useEffect(() => {
    setAddress({ shipping_address: "HA NOi" });
    setTotalPriceOfProducts(totalPrice);
    const productsData = productsSelected?.map((item) => {
      return {
        product_id: item._id,
        price: item.price,
        property: {
          quantity: item.quantity,
          color: item.color,
          size: item.size,
          imageUrl:item.imageUrl
        },
        sub_total: item.totalPrice,
      };
    });
    setProducts(productsData);
  }, [productsSelected, totalPrice]);
  
  const payment = async () => {
    if(localStorage.getItem('user')){
   
      const body = {
        user_id: `${user._id}`,
        shipping_address: address.shipping_address,
        payment_method: "vnpay",
        items: products,
        total_price: totalPriceOfProducts,
      };
      const data = {
        ...body,
        bankCode: "",
        language: "vn",
      };
      try {
        let response: any;
        if (body.payment_method === "vnpay") {
          response = await instance.post("order/create_payment_url", data);
          router.push(response);
          // console.log("test", response);
        }
        console.log(response);
      } catch (error) {
        console.error("Error", error);
  
        throw error;
      }
    }
    
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChangeAddressValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const addressUpdated: { shipping_address: string } = {
      ...address,
      [name]: value,
    };
    setAddress(addressUpdated);
  };

  return (
    <>
      {/* <div
        className={cn(
          isOpen ? "block" : "hidden",
          "absolute inset-0 bg-zinc-900/30 z-10"
        )}
      ></div> */}
      <div className={cn(isOpen ? "block" : "hidden")}>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              onChange={(e) => handleChangeAddressValue(e)}
              defaultValue={address.shipping_address}
              required
            />
          </div>
          <div>
            <h4>Products</h4>
            <div className="flex flex-wrap gap-3">
              {products?.map((item) => {
                return (
                  <div key={uuidv4()} className="border border-zinc-600 p-4">
                    <p>id: {item.product_id}</p>
                    <p>price: {item.price}</p>
                    <p>color: {item.property.color}</p>
                    <p>quantity: {item.property.quantity}</p>
                    <p>size: {item.property.size}</p>
                    <p>imageUrl: {item.property.imageUrl}</p>
                    <p>total: {item.sub_total}</p>
                  </div>
                );
              })}
            </div>
            <h4>Total Bill: {useCurrency(totalPriceOfProducts)}</h4>
          </div>
          <div>
            <Button onClick={() => payment()} type="submit" variant={"primary"}>
              Đặt hàng
            </Button>
            <Button type="button" variant={"danger_border"}>
              Huỷ
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};


// =====================================================


const CartPage = () => {
  const router = useRouter()

  const [isOpenModal, setIsOpenModal] = useState(false);

  const productList = useAppSelector((state) => state.cart.products);
  const [products, setProducts] = useState<ProductInCart[]>([]);
  const [productsSelected, setProductsSelected] = useState<ProductInCart[]>([]);
  const [billPrice, setBillPrice] = useState<number[]>([]);

  const dispatchThunk = useAppDispatch();

  useEffect(() => {
    dispatchThunk(getProductsInCart());
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

  const totalBillPriceSendToModal =
    billPrice.length !== 0
      ? billPrice.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        )
      : 0;

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

  const handleChangeModal = (type: string) => {
    if (type === "open") {
      setIsOpenModal(true);
    } else if (type === "close") {
      setIsOpenModal(false);
    }
  };

  return (
    <>
    <PrivateRouter allowedRoles={['member']}>
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
              <Button
                onClick={() => handleChangeModal("open")}
                variant={"primary"}
              >
                Thanh toán
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Modal
        isOpen={isOpenModal}
        productsSelected={productsSelected}
        totalPrice={totalBillPriceSendToModal}
      />
    </PrivateRouter>
   
    </>
  );
};

export default CartPage;

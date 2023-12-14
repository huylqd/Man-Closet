"use client";

import Modal from "@/components/modal/Modal";
import {
  useCurrency,
  // useInventoryOfProduct,
  useProductQuantity,
  useUserInfo,
} from "@/hooks";
import { IProductInCart } from "@/interfaces/product";
import { deleteProductInCartAsync } from "@/redux/reducer/cart.reducer";
import { getProductState } from "@/redux/reducer/product.reducer";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ModalDelete from "./ModalDelete";
import { toast } from "react-toastify";

interface ProductInCart extends IProductInCart {
  totalPrice: number;
  selected: boolean;
}

type Props = {
  data: ProductInCart;
  handleChangeSelect: (product_id: string, isChecked: boolean) => void;
  handleUpdateQuantity: (
    product_id: string,
    quantity: number,
    totalPrice: number
  ) => void;
};

const MediumTableItem_SC = ({
  data,
  handleChangeSelect,
  handleUpdateQuantity,
}: Props) => {
  const {
    _id,
    color,
    imageUrl,
    name,
    price,
    quantity,
    size,
    selected,
    totalPrice,
    addedAt,
    updatedAt,
  } = data;

  const {
    amount,
    checkAmountOnBlur,
    checkOnChangeInputAmount,
    decrementAmount,
    incrementAmount,
    inventory,
  } = useProductQuantity({ _id, color, size, iniTialQuantity: quantity });

  const { _id: user_id } = useUserInfo();
  const dispatch = useAppDispatch();
  const [isOpenModalDelete, setIsOpenDeleteModal] = useState(false);
  const handleCloseDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };
  const handleDelete = () => {
    const product = [data];
    try {
      dispatch(deleteProductInCartAsync({user_id: user_id, data: product}))
      handleCloseDeleteModal()
    } catch (error:any) {
      throw error
    }
  };

  const formattedTotalPrice = useCurrency(totalPrice);

  const handleChangeQuantity = (calculation: string) => {
    if (calculation === "plus") {
      incrementAmount();
      const newQuantity = +amount + 1;
      const newTotalPrice = price * newQuantity;
      handleUpdateQuantity(_id, newQuantity, newTotalPrice);
    }

    if (calculation === "minus") {
      decrementAmount();
      if (quantity === 0) {
        const newQuantity = 0;
        const newTotalPrice = 0;
        handleUpdateQuantity(_id, newQuantity, newTotalPrice);
      } else {
        const newQuantity = +amount - 1;
        const newTotalPrice = price * newQuantity;
        handleUpdateQuantity(_id, newQuantity, newTotalPrice);
      }
    }
  };

  const handelChangeAmount = (value: string) => {
    handleUpdateQuantity(_id, +value, +value * price);
    checkOnChangeInputAmount(value);
  };

  const handleCheckBlurAmount = () => {
    checkAmountOnBlur();
    handleUpdateQuantity(_id, 1, 1 * price);
  };

  const handleChangeChecked = (id: string, checked: boolean) => {
    handleChangeSelect(id, !checked);
  };

  return (
    <>
      <li className="flex items-center py-3 border-b gap-3 cursor-pointer">
        <div className="flex-[1] grid place-items-center">
          <input
            type="checkbox"
            checked={selected}
            disabled={quantity > 0 ? false : true}
            onChange={() => handleChangeChecked(_id, selected)}
          />
        </div>

        <article className="flex-[5] flex items-center gap-3">
          <figure className="relative w-[60px] h-[60px] rounded overflow-hidden">
            <Image
              alt={name}
              src={imageUrl}
              fill
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
              }}
            />
          </figure>
          <div>
            <h5 className="flex-[1] font-medium text-gray-800">{name}</h5>
            <p>
              {color ? `${color}, ` : ""}
              {size ?? `${size}`}
            </p>
          </div>
        </article>
        <p className="flex-[2] text-center font-medium text-gray-800">
          {useCurrency(price)}
        </p>
        <div className="flex-[2] flex items-center justify-center">
          <div className="h-[60px] flex items-center gap-1">
            <input
              type="text"
              className="w-[60px] text-center h-full rounded focus:outline-none"
              inputMode="numeric"
              value={amount}
              onBlur={() => handleCheckBlurAmount()}
              onChange={(e) => handelChangeAmount(e.target.value)}
            />
            <div className="flex flex-col">
              <button
                onClick={() => handleChangeQuantity("plus")}
                className="p-1 grid place-items-center"
              >
                <Plus className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleChangeQuantity("minus")}
                className="p-1 grid place-items-center"
              >
                <Minus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <p className="flex-[2] text-center font-medium text-[--secondary-color]">
          {useCurrency(price * +amount)}
        </p>
        <button
          className="flex-[1] text-center"
          onClick={() => setIsOpenDeleteModal(true)}
        >
          <X className="w-5 h-5" />
        </button>
      </li>

      {/* modal */}
      <Modal isOpen={isOpenModalDelete} handleClose={handleCloseDeleteModal}>
        <ModalDelete onClose={handleCloseDeleteModal} onDelete={handleDelete} />
      </Modal>
    </>
  );
};

export default MediumTableItem_SC;

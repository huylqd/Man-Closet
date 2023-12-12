"use client";

import { getProductState } from "@/redux/reducer/product.reducer";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

type Params = {
  _id: string;
  color: string;
  size: string;
  iniTialQuantity: number;
};

const useProductQuantity = ({ _id, color, size, iniTialQuantity }: Params) => {
  const product = useAppSelector((state) => state.product.product);
  const [inventory, setInventory] = useState(0);
  const [amount, setAmount] = useState<string>(iniTialQuantity?.toString());

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductState(_id));
  }, [dispatch, _id]);

  useEffect(() => {
    setInventory(
      product.properties?.[
        product.properties?.findIndex(
          (item) => item.color.toLowerCase() === color.toLowerCase()
        )
      ]?.variants?.[
        product.properties?.[
          product.properties?.findIndex(
            (item) => item.color.toLowerCase() === color.toLowerCase()
          )
        ]?.variants.findIndex(
          (item) => item.size.toLowerCase() === size.toLowerCase()
        )
      ]?.quantity
    );
  }, [product, size, color]);

  //  logic
  const incrementAmount = () => {
    setAmount((+amount + 1).toString());
  };

  const decrementAmount = () => {
    if (amount === "1") {
      return;
    }
    setAmount((+amount - 1).toString());
  };

  const checkAmountOnBlur = () => {
    if (amount === "") {
      setAmount("1");
    } else if (+amount > inventory) {
      setAmount((curr) => curr);
    }
  };

  const checkOnChangeInputAmount = (value: string) => {
    const incomeValue = value;
    if (incomeValue.match(/^[0-9]*$/)) {
      if (+incomeValue > inventory) {
        setAmount(inventory.toString());
      } else {
        setAmount(incomeValue);
      }
    }
  };

  return {
    inventory,
    incrementAmount,
    decrementAmount,
    checkAmountOnBlur,
    checkOnChangeInputAmount,
    amount,
  };
};

export default useProductQuantity;

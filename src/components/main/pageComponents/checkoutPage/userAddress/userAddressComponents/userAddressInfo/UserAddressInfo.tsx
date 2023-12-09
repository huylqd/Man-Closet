"use client";

import Modal from "@/components/modal/Modal";
import { useLocalStorage, useUserInfo } from "@/hooks";
import { getAddressByUserIdState } from "@/redux/reducer/user.reducer";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { TAddress } from "@/services/address.services";
import React, { useEffect, useState } from "react";
import SwitchModal from "../customModal/SwitchModal";
import { setBillAddress } from "@/redux/reducer/bill.reducer";

const UserAddressInfo = () => {
  const billAddress = useAppSelector(state =>state.bill.address)
  const { _id, name } = useUserInfo();
  const addressState = useAppSelector((state) => state.user.address);

  const [isSwitchAddress, setIsSwitchAddress] = useState(false);

  const {} = useLocalStorage("address")

  const dispatchThunk = useAppDispatch();

  useEffect(() => {
    dispatchThunk(getAddressByUserIdState(_id));
  }, [dispatchThunk, _id]);

  useEffect(() => {
    dispatchThunk(setBillAddress(addressState.find((item) => item.isDefault) as TAddress))
  }, [dispatchThunk,addressState]);

  const handleCloseModal = () => {
    setIsSwitchAddress(false);
  };

  return (
    <>
      <article className="pb-4">
        <p>{name}</p>
        <p>(+84) 097482950609</p>
        <p>
          {billAddress?.detailAddress ? `${billAddress.detailAddress}, ` : ""}
          {billAddress?.wards ? `${billAddress.wards}, ` : ""}
          {billAddress?.district ? `${billAddress.district}, ` : ""}
          {billAddress?.city ? `${billAddress.city}` : ""}
        </p>
      </article>

      <div className="flex flex-col gap-1.5">
        <button
          onClick={() => setIsSwitchAddress(true)}
          className="text-blue-500 hover:text-blue-300 w-fit"
        >
          Thay đổi (Địa chỉ có sẵn)
        </button>
        
      </div>

      <Modal isOpen={isSwitchAddress} handleClose={handleCloseModal}>
        <SwitchModal
          addressList={addressState}
          onClose={handleCloseModal}
          addressIdSelected={billAddress?._id as string}
        />
      </Modal>
    </>
  );
};

export default UserAddressInfo;

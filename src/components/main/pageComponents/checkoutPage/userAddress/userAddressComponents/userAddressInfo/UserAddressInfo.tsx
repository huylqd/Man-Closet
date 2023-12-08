"use client";

import Modal from "@/components/modal/Modal";
import { useUserInfo } from "@/hooks";
import { getAddressByUserIdState } from "@/redux/reducer/user.reducer";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { TAddress } from "@/services/address.services";
import React, { useEffect, useState } from "react";
import SwitchModal from "../customModal/SwitchModal";

const UserAddressInfo = () => {
  const { _id, name } = useUserInfo();
  const [address, setAddress] = useState({} as TAddress);
  const addressState = useAppSelector((state) => state.user.address);

  const [isSwitchAddress, setIsSwitchAddress] = useState(false);
  const [isNewAddress, setIsNewAddress] = useState(false);

  const dispatchThunk = useAppDispatch();

  useEffect(() => {
    dispatchThunk(getAddressByUserIdState(_id));
  }, [dispatchThunk, _id]);

  useEffect(() => {
    setAddress(addressState.find((item) => item.isDefault) as TAddress);
  }, [addressState]);

  const handleCloseModal = () => {
    setIsNewAddress(false);
    setIsSwitchAddress(false);
  };

  return (
    <>
      <article className="pb-4">
        <p>{name}</p>
        <p>(+84) 097482950609</p>
        <p>
          {address?.detailAddress ? `${address?.detailAddress}, ` : ""}
          {address?.wards ? `${address.wards}, ` : ""}
          {address?.district ? `${address.district}, ` : ""}
          {address?.city ? `${address.city}` : ""}
        </p>
      </article>

      <div className="flex flex-col gap-1.5">
        <button
          onClick={() => setIsSwitchAddress(true)}
          className="text-blue-500 hover:text-blue-300 w-fit"
        >
          Thay đổi (Địa chỉ có sẵn)
        </button>
        <button className="text-blue-500 hover:text-blue-300 w-fit">
          Đặt hộ (Địa chỉ không có sẵn)
        </button>
      </div>

      <Modal isOpen={isSwitchAddress} handleClose={handleCloseModal}>
        <SwitchModal
          setAddress={setAddress}
          addressList={addressState}
          onClose={handleCloseModal}
          addressIdSelected={address?._id as string}
        />
      </Modal>
    </>
  );
};

export default UserAddressInfo;

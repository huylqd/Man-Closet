"use client";

import Modal from "@/components/modal/Modal";
import {  useUserInfo } from "@/hooks";
import { getAddressByUserIdState } from "@/redux/reducer/user.reducer";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect, useMemo, useState } from "react";
import SwitchModal from "../customModal/SwitchModal";

const UserAddressInfo = () => {
  const { _id, name } = useUserInfo();
  const userAddressList = useAppSelector((state) => state.user.address);
  
  const [isSwitchAddress, setIsSwitchAddress] = useState(false);

  const dispatchThunk = useAppDispatch();

  useEffect(() => {
    dispatchThunk(getAddressByUserIdState(_id));
  }, [dispatchThunk, _id]);

  const selectedAddress = useMemo(() => userAddressList.find((item) => item.isDefault === true), [userAddressList])

  const handleCloseModal = () => {
    setIsSwitchAddress(false);
  };

  return (
    <>
      <article className="pb-4">
        <p>{name}</p>
        <p>(+84) 097482950609</p>
        <p>
          {selectedAddress?.detailAddress ? `${selectedAddress.detailAddress}, ` : ""}
          {selectedAddress?.wards ? `${selectedAddress.wards}, ` : ""}
          {selectedAddress?.district ? `${selectedAddress.district}, ` : ""}
          {selectedAddress?.city ? `${selectedAddress.city}` : ""}
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
          onClose={handleCloseModal}
        />
      </Modal>
    </>
  );
};

export default UserAddressInfo;

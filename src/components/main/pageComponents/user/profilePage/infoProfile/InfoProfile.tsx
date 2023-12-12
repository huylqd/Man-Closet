"use client";

import Modal from "@/components/modal/Modal";
import { PenSquare } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  ModalEditAvatar,
  ModalEditEmail,
  ModalEditName,
  ModalEditPassword,
} from "./infoProductModals";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  getUserByIdState,
  updateUserInfoState,
} from "@/redux/reducer/user.reducer";
import { IUser } from "@/interfaces/user";
import { useRouter } from "next/navigation";
import { useUserInfo } from "@/hooks";

const InfoProfile = () => {
  const router = useRouter();
  const {_id} = useUserInfo()
  const user = useAppSelector((state) => state.user.user);
  // modal state
  const [isEditName, setIsEditName] = useState(false);
  const [isEditEmail, setIsEditEmail] = useState(false);
  const [isEditAvatar, setIsEditAvatar] = useState(false);
  const [isEditPassword, setIsEditPassword] = useState(false);

  const dispatchThunk = useAppDispatch();

  useEffect(() => {
    dispatchThunk(getUserByIdState(_id));
  }, [dispatchThunk, _id]);

  const handleUpdateUserInfo = (data: { [key: string]: number | string }) => {
    try {
      const value = {
        id: user._id as string,
        data: data,
      };

      dispatchThunk(updateUserInfoState(value));
    } catch (error) {}
  };

  const handleCloseModal = () => {
    setIsEditName(false);
    setIsEditEmail(false);
    setIsEditAvatar(false);
    setIsEditPassword(false);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse gap-2">
        {/* avatar */}
        <div className="flex justify-center items-center md:items-start">
          <div className="relative md:w-[160px] md:h-[160px] w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-zinc-800">
            <Image
              src={
                "https://images.unsplash.com/profile-fb-1697722741-189fcdfa0a62.jpg?bg=fff&crop=faces&dpr=2&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              }
              alt="avatar"
              width={500}
              height={500}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
            <label
              htmlFor="changeAvatar"
              className="absolute bottom-0 left-0 right-0 bg-zinc-700/60 py-1 md:py-2 cursor-pointer"
            >
              <p className="text-white text-center">Sửa</p>
            </label>
          </div>
          <input type="file" id="changeAvatar" className="hidden" />
        </div>

        <div className="flex-[1]">
          {/* name */}
          <div className="pb-4">
            <label className="text-gray-600 uppercase font-normal pb-2">
              Tên người dùng
            </label>
            <div
              className="flex w-full md:w-fit"
              onClick={() => setIsEditName(true)}
            >
              <h5 className="flex-[1] text-gray-800 font-normal border-b pr-4 md:pr-10">
                {user.name}
              </h5>
              <span className="text-blue-500 hover:text-blue-300 transition-all cursor-pointer">
                <PenSquare className="w-5 h-5" />
              </span>
            </div>
          </div>
          {/* email */}
          <div className="pb-4">
            <label className="text-gray-600 uppercase font-normal pb-2">
              Email
            </label>
            <div
              className="flex w-full md:w-fit"
              onClick={() => setIsEditEmail(true)}
            >
              <h5 className="flex-[1] text-gray-800  border-b pr-4 md:pr-10">
                {user.email}
              </h5>
              <span className=" text-blue-500 hover:text-blue-300 transition-all cursor-pointer">
                <PenSquare className="w-5 h-5" />
              </span>
            </div>
          </div>
          {/* password */}
          <div className="pb-4">
            <label className="text-gray-600 uppercase text-sm font-normal pb-2">
              Mật khẩu
            </label>
            <div
              className="flex w-full md:w-fit"
              onClick={() => setIsEditPassword(true)}
            >
              <h5 className="flex-[1] text-gray-800 border-b pr-4 md:pr-10">
                ****************
              </h5>
              <span className="text-blue-500 hover:text-blue-300 transition-all cursor-pointer">
                <PenSquare className="w-5 h-5" />
              </span>
            </div>
          </div>
          {/* address */}
          <div className="pb-4">
            <p
              onClick={() => router.push("/user/address")}
              className="text-blue-500 text-md hover:text-blue-300 transitions-all w-fit cursor-pointer"
            >
              Cài đặt địa chỉ
            </p>
          </div>
        </div>
      </div>

      {/* modals */}

      {/* modal edit name */}
      <Modal isOpen={isEditName} handleClose={handleCloseModal}>
        <ModalEditName
          onClose={handleCloseModal}
          initialValue={user.name}
          onUpdate={handleUpdateUserInfo}
        />
      </Modal>
      {/* modal edit email */}
      <Modal isOpen={isEditEmail} handleClose={handleCloseModal}>
        <ModalEditEmail
          onClose={handleCloseModal}
          onUpdate={handleUpdateUserInfo}
          initialValue={user.password}
        />
      </Modal>
      {/* modal edit avatar */}
      <Modal isOpen={isEditAvatar} handleClose={handleCloseModal}>
        <ModalEditAvatar />
      </Modal>
      {/* modal edit password */}
      <Modal isOpen={isEditPassword} handleClose={handleCloseModal}>
        <ModalEditPassword
          onUpdate={handleUpdateUserInfo}
          onClose={handleCloseModal}
          initialValue={user.password}
        />
      </Modal>
    </>
  );
};

export default InfoProfile;

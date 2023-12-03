"use client";

import Modal from "@/components/modal/Modal";
import ModalUpdateAddress from "../modalUpdateAddress/ModalUpdateAddress";
import { useState } from "react";

const AddressList = () => {
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleCloseModal = () => {
    setOpenUpdateModal(false);
    setOpenConfirmModal(false);
    setOpenDeleteModal(false);
  };

  const handleOpenModal = () => {};

  const handleUpdate = () => {};

  return (
    <>
      <div className="pt-3 sm:pt-4">
        <ul>
          <li>
            <div className="flex flex-col gap-2 sm:flex-row items-center justify-between">
              <div className="flex flex-col gap-1 flex-[1] sm:flex-[3] w-full">
                <div className="flex items-center gap-2">
                  <h4 className="text-gray-800 font-medium text-md sm:text-lg">
                    Tuấn Dương
                  </h4>
                  <div className="w-[1px] h-[24px] bg-gray-400"></div>
                  <h5 className="text-sm sm:text-base text-gray-600">
                    (+84) 123456789
                  </h5>
                </div>
                <div>
                  <h5 className="text-sm sm:text-base text-gray-600">
                    Toà HH1A
                  </h5>
                </div>
                <div>
                  <h5 className="text-sm sm:text-base text-gray-600">
                    Phường Hoàng Liệt, Quận Hoàng Mai, Hà Nội
                  </h5>
                </div>
                <div className="pt-1">
                  <span className="text-sm md:text-md border border-[--secondary-color] rounded text-[--secondary-color] py-1 px-2">
                    Mặc định
                  </span>
                </div>
              </div>

              <div className="flex pt-4 sm:pt-0 flex-[1] flex-col w-full items-center justify-center sm:justify-start sm:items-end gap-4 sm:gap-2">
                <div className="flex gap-2 flex-row w-full">
                  <button
                    onClick={() => setOpenUpdateModal(true)}
                    className="flex-[1] w-full text-blue-500 focus:outline-none text-sm sm:text-base hover:text-blue-300 transition-all"
                  >
                    Cập nhật
                  </button>
                  <button
                    onClick={() => setOpenDeleteModal(true)}
                    className="w-full flex-[1] text-rose-500 hover:text-rose-300 focus:outline-none text-sm sm:text-base transition-all"
                  >
                    Xoá
                  </button>
                </div>
                <button
                  onClick={() => setOpenConfirmModal(true)}
                  className="border w-full rounded disable:text-gray-500 disable:border-gray-500 px-2 py-1 text-gray-800 border-gray-800 text-sm md:text-base  transition-all"
                >
                  Thiết lập mặc định
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <Modal isOpen={openUpdateModal} handleClose={handleCloseModal}>
        <ModalUpdateAddress />
      </Modal>
    </>
  );
};

export default AddressList;

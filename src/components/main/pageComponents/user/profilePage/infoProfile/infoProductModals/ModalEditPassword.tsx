import { Button } from "@/components/ui/button";
import React from "react";

const ModalEditPassword = () => {
  return (
    <>
      <div className="bg-white p-3 rounded overflow-hidden">
        <div className="pb-6">
          <label htmlFor="oldPassword" className="text-sm text-gray-600">
            Mật khẩu đang sử dụng
          </label>
          <input
            type="text"
            // value={name}
            // onChange={(e) => handleChangeValue(e.target.value)}
            id="oldPassword"
            className="w-full text-gray-800 pt-1 text-md font-normal focus:outline-none border-b"
          />
        </div>
        <div className="pb-6">
          <label htmlFor="newPassword" className="text-sm text-gray-600">
            Mật khẩu mới
          </label>
          <input
            type="text"
            // value={name}
            // onChange={(e) => handleChangeValue(e.target.value)}
            id="newPassword"
            className="w-full text-gray-800 pt-1 text-md font-normal focus:outline-none border-b"
          />
        </div>

        <div className="pb-6">
          <label htmlFor="confirmNewPassword" className="text-sm text-gray-600">
            Xác nhận mật khẩu mới
          </label>
          <input
            type="text"
            // value={name}
            // onChange={(e) => handleChangeValue(e.target.value)}
            id="confirmNewPassword"
            className="w-full text-gray-800 pt-1 text-md font-normal focus:outline-none border-b"
          />
        </div>
        

        <div className="flex items-center gap-3 pt-6">
          <Button variant={"primary"} className="flex-[1]">
            Thay đổi
          </Button>
          <Button
            // onClick={() => onClose()}
            variant={"bordered"}
            className="flex-[1]"
          >
            Huỷ
          </Button>
        </div>
      </div>
    </>
  );
};

export default ModalEditPassword;

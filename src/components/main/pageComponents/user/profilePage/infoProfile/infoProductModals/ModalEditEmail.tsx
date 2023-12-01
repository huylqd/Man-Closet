"use client";

import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const ModalEditEmail = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="bg-white p-3 rounded overflow-hidden">
        <div className="pb-6">
          <label htmlFor="oldEmail" className="text-sm text-gray-600">
            Email đang sử dụng
          </label>
          <input
            type="text"
            // value={name}
            // onChange={(e) => handleChangeValue(e.target.value)}
            id="oldEmail"
            className="w-full text-gray-800 pt-1 text-md font-normal focus:outline-none border-b"
          />
        </div>
        <div className="pb-6">
          <label htmlFor="newEmail" className="text-sm text-gray-600">
            Email mới
          </label>
          <input
            type="text"
            // value={name}
            // onChange={(e) => handleChangeValue(e.target.value)}
            id="newEmail"
            className="w-full text-gray-800 pt-1 text-md font-normal focus:outline-none border-b"
          />
        </div>
        <div className="pb-6">
          <label
            htmlFor="passwordToChangeEmail"
            className="text-sm text-gray-600"
          >
            Mật khẩu
          </label>
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              // value={name}
              // onChange={(e) => handleChangeValue(e.target.value)}
              id="passwordToChangeEmail"
              className="w-full text-gray-800 flex-[1] pt-1 text-md font-normal focus:outline-none border-b"
            />
            <button>
              {showPassword ? (
                <Eye
                  className="w-5 h-5"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <EyeOff
                  className="w-5 h-5"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </button>
          </div>
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

export default ModalEditEmail;

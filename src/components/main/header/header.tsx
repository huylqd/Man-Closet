"use client";

import { AlignLeft, Search, ShoppingBag, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import Modal from "@/components/modal/Modal";
import SearchModal from "./SearchModal";
import MenuModal from "../navigation/MenuModal";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const closeSearchModal = () => {
    setIsSearch(false);
  };

  // menu mobile
  // const [isOpenMenuMb, setIsOpenMenuMb] = useState(false)
  // const handleOpenMenuMobile = (value: boolean) => {
  //   setIsOpenMenuMb(value)
  // }

  const user = JSON.parse(localStorage.getItem('user') as string)
   let user_id = '';
   if(user){
    user_id = user._id
   }
  
 
  
  
  
  // console.log(isOpenMenuMb)
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleOpenMenu = (value: boolean) => {
    setIsOpenMenu(value);
  };

  const cartLength = 1;

  return (
    <>
      <header className="divide-y divide-zinc-800 dark:divide-slate-50/10">
        <div className="bg-white text-zinc-800 dark:bg-zinc-900 dark:text-white py-4 md:py-6">
          <div className="section_container flex gap-y-4 md:gap-y-0 flex-row md:items-center justify-between">
            <div className="flex flex-[1] justify-between items-center">
              <div className="flex items-center mr-4">
                <button onClick={() => handleOpenMenu(true)}>
                  <AlignLeft className="w-5 h-5 cursor-pointer" />
                </button>
              </div>
            </div>

            <div className="flex-[2] flex items-center justify-center">
              <Link href={"/"}>
                <Logo />
              </Link>
            </div>
            <div className="flex justify-end flex-[1] items-center gap-x-4">
              <div
                onClick={() => setIsSearch(true)}
                className="group w-8 h-8 flex items-center justify-center overflow-hidden transition cursor-pointer p-1"
              >
                <Search className="w-5 h-5 transition group-hover:text-gray-600" />
              </div>
              <div className="hidden md:block">
                <Link
                  href={`/users/${user_id}/cart`}
                  className="relative group w-8 h-8 flex items-center justify-center overflow-hidden transition cursor-pointer p-1"
                >
                  {cartLength > 0 && (
                    <div
                      className="absolute w-[8px] h-[8px] rounded-full bg-red-500 top-1 right-1"
                      style={{
                        boxShadow: "0px 0px 1px 3px rgba(255, 0, 0, 0.2)",
                      }}
                    ></div>
                  )}
                  <ShoppingBag className="w-5 h-5 group-hover:text-gray-600 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* menu */}
      <MenuModal isOpen={isOpenMenu} onClose={handleOpenMenu} />

      {/* modal */}
      <Modal isOpen={isSearch} handleClose={closeSearchModal}>
        <SearchModal onClose={closeSearchModal} />
      </Modal>
    </>
  );
};

export default Header;

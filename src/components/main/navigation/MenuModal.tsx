"use client";

import { gc_4 } from "@/assets/media/images/home_grid_category_banner";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import "./menuModal.scss";
import {
  ChevronRight,
  Contact,
  Heart,
  Home,
  LogOut,
  Shirt,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { commonSuccessToast } from "@/utils/notify";

interface MenuModalProps {
  onClose: (value: boolean) => void;
  isOpen: boolean;
}

const MenuModal = ({ onClose, isOpen }: MenuModalProps) => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  let user_id = "";
  let userName = "";
  let userEmail = "";
  if (user) {
    user_id = user._id;
    userName = user.name;
    userEmail = user.email;
  }
  const menuModalData = [
    {
      icon: <Home className="w-5 h-5" />,
      href: "home",
      name: "Trang chủ",
    },
    {
      icon: <Shirt className="w-5 h-5" />,
      href: "shop",
      name: "Sản phẩm",
    },
    {
      icon: <Contact className="w-5 h-5" />,
      href: "contact",
      name: "Liên hệ",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      href: `users/${user_id}/wishlist`,
      name: "Danh sách yêu thích",
    },
  ];

  const router = useRouter();
  const pathName = usePathname();
  const itemSelected = pathName.split("/")[pathName.split("/").length - 1];

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    document.body.style.marginRight = `${
      window.innerWidth - document.documentElement.clientWidth
    }px`;
    document.body.style.overflow = "hidden";
    return (): void => {
      document.body.style.overflow = "unset";
      document.body.style.marginRight = "0px";
    };
  }, [isOpen]);
  const logout = () => {
    localStorage.clear();
    commonSuccessToast("Đăng xuất thành công");
    router.push("/auth");
  };

  return (
    <>
      <div
        onClick={() => onClose(false)}
        className={cn(
          "blur_layer inset-0 fixed z-30",
          isOpen ? "block" : "hidden"
        )}
      ></div>

      <div
        className={cn(
          "mb_menu fixed z-50 top-0 left-0 bg-white rounded-r h-screen w-[80%] md:w-[46%] lg:w-[360px] p-3 md:p-5  block",
          isOpen ? "open" : "close"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between">
            <Logo />
            <button onClick={() => onClose(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="pt-14">
            <ul className="flex flex-col gap-2">
              {menuModalData.map((item) => (
                <li key={uuidv4()}>
                  <Link
                    onClick={() => onClose(false)}
                    href={`/${item.href === "home" ? "" : item.href}`}
                    className={cn(
                      "flex items-center justify-between text-gray-600 hover:text-[#BE7178] group transition-all p-[6px] m-1",
                      itemSelected === (item.href === "home" ? "" : item.href)
                        ? "text-[#BE7178]"
                        : ""
                    )}
                  >
                    <h4 className="group-hover:translate-x-2 transition-all">
                      {item.name}
                    </h4>
                    <span>
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            {user ? (
              <div className="flex items-center gap-2 md:gap-3">
                <div className="relative w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full overflow-hidden border border-zinc-800">
                  {user?.role == "admin" ? (
                    <Image
                      onClick={() => {
                        router.push("/admin"), onClose(false);
                      }}
                      src={gc_4}
                      alt="avatar"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <Image
                      onClick={() => {
                        router.push("/user/dashboard");
                        onClose(false);
                      }}
                      src={gc_4}
                      alt="avatar"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-md text-gray-800 font-medium">
                    {userName}
                  </span>
                  <span className="text-sm text-gray-600 font-normal">
                    {userEmail}
                  </span>
                </div>
                <button
                  onClick={() => logout()}
                  className="bg-zinc-800 rounded overflow-hidden flex items-center justify-center w-[30px] h-[30px] md:w-[50px] md:h-[50px] ml-auto hover:bg-zinc-600 transition-all"
                >
                  <LogOut className="w-4 h-4 text-white" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => router.push("/auth")}
                className="bg-zinc-800 text-white w-full py-1 md:py-3 rounded"
              >
                Đăng nhập
              </button>
            )}

            {/* sau khi dang nhap thanh cong thi hien cai o duoi */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuModal;

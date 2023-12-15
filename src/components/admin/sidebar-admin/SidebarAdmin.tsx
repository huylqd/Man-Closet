"use client";
import {
  BarChart3,
  Boxes,
  MenuIcon,
  Package,
  Settings,
  Shirt,
  UserCircle,
  LogOut,
  X,
  Home,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Logo } from "@/components/Logo";
import { v4 as uuidv4 } from "uuid";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import SidebarAdminItemLink from "./SidebarAdminItemLink";
import { useUserInfo } from "@/hooks";

const data = [
  {
    href: "statistics",
    icon: <BarChart3 />,
    name: "Thống kê",
  },
  {
    href: "orders",
    icon: <Package className="w-6 h-6" />,
    name: "Đơn hàng",
  },
  {
    href: "products",
    icon: <Shirt className="w-6 h-6" />,
    name: "Sản phẩm",
  },
  {
    href: "categories",
    icon: <Boxes className="w-6 h-6" />,
    name: "Danh mục sản phẩm",
  },
  {
    href: "users",
    icon: <UserCircle className="w-6 h-6" />,
    name: "Người dùng",
  },
  {
    href: "settings",
    icon: <Settings className="w-6 h-6" />,
    name: "Cài đặt",
  },
  {
    href: "home",
    icon: <Home className="w-6 h-6" />,
    name: "Trở về trang chủ",
  },
];

const SidebarAdmin = () => {
  const pathName = usePathname();
  const [activeLink, setActiveLink] = useState("");
  const {name, avatar} = useUserInfo()
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  useEffect(() => {
    setActiveLink(pathName.split("/")[pathName.split("/").length - 1]);
  }, [pathName]);

  const toggleSidebar = () => {
    setIsOpenSidebar((curr) => !curr);
  };

  return (
    <>
      {/* header sidebar hien khi width:768px */}
      <div className="header_sidebar bg-white dark:bg-zinc-900 flex md:hidden items-center justify-between px-6 py-3 shadow">
        <span>
          <Logo />
        </span>
        <span
          className="link_icon flex items-center justify-center"
          id="header_sidebar_menu_btn"
        >
          <MenuIcon onClick={() => toggleSidebar()} className="w-5 h-5" />
        </span>
      </div>

      <label
        onClick={() => setIsOpenSidebar(false)}
        className={cn(
          "sidebar_menu_layer opacity-0 fixed inset-0 z-[-1] w-screen h-screen block md:hidden",
          isOpenSidebar ? "opacity-100 z-30" : "opacity-0 -z-[1]"
        )}
      ></label>

      {/* default sidebar */}
      <aside
        className={cn(
          "sidebar bg-zinc-50 dark:bg-zinc-900 z-40",
          isOpenSidebar ? "open" : ""
        )}
      >
        <div className="logo_details hidden md:flex">
          <span className="sidebar_logo_fwb">
            <Logo />
          </span>
          <span
            className="link_icon flex items-center justify-center"
            id="sidebar_menu_btn"
          >
            <MenuIcon
              onClick={() => toggleSidebar()}
              className="w-5 h-5 text-zinc-800 dark:text-stone-50"
            />
          </span>
        </div>

        <div className="flex md:hidden items-center justify-between">
          <Logo />
          <span>
            <X onClick={() => toggleSidebar()} className="w-5 h-5" />
          </span>
        </div>

        <ul className="nav-list relative">
          {data.map((item) => {
            return (
              <SidebarAdminItemLink
                key={uuidv4()}
                activeLink={activeLink}
                item={item}
                setIsOpenSidebar={setIsOpenSidebar}
              />
            );
          })}
        </ul>
        <div className="profile">
          <div className="profile_details flex gap-2">
            <div className="h-[60px] min-w-[50px] flex justify-center items-center">
              <div className="rounded-full relative overflow-hidden w-[34px] h-[34px]">
                <Image
                  className="object-cover"
                  layout="fill"
                  style={{ objectFit: "cover" }}
                  alt="avatar-img"
                  src={avatar}
                />
              </div>
            </div>
            <div className="profile_content">
              <div className="name">{name}</div>
              <div className="designation">Admin</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarAdmin;

"use client";
import {
  BarChart3,
  Boxes,
  MenuIcon,
  Package,
  Settings,
  Shirt,
  UserCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Logo } from "@/components/Logo";
import { v4 as uuidv4 } from "uuid";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
];

const SidebarAdmin = () => {
  const pathName = usePathname();
  const [activeLink, setActiveLink] = useState("");

  console.log(pathName.split("/"))

  useEffect(()=> {
    setActiveLink(pathName.split("/")[pathName.split("/").length - 1])
  },[pathName])

  window.onload = function () {
    const sidebar = document.querySelector(".sidebar") as Element;
    
    const sidebarMenuBtn = document.querySelector(
      "#sidebar_menu_btn"
    ) as HTMLElement;

    const headerSidebarMenuBtn = document.querySelector(
      "#header_sidebar_menu_btn"
    ) as HTMLElement;

    const layer = document.querySelector(".sidebar_menu_layer") as HTMLElement;

    const linkItems = document.querySelectorAll(".link_item");

    linkItems.forEach(function (item) {
      item.addEventListener("click", function () {
        sidebar.classList.remove("open");
        menuBtnChange();
      });
    });

    sidebarMenuBtn.addEventListener("click", function () {
      sidebar.classList.toggle("open");
      menuBtnChange();
    });

    headerSidebarMenuBtn.addEventListener("click", function () {
      sidebar.classList.toggle("open");
      menuBtnChange();
    });

    layer.addEventListener("click", function () {
      sidebar.classList.remove("open");
      menuBtnChange();
    });

    function menuBtnChange() {
      if (sidebar.classList.contains("open")) {
        layer.style.opacity = "1";
        layer.style.zIndex = "50";
      } else {
        layer.style.opacity = "0";
        layer.style.zIndex = "-1";
      }
    }
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
          <MenuIcon className="w-5 h-5" />
        </span>
      </div>

      <div className="sidebar_menu_layer opacity-0 fixed inset-0 z-[-1] w-screen h-screenblock md:hidden"></div>

      {/* default sidebar */}
      <aside className="sidebar bg-zinc-50 dark:bg-zinc-900">
        <div className="logo_details hidden md:flex">
          <span className="sidebar_logo_fwb">
            <Logo />
          </span>
          <span
            className="link_icon flex items-center justify-center"
            id="sidebar_menu_btn"
          >
            <MenuIcon className="w-5 h-5 text-zinc-800 dark:text-stone-50" />
          </span>
        </div>
        <ul className="nav-list relative">
          {data.map((item) => {
            return (
              <li key={uuidv4()}>
                <Link
                  href={`/admin/${item.href === "statistics" ? "" : item.href}`}
                  className={cn("after:bg-zinc-800 dark:after:bg-white group link_item", `${activeLink === (item.href === "statistics" ? "admin" : item.href) ? "active bg-zinc-800 dark:bg-slate-50 text-slate-50 dark:text-zinc-800" : ""}`)}
                >
                  <span className="link_icon dark:group-hover:text-zinc-800 group-hover:text-slate-50 transition-all">
                    {item.icon}
                  </span>
                  <span className="link_name dark:group-hover:text-zinc-800 group-hover:text-slate-50 transition-all">
                    {item.name}
                  </span>
                </Link>
                <span className="tooltip hidden md:block bg-slate-50 dark:bg-zinc-900">
                  {item.name}
                </span>
              </li>
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
                  src="https://images.unsplash.com/profile-fb-1697722741-189fcdfa0a62.jpg?bg=fff&crop=faces&dpr=2&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                />
              </div>
            </div>
            <div className="profile_content">
              <div className="name">Duong</div>
              <div className="designation">Admin</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarAdmin;

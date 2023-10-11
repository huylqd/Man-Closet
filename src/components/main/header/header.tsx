import {
  Heart,
  Mail,
  Menu,
  PhoneCall,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import React from "react";
import { Navigation } from "@/components/main/navigation";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import ActionTooltip from "@/components/actionTooltip/actionTooltip";
import { ModeToggle } from "@/components/toggle";

const Header = () => {
  return (
    <>
      <header className="divide-y divide-zinc-800 dark:divide-slate-50/10">
        <div className="bg-zinc-800 dark:bg-zinc-900 text-white py-2 md:block">
          <div className="section_container flex justify-between">
            <div className="flex justify-between md:justify-normal w-full md:w-[auto] gap-x-10 p-x-2 items-center">
              <div className="flex gap-x-2 items-center group cursor-pointer">
                <Mail className="w-4 h-4 group-hover:text-white/60 transition" />
                <a
                  className="text-sm group-hover:text-white/60 transition"
                  href="mailto:mancloset@gmail.com"
                >
                  mancloset@gmail.com
                </a>
              </div>
              <div className="flex gap-x-2 items-center group cursor-pointer">
                <PhoneCall className="w-4 h-4 group-hover:text-white/60 transition" />
                <a
                  className="text-sm group-hover:text-white/60 transition"
                  href="tel:0123456789"
                >
                  (84)123456789
                </a>
              </div>
            </div>

            <div className="md:flex gap-x-10 p-x-2 items-center hidden">
              <div className="flex gap-x-2 items-center cursor-pointer group">
                <Heart className="w-4 h-4 group-hover:text-white/60 transition" />
                <a
                  className="text-sm group-hover:text-white/60 transition"
                  href="tel:0123456789"
                >
                  Danh Sách Yêu Thích
                </a>
              </div>
              <div className="flex gap-x-2 items-center cursor-pointer group">
                <ModeToggle/>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white text-zinc-800 dark:bg-zinc-900 dark:text-white py-4 md:py-6 drop-shadow-sm">
          <div className="section_container flex gap-y-4 md:gap-y-0 flex-row md:items-center justify-between">
            <div className="flex justify-between items-center">
              <div className="flex items-center md:hidden mr-4">
                <Menu className="w-5 h-5 cursor-pointer"/>
              </div>
              <div>
                <Link href={"/"}>
                  <Logo />
                </Link>
              </div>
              <div className="hidden md:flex ml-16">
                <Navigation />
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <ActionTooltip label="Tìm kiếm" side="top" align="center">
                <div className="group hover:bg-zinc-900 dark:hover:bg-white rounded-full w-8 h-8 flex items-center justify-center overflow-hidden transition cursor-pointer p-1">
                  <Search className="w-5 h-5 group-hover:text-white dark:group-hover:text-zinc-800 transition" />
                </div>
              </ActionTooltip>
              <div className="hidden md:block">
                <ActionTooltip label="Tài khoản" side="top" align="center">
                  <div className="group hover:bg-zinc-900 dark:hover:bg-white rounded-full w-8 h-8 flex items-center justify-center overflow-hidden transition cursor-pointer p-1">
                    <User className="w-5 h-5 group-hover:text-white dark:group-hover:text-zinc-800 transition" />
                  </div>
                </ActionTooltip>
              </div>
              <div className="hidden md:block">
                <ActionTooltip label="Giỏ hàng" side="top" align="center">
                  <div className="group hover:bg-zinc-900 dark:hover:bg-white rounded-full w-8 h-8 flex items-center justify-center overflow-hidden transition cursor-pointer p-1">
                    <ShoppingCart className="w-5 h-5 group-hover:text-white dark:group-hover:text-zinc-800 transition" />
                  </div>
                </ActionTooltip>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex md:hidden">

      </div>
    </>
  );
};

export default Header;

import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-900">
      <div className="section_container">
        <div className="py-16 border-b flex flex-col-reverse md:flex-row gap-6">
          <div className="flex grow-[2] flex-col gap-y-4">
            <div>
              <Logo />
            </div>
            <div>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
            <div>
              <h4>Contact Info</h4>
              <h4>181 Trinh Van Bo, Nam Tu Lien, HN</h4>
            </div>
          </div>
          <div className="flex grow">
            <div className="grow">
              <h3 className="text-md md:text-lg font-medium">Pages</h3>
              <ul className="">
                <li>
                  <Link
                    href={"/"}
                    className="text-zinc-600 text-sm md:text-base hover:text-zinc-500 dark:text-white dark:hover:text-white/70"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-zinc-600 text-sm md:text-base hover:text-zinc-500 dark:text-white dark:hover:text-white/70"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-zinc-600 text-sm md:text-base hover:text-zinc-500 dark:text-white dark:hover:text-white/70"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="grow">
              <h3 className="text-md md:text-lg font-medium">Khách Hàng</h3>
              <ul className="group">
                <li className="text-zinc-600/90 text-sm md:text-base hover:text-zinc-500 dark:text-white dark:hover:text-white/70">
                  <Link
                    href={"/"}
                    className="text-zinc-600 text-sm md:text-base hover:text-zinc-500 dark:text-white dark:hover:text-white/70"
                  >
                    Lịch sử mua
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-zinc-600 text-sm md:text-base hover:text-zinc-500 dark:text-white dark:hover:text-white/70"
                  >
                    Giỏ hàng
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-zinc-600 text-sm md:text-base hover:text-zinc-500 dark:text-white dark:hover:text-white/70"
                  >
                    Yêu thích
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-4 gap-2 flex items-center md:justify-between justify-center md:flex-row flex-col-reverse">
          <div>
            <h4 className="text-base md:text-md ">
              ©Webecy - All Rights Reserved
            </h4>
          </div>
          <div className="flex items-center gap-x-2">
            <Link href={"/"} className="group">
              <button className="border-0 bg-zinc-800 dark:bg-white group-hover:bg-zinc-800/80 dark:group-hover:bg-white/70 rounded-full p-1">
                <Facebook
                  fill="currentColor"
                  className="w-5 h-5 text-white dark:text-zinc-800 group-hover:text-white/70 dark:group-hover:text-zinc-800/80 p-[3px]"
                />
              </button>
            </Link>
            <Link href={"/"} className="group">
              <button className="border-0 bg-zinc-800 dark:bg-white group-hover:bg-zinc-800/80 dark:group-hover:bg-white/70 rounded-full p-1">
                <Instagram className="w-5 h-5 text-white dark:text-zinc-800 group-hover:text-white/70 dark:group-hover:text-zinc-800/80 p-[3px]" />
              </button>
            </Link>
            <Link href={"/"} className="group">
              <button className="border-0 bg-zinc-800 dark:bg-white group-hover:bg-zinc-800/80 dark:group-hover:bg-white/70 rounded-full p-1">
                <Twitter
                  fill="currentColor"
                  className="w-5 h-5 text-white dark:text-zinc-800 group-hover:text-white/70 dark:group-hover:text-zinc-800/80 p-[3px]"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import React from "react";

import style from "./navigation.module.scss";
import { cn } from "@/lib/utils";

const Navigation = () => {
  return (
    <nav className={cn(style.navigation)}>
      <ul
        className={cn(
          style.navigation_items_list,
          "flex flex-col md:flex-row md:gap-6 gap-2 py-[2px] px-1 ff-secondary"
        )}
      >
        <li className="text-sm md:text-base font-normal text-zinc-800 dark:text-white">
          <Link className=" dark:text-white transition" href={"/"}>
            Home
          </Link>
        </li>
        <li className="text-sm md:text-base font-normal text-zinc-800 dark:text-white ">
          <Link className=" dark:text-white transition" href={"/"}>
            Shop
          </Link>
        </li>
        <li className="text-sm md:text-base font-normal text-zinc-800 dark:text-white ">
          <Link className=" dark:text-white transition" href={"/"}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

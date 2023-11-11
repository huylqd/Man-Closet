"use client";
import Link from "next/link";
import React, { useState } from "react";

const SidebarAdmin = () => {
  const [selectedLink, setSelectedLink] = useState<string>();
  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };

  return (
    <div>
      <div className="fixed hidden left-0 top-0 w-64 h-full bg-gray-900 p-4 z-50 sidebar-menu transition-transform ">
        <a
          href="#"
          className="flex items-center pb-4 border-b border-b-gray-800"
        >
          <img
            src="https://placehold.co/32x32"
            alt=""
            className="w-8 h-8 rounded object-cover"
          />
          <span className="text-lg font-bold text-white ml-3">Logo</span>
          <button
            id="toggleSidebarMobileSearch"
            type="button"
            className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
          >
            <span className="sr-only">Search</span>
            {/* <!-- Search icon --> */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </a>

        <ul className="mt-4">
          <li
            className={`mb-1 group ${
              selectedLink === "Dashboard" ? "active" : ""
            }`}
          >
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              onClick={() => handleLinkClick("Dashboard")}
            >
              <i className="ri-home-2-line mr-3 text-lg"></i>
              <span className="text-sm">Dashboard</span>
            </a>
          </li>
          <li
            className={`mb-1 group ${
              selectedLink === "Products" ? "active" : ""
            }`}
          >
            <Link
              href="/admin/products"
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
              onClick={() => handleLinkClick("Products")}
            >
              <i className="ri-instance-line mr-3 text-lg"></i>
              <span className="text-sm">Products</span>
              <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
            </Link>
          </li>
          <li
            className={`mb-1 group ${
              selectedLink === "Categories" ? "active" : ""
            }`}
          >
            <Link
              href="/admin/categories"
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
              onClick={() => handleLinkClick("Categories")}
            >
              <i className="ri-flashlight-line mr-3 text-lg"></i>
              <span className="text-sm">Categories</span>
              <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
            </Link>
          </li>
          <li
            className={`mb-1 group ${selectedLink === "User" ? "active" : ""}`}
          >
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              onClick={() => handleLinkClick("User")}
            >
              <i className="ri-settings-2-line mr-3 text-lg"></i>
              <span className="text-sm">User</span>
            </a>
          </li>
          <li
            className={`mb-1 group ${selectedLink === "Order" ? "active" : ""}`}
          >
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              onClick={() => handleLinkClick("Order")}
            >
              <i className="ri-settings-2-line mr-3 text-lg"></i>
              <span className="text-sm">Order</span>
            </a>
          </li>
          <li
            className={`mb-1 group ${
              selectedLink === "Settings" ? "active" : ""
            }`}
          >
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              onClick={() => handleLinkClick("Settings")}
            >
              <i className="ri-settings-2-line mr-3 text-lg"></i>
              <span className="text-sm">Settings</span>
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div> */}
    </div>
  );
};

export default SidebarAdmin;

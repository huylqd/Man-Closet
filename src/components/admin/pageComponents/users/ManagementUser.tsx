"use client";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "@/services/categories/category";
import React, { useEffect, useRef, useState } from "react";
import Pagination from "@/components/pagination/Pagination";
import ConfirmModal from "@/components/modal/confirmModal/ConfirmModal";
import Modal from "@/components/modal/Modal";
import { IUser } from "@/interfaces/user";
import { getAllUser } from "@/services/user/user";
import { lockUser } from "@/services/auth/auth";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const ManagementUser = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [userAll, setUserAll] = useState<IUser[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [totalItems, setTotalItems] = useState<number>(1)
  const [limit, setLimit] = useState<number>(2)

  useEffect(() => {
    fetchData(currentPage, limit)
    fetchDataAll(0, Number.MAX_SAFE_INTEGER)
  }, [])
  const fetchDataAll = async (currentPage: number, limit: number) => {
    const response = await getAllUser(currentPage, limit);
    if (response) {
      const data: any = response;
      setUserAll(data.data)
    } else {

    }
  }
  const fetchData = async (currentPage: number, limit: number) => {
    if (currentPage !== 0) {
      const response = await getAllUser(currentPage, limit);
      if (response) {
        const data: any = response;
        // const user = data.data.filter((u:IUser) => u.role !== "admin");
        setUsers(data.data)
        setTotalPages(data.paginate.totalPages)
        setTotalItems(data.paginate.totalItems)

      } else {

      }
    }
  };


  const handleChangePage = (page: number) => {
    setCurrentPage(page)
    fetchData(page, limit)
  }
  const handleLock = async (userId: string | undefined) => {
    const user = await lockUser(userId)
    fetchData(currentPage, limit)
  }

  return (
    <div>
      <div className="relative overflow-x-auto">

        <section>
          <div>
            <h1 className="font-bold text-xl pt-6 pb-6 dark:text-black">
              Management Users
            </h1>
          </div>
          <div className="font-bold text-xl pb-6">


          </div>
        </section>
        <table className="w-full  table text-sm text-left table-auto text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 ">
                Index
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Lock
              </th>

              <th scope="col" className="px-6 py-3 overflow-x-auto ">
                Action
              </th>
            </tr>
          </thead>
          <tbody>

            {users?.length !== 0 ? users?.map((user, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.role}</td>
                  <td className="px-6 py-4">{user.isBlocked ? "locked" : "unlocked"}</td>
                  <td className="px-6 py-4 ">
                    <div className="flex items-center space-x-4">
                      <button
                        type="button"
                        onClick={() => handleLock(user._id)}
                        data-drawer-show="drawer-update-product"
                        aria-controls="drawer-update-product"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        {user.isBlocked ? (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 -ml-0.5 " height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" /></svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 -ml-0.5 " height="1em" viewBox="0 0 576 512"><path d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z" /></svg>)}


                        Lock user
                      </button>

                      <button
                        type="button"

                        data-modal-target="delete-modal"
                        data-modal-toggle="delete-modal"
                        className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2 -ml-0.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            }) : (
              <tr>
                <td colSpan={3} className=" p-4  text-center bg-white  ">
                  <div className="flex align-center justify-center ">
                    Không có dữ liệu <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-6 h-5 pl-2" width="100" height="100" viewBox="0 0 48 48">
                      <path d="M 8.5 8 C 6.019 8 4 10.019 4 12.5 L 4 18 L 16.052734 18 C 16.636734 18 17.202344 17.793922 17.652344 17.419922 L 23.5 12.546875 L 19.572266 9.2734375 C 18.586266 8.4524375 17.336734 8 16.052734 8 L 8.5 8 z M 27.644531 13 L 19.572266 19.724609 C 18.585266 20.546609 17.336734 21 16.052734 21 L 4 21 L 4 35.5 C 4 37.981 6.019 40 8.5 40 L 39.5 40 C 41.981 40 44 37.981 44 35.5 L 44 17.5 C 44 15.019 41.981 13 39.5 13 L 27.644531 13 z"></path>
                    </svg>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination currentPage={currentPage} limit={limit} totalItems={totalItems} totalPages={totalPages} onPageChange={handleChangePage} />
      </div>


    </div>
  );
};

export default ManagementUser;

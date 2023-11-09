"use client";
import { Button } from "@/components/ui/button";
import { deletePro, getAll } from "@/services/products/products";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { Fragment_Mono } from "next/font/google";
import Link from "next/link";
import ModalPro from "./ModalPro";
// import ModalUpdate from './ModalUpdate'
import { IProduct } from "@/interfaces/product";
import { v4 as uuidv4 } from "uuid";
const ListProducts = () => {
  const [products, setProducts] = useState<any>([]);
  const [showModal, setshowModal] = useState(false);
  const [showModalPro, setshowModalPro] = useState(false);
  // const [showModalUpdate, setshowModalUpdate] = useState(false)
  const [product, setProduct] = useState<any>({});
  // const [productId , setProductId] = useState('')
  // const openModal = (product_id:string) => {
  //     setshowModalUpdate(true) ;
  //     setProductId(product_id)
  // }
  useEffect(() => {
    getAll().then(({ data }: any) => setProducts(data));
  }, []);
  const onhandleRemove = async (id: any) => {
    await deletePro(id);
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <button
          onClick={() => {
            setshowModalPro(true);
            setProduct(false);
          }}
        >
          New Products
        </button>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all"
                    type="checkbox"
                    className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label form="checkbox-all" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>

              <th scope="col" className="p-4">
                Product
              </th>
              <th scope="col" className="p-4">
                Price
              </th>
              <th scope="col" className="p-4">
                Last Update
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((data: IProduct) => {
              return (
                <tr
                  key={uuidv4()}
                  className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        {" "}
                        checkbox
                      </label>
                    </div>
                  </td>

                  <td
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="flex items-center mr-3">
                      {data?.productName}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      {data?.price}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => {
                          setshowModalPro(true);
                          setProduct(data);
                        }}
                        type="button"
                        className="text-white w-full inline-flex items-center bg-yellow-500 hover:bg-yellow-600 justify-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-800"
                      >
                        <svg
                          aria-hidden="true"
                          className="mr-1 -ml-1 w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </button>
                      <button
                        onClick={() => onhandleRemove(data._id)}
                        type="button"
                        className="inline-flex w-full items-center text-white justify-center bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 mr-1.5 -ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          />
                        </svg>
                        Delete
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setshowModal(true);
                          setProduct(data._id);
                        }}
                        className="flex  items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        Preview
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal
        isvisible={showModal}
        id={product}
        onClose={() => setshowModal(false)}
      />
      <ModalPro
        isvisiblePro={showModalPro}
        product={product}
        onClosePro={() => setshowModalPro(false)}
      />
    </div>
  );
};

export default ListProducts;

"use client";
import { Button } from "@/components/ui/button";
import { createPro, deletePro, getAll, updatePro } from "@/services/products/products";
import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { Fragment_Mono } from "next/font/google";
import Link from "next/link";
import ModalPro from "./ModalPro";
// import ModalUpdate from './ModalUpdate'
import { IProduct } from '@/interfaces/product'
import { v4 as uuidv4 } from 'uuid'
import ModalUpdate from './ModalUpdate'
import Toaster from "@/components/Toaster/Toaster";
const ListProducts = () => {
    const [products, setProducts] = useState<any>([])
    const [showModal, setshowModal] = useState(false)
    const [showModalPro, setshowModalPro] = useState(false)
    const [showModalUpdate, setshowModalUpdate] = useState(false)
    const [product, setProduct] = useState<any>({})
    const toasterRef = useRef<any>(null);
    useEffect(() => {
        getAll().then(({ data }: any) => setProducts(data))
    }, [])
    const onhandleRemove = (id: any) => {
        if(confirm('Are you sure you want to remove')){
            deletePro(id)
            .then(({ data }: any) => {
                // alert("Xóa thành công!");
                setProducts(
                    products.filter((item: any) => item._id !== data._id)
                );
            })
            alert("Xóa thành công!");
        }
        
        // await deletePro(id)
       
    }
    const onhandleUpdate = async (category: any) => {
        console.log(category);
        
        updatePro(category)
          .then(() => {
            // console.log(cate);
            // Gọi hàm showToast bên trong component Toaster
            toasterRef.current.showToast("success", "Update successfully!");
            // toast.success('Cập nhật thành công');
            setProducts(
              products.map((item:any) =>
                item._id === category._id ? category : item
              )
            );
            setshowModalUpdate(false);
          })
          .catch(() => {
            toasterRef.current.showToast("error", "Update Fail!");
          });
      };

    const handleAdd = async (prod: any) => {
        createPro(prod)
          .then(({ data }: any) => {
            console.log(data);
    
            // getAllCategory()?.then(({ data }) => setCategories(data.data));
            const newCategories = [...products];
            console.log(newCategories);
            
            // Thêm sản phẩm mới vào danh sách
            newCategories.push(data);
            // Cập nhật state `categories` với danh sách mới
            setProducts(newCategories);
            toasterRef.current.showToast("success", "Add successfully!");
            setshowModalPro(false);
          })
          .catch(() => {
            toasterRef.current.showToast("error", "Add Fail!");
          });
      };
    return (
        <div>
            <div className="overflow-x-auto">
                <button type="submit" onClick={() => setshowModalPro(true)} className=" mb-4 text-white inline-flex items-center bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    New Products
                </button>

                <table className="w-full text-sm text-left table-auto text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label form="checkbox-all" className="sr-only">checkbox</label>
                                </div>
                            </th>

                            <th scope="col" className="p-4">Product</th>
                            <th scope="col" className="p-4">Price</th>
                            <th scope="col" className="p-4">Last Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((data: IProduct) => {
                            return (
                                <tr key={uuidv4()} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td className="p-4 w-4">

                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="checkbox-table-search-1" className="sr-only" > checkbox</label>
                                        </div>
                                    </td>

                                    <td scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                                        <div className="flex items-center mr-3">
                                            {data?.productName}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">{data?.price}</span>
                                    </td>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="flex items-center space-x-4">
                                            <button onClick={() => { setshowModalUpdate(true); setProduct(data) }} type="button" data-drawer-target="drawer-update-product" data-drawer-show="drawer-update-product" aria-controls="drawer-update-product" className="border border-yellow-300 dark:border-yellow-300 py-2 px-3 flex items-center text-sm font-medium text-center text-yellow-300 hover:text-white  rounded-lg hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 -ml-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                                </svg>
                                                Edit
                                            </button>
                                            <button onClick={() => { setshowModal(true); setProduct(data._id) }} type="button" data-drawer-target="drawer-read-product-advanced" data-drawer-show="drawer-read-product-advanced" aria-controls="drawer-read-product-advanced" className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2 -ml-0.5">
                                                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" />
                                                </svg>
                                                Preview
                                            </button>
                                            <button onClick={() => onhandleRemove(data._id)} type="button" data-modal-target="delete-modal" data-modal-toggle="delete-modal" className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 -ml-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                Delete
                                            </button>
                                        </div>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Toaster ref={toasterRef} />
            <Modal isvisible={showModal} id={product} onClose={() => setshowModal(false)} />
            <ModalPro isvisiblePro={showModalPro} add={handleAdd} product={product} onClosePro={() => setshowModalPro(false)} />
            <ModalUpdate isvisibleUpdate={showModalUpdate} update={onhandleUpdate}  products={product} onClosePro={() => setshowModalUpdate(false)} />

        </div>
    )
}

export default ListProducts;

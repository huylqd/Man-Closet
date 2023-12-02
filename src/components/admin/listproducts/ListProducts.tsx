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
import Pagination from "@/components/pagination/Pagination";
const ListProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [productsAll, setProductsAll] = useState<IProduct[]>([])
    const [showModal, setshowModal] = useState(false)
    const [showModalPro, setshowModalPro] = useState(false)
    const [showModalUpdate, setshowModalUpdate] = useState(false)
    const [product, setProduct] = useState<any>({})
    const toasterRef = useRef<any>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [key, setKey] = useState<string>('');
    // useEffect(() => {
    //     getAll().then(({ data }: any) => setProducts(data))
    // }, [])
    useEffect(() => {
        fetchData(currentPage)
    }, []);
    const fetchData = async (currentPage: number) => {
        if (currentPage !== 0) {
            const response = await getAll(currentPage);
            if (response) {
                const data: any = response;


                setProducts(data.data)
                setTotalPages(data.pagination.totalPages)
                // console.log('page', data);

            } else {

            }
        } else {
            const response = await getAll(currentPage);
            if (response) {
                const data: any = response;
                setProductsAll(data.data)
                setTotalPages(data.pagination.totalPages)
            } else {

            }
        }


    };
    const handleChangePage = (page: number) => {
        setCurrentPage(page)
        fetchData(page)
    }
    const search = async () => {
        if (!key) {
            await fetchData(currentPage)

        } else {
            await fetchData(0)
            // console.log(categoriesAll);
            const regex = new RegExp(key, 'i');
            const temp = await productsAll
            let resultSearch = await temp.filter((c: IProduct) => {
                // Chuyển chuỗi `key` và tên danh mục thành chữ thường và tách thành mảng từ
                const keyWords = key.toLowerCase().split(' ');
                const productsWords = c.productName.toLowerCase().split(' ')
                // Kiểm tra xem có ít nhất một từ trong `keyWords` tồn tại trong `productsWords`
                return keyWords.some((word) => productsWords.some((productsWord) => productsWord.includes(word)));
                // regex.test(c.name)
            }

            );
            // console.log(resultSearch);

            setProducts(resultSearch);
            // fetchData(currentPage)
        }
    }
    console.log(products);

    const handleChange = (e: any) => {
        setKey(e.target.value)
    }

    const onhandleRemove = (id: string) => {
        if (confirm('Are you sure you want to remove')) {
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
        // console.log(category);

        updatePro(category)
            .then(() => {
                // console.log(cate);
                // Gọi hàm showToast bên trong component Toaster
                toasterRef.current.showToast("success", "Update successfully!");
                // toast.success('Cập nhật thành công');
                setProducts(
                    products.map((item: any) =>
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
                // console.log(data);

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
                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <div className="w-full md:w-1/2">

                        <div className="flex items-center">
                            <label htmlFor="voice-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
                                    </svg>
                                </div>
                                <input  onChange={handleChange}  type="search" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..."  />
                                <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
                                    </svg>
                                </button>
                            </div>
                            <button onClick={() => search()} type="button" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>Search
                            </button>
                        </div>

                    </div>
                    <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        <button onClick={() => setshowModalPro(true)} type="button" id="createProductModalButton" data-modal-target="createProductModal" data-modal-toggle="createProductModal" className="border flex items-center justify-center  bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                            <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                            </svg>
                            Add product
                        </button>
                        <div className="flex items-center space-x-3 w-full md:w-auto">
                            <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                <svg className="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                                Actions
                            </button>
                            <div id="actionsDropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
                                </div>
                            </div>
                            <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                                </svg>
                                Filter
                                <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>
                <table className="w-full text-sm text-left table-auto text-gray-500 dark:text-gray-400">
                    <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">STT</th>
                            <th scope="col" className="p-4">Product</th>
                            <th scope="col" className="p-4">Price</th>
                            <th scope="col" className="p-4">Last Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((data: IProduct, index: number) => {
                            return (
                                <tr key={uuidv4()} className="border-b bg-white dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td className="p-4 w-4">

                                        <div className="flex items-center">
                                            {index + 1}
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
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handleChangePage} />
            </div>
            <Toaster ref={toasterRef} />
            <Modal isvisible={showModal} id={product} onClose={() => setshowModal(false)} />
            <ModalPro isvisiblePro={showModalPro} add={handleAdd} product={product} onClosePro={() => setshowModalPro(false)} />
            <ModalUpdate isvisibleUpdate={showModalUpdate} update={onhandleUpdate} products={product} onClosePro={() => setshowModalUpdate(false)} />

        </div>
    )
}

export default ListProducts;
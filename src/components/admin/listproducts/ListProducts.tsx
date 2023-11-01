'use client'
import { Button } from '@/components/ui/button'
import { getAll } from '@/services/products/products'
import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import { Fragment_Mono } from 'next/font/google'
import Link from 'next/link'
import ModalPro from './ModalPro'
const ListProducts = () => {
    const [products, setProducts] = useState<any>([])
    const [showModal, setshowModal] = useState<any>(false)
    const [showModalPro, setshowModalPro] = useState<any>(false)
    const [product, setProduct] = useState<any>({})
    console.log(showModalPro);
    useEffect(() => {
        getAll().then(({ data }: any) => setProducts(data.data))
    }, [])
    return (
        <div>
            <div className="overflow-x-auto">
                <button onClick={() => setshowModalPro(true)}>New Products</button>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                        {products.map((data: any, index: any) => {
                            return (
                                <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td className="p-4 w-4">

                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="checkbox-table-search-1" className="sr-only" > checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="flex items-center mr-3">
                                            {data?.productName}
                                        </div>
                                    </th>
                                    <td className="px-4 py-3">
                                        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">{data?.price}</span>
                                    </td>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="flex items-center space-x-4">
                                          
                                            <button type="button" onClick={() => { setshowModal(true); setProduct(data._id) }} className="flex  items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200">
                                                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                                Preview
                                            </button>
                                           
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Modal isvisible={showModal} id={product} onClose={() => setshowModal(false)} />
            <ModalPro isvisiblePro={showModalPro}  />
        </div>
    )
}

export default ListProducts

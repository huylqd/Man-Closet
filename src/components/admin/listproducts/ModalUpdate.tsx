'use client'
import { IProduct } from '@/interfaces/product'
import { getAllCategory } from '@/services/categories/category'
import { createPro, getById, updatePro } from '@/services/products/products'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
const ModalUpdate = ({ isvisibleUpdate,update, products, onClosePro }: any) => {
    if (!isvisibleUpdate) return null
    // const [product, setProduct] = useState({})
    const [cate, setCate] = useState<any>([])
    useEffect(() => {
        getAllCategory(0)?.then(({ data }) => setCate(data))
    }, [])
    const {
        register,
        handleSubmit,
        reset
    } = useForm()
    if (products) {
        useEffect(() => {
            reset(products)

        }, [products]);

    }
    const onHandleSubmit = async (data: any) => {
        console.log(data);
        
        await update(data)
        console.log(data);

    }

    return (
        <div className="overflow-y-auto pt-[40px]  fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] md:h-full ">
            <div className=" overflow-y-auto relative p-4 w-full max-w-3xl h-full md:h-auto">

                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">

                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Update </h3>
                        <button type="button" onClick={() => onClosePro()} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-target="createProductModal" data-modal-toggle="createProductModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <form action='' onSubmit={handleSubmit(onHandleSubmit)} >
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                                <input type="text" {...register('productName')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                            </div>
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <select  {...register('categoryId')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option hidden >Select category</option>
                                    {cate?.map((item: any) => {
                                        return (
                                            <option selected={products.categoryId === item._id ? products.categoryId : ''} value={item._id}>{item.name}</option>
                                        )
                                    })}

                                </select>
                            </div>

                            <div>
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="number"  {...register('price')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required />
                            </div>
                            <form className="grid gap-4 sm:col-span-2 md:gap-6 sm:grid-cols-4">
                                {products.properties.map((dataa: any, index: number) => {

                                    return <div key={uuidv4()}>
                                        <div className="mb-4">

                                            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Images</span>
                                            <div className="flex justify-center items-center w-full">

                                                <input type="text" {...register(`properties[${index}].imageUrl`)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required />

                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="length" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Size</label>
                                            <input type="text" {...register(`properties[${index}].size`)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required />
                                        </div>
                                        <div>
                                            <label htmlFor="breadth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
                                            <input type="text" {...register(`properties[${index}].color`)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="15" required />
                                        </div>
                                        <div>
                                            <label htmlFor="width" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                                            <input type="number" {...register(`properties[${index}].quantity`)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="23" required />
                                        </div>
                                    </div>
                                })}
                            </form>
                            <div className="sm:col-span-2"><label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label><textarea  {...register('description')} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here"></textarea></div>
                        </div>

                        <button type="submit" className="text-white inline-flex items-center bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-2">

                            Save
                        </button>
                        <button type="reset" className="text-white inline-flex items-center bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">

                            Reset
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalUpdate

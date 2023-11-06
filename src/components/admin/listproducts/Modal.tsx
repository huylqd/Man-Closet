'use client'
import { Button } from '@/components/ui/button';
import { getById } from '@/services/products/products';
import { useParams } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react'
// import ModalUpdate from './ModalUpdate';

const Modal = ({ isvisible, id, onClose }: any) => {
    if (!isvisible) return null
    //   const router = useRouter();
    const productId = id;
    // console.log(productId);
    const [detail, setDetail] = useState<any>({});
    const [modalUpdate , setshowModalUpdate] = useState<any>(false)
    const [product, setProduct] = useState<any>({})
    useEffect(() => {
        getById(productId).then(({ data }:any) => setDetail(data.data))
    }, [])
    console.log(detail._id);
    const imgRef = useRef<any>()
    const setImgPreview = (imageUrl: any) => {
        imgRef.current.src = imageUrl
    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center p-12'>
                <div className='flex flex-col gap-6 lg:w-2/4'>
                    <img ref={imgRef} alt="" className='w-full h-80 aspect-square object-cover rounded-xl' src={detail.properties?.[0].imageUrl} />
                    <div className='flex  justify-between h-24'>
                        {detail.properties?.map((url: any) => {
                            return (
                                <a onClick={() => setImgPreview(url?.imageUrl)}>
                                    <img alt="" className='w-24 h-24 rounded-md cursor-pointer' src={url?.imageUrl} />
                                </a>
                            )
                        })}
                    </div>
                </div>
                {/* ABOUT */}
                <form action="" className='flex flex-col gap-4 lg:w-2/4'>
                    <button className='place-self-end' onClick={() => onClose()}>X</button>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{detail.productName}</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            { }
                        </p>
                        <div className=" mb-4">
                            <div className="mr-4 pb-3">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                <span className="text-gray-600 dark:text-gray-300">{detail.price}</span>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                            <div className="flex items-center mt-2">
                                {detail.properties?.map((url: any) => {
                                    return (
                                        <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2" style={
                                            {
                                                backgroundColor: url?.color
                                            }
                                        }></button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                            <div className="flex items-center mt-2">
                                {detail.properties?.map((url: any) => {
                                    return (
                                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">{url?.size}</button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="mr-4 pb-3">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Detail:</span>
                                <span className="text-gray-600 dark:text-gray-300">{detail.description}</span>
                            </div>
                        <div className="flex bottom-0 left-0 justify-center pb-4 space-x-4 w-full">
                            <button onClick={() => {setshowModalUpdate(true)}} type="button" className="text-white w-full inline-flex items-center bg-yellow-500 hover:bg-yellow-600 justify-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-800">
                                <svg aria-hidden="true" className="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                    <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                </svg>
                                Edit
                            </button>
                            <button type="button" className="inline-flex w-full items-center text-white justify-center bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                                <svg aria-hidden="true" className="w-5 h-5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" />
                                </svg>
                                Delete
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* <ModalUpdate isvisibleUpdate={modalUpdate} id={product}  onClosePro={() => setshowModalUpdate(false)}/> */}
        </div>
    )
}

export default Modal

'use client'
import { Button } from '@/components/ui/button'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import {  getById } from '@/services/products/products';



const ProductsDetail = () => {
    //   const router = useRouter();
    const { productId } = useParams();
    // console.log(productId);



    const [detail, setDetail] = useState<any>({});
    useEffect(() => {
        getById(productId).then(({ data }:any) => setDetail(data.data))
    }, [])
    console.log(detail);

    const imgRef = useRef<any>()
    const setImgPreview = (imageUrl: any) => {
        imgRef.current.src = imageUrl
    }

    return (
        <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center p-12'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img ref={imgRef} alt="" className='w-full h-80 aspect-square object-cover rounded-xl' src={detail.properties?.[0].imageUrl} />
                <div className='flex  justify-between h-24'>
                    {detail?.properties?.map((url: any) => {
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
           
                <div className="md:flex-1 px-4">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{detail?.productName}</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        { }
                    </p>
                    <div className=" mb-4">
                        <div className="mr-4 pb-3">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                            <span className="text-gray-600 dark:text-gray-300">{detail?.price}</span>
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
                    <div>
                        <Button variant={'primary'} className='  text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</Button>
                    </div>
                </div>
            
            </form>
           
        </div>


    )
}

export default ProductsDetail

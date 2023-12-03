'use client'

import React, { useState, useEffect } from 'react'
import Breadcrumb from '@/components/breadcrumb'
import { Filter } from 'lucide-react'
import { categoryCarouselData } from '@/app/(main)/(home)/demo.data'
import { Category, ShopList } from '..'
import ModalFilter from './ModalFilter'




const Shop = () => {
    const [isOpen,setIsOpen] = useState(false)


    const handleCloseModal = () => {
        setIsOpen(false);
      };
  return (
    <div>
      <section>
        <Breadcrumb />
      </section>
      <section className="pt-10 md:py-16 section_container ">
        <div className="">
          <div className="flex flex-row justify-between">
            <div className="hidden md:block md:w-2/6">
              <div className="font-bold text-xl">
                Ecommerce Acceories & Fashion item
              </div>
              <p className="text-xs text-gray-400">
                About 100000 results
              </p>
            </div>
            <div className="flex w-full md:w-1/2 flex-row justify-center align-center ">
            <div className="pr-2 mt-2 w-1/2">
              <button onClick={() => setIsOpen(true)} className="w-full flex flex-row md:hidden border-gray-200 border-2 p-3 align-center justify-center hover:border-gray-800 transition ease-in-out rounded-sm ">
              <Filter />  
              <span className="pl-2" >Bộ lọc </span>
              </button>
              </div>
            
              <div className="pr-2 mt-2 w-1/2">
                <select className=" w-full ml-2 border-gray-300 cursor-pointer focus:outline-none pr-2 pl-2 flex flex-row border-2 p-3 align-center justify-center hover:border-gray-800 transition ease-in-out rounded-sm">
                  <option value="">Mới nhất</option>
                  <option value="">Cũ nhất</option>
                  <option value="">Giá : Tăng dần</option>
                  <option value="">Giá: Giảm dần </option>
                </select>
              </div>
           
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start	md:flex-row">

          <div className="flex-auto hidden w-full md:w-1/6  md:block mr-2">
            <div className="flex flex-row align-center justify-between md:flex-col  ">
              <Category  title="Product Brand" data={categoryCarouselData}/>
              <Category title="Categories" data={categoryCarouselData} />
              <Category title="Riting Item" data={categoryCarouselData} />
              <Category title="Price Filter" data={categoryCarouselData} />
            </div>
          </div>
        
          <div className='flex-auto w-full md:w-4/6 ml-2'>
            <ShopList title='Tất cả sản phẩm' />
          </div>
        </div>


      </section>
      <ModalFilter isOpen={isOpen} onClose={handleCloseModal}/>
    </div>
  )
}

export default Shop

'use client'
import { BannerV2 } from '@/components/banner'
import { ShopList } from '@/components/main/pageComponents/shoplist'
import React, { useState, useEffect } from 'react'
import { categoryCarouselData } from '../demo.data'
import TitleDivide from '@/components/titleDivide'
import Category from '@/components/main/pageComponents/shoplist/category/Category'
import Breadcrumb from '@/components/breadcrumb'
import { Filter } from 'lucide-react'




const Product = () => {
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
            <div className="flex w-full md:w-1/2 flex-col sm:flex-row justify-between align-center ">
            <Filter />
              <div className='pr-2 mt-2'>
                <span >Per Page: </span>
         
                <input type="text" className="w-[75px] ml-2 border-gray-300   border-0 bg-gray-100 focus:bg-gray-100 focus:outline-none pr-2 pl-2"  />
              </div>
              <div className="pr-2 mt-2">
              <span >Sort By: </span>
                <select className="w-[75px] ml-2 border-gray-300   border-0 bg-gray-100 focus:bg-gray-100 focus:outline-none pr-2 pl-2">
                  <option value="">CC</option>
                  <option value="">CC</option>
                </select>
              </div>
              <div className='pr-2 mt-2'>
              <span >View: </span>
                <input type="text" className='w-[75px] ml-2 border-gray-300   border-0 bg-gray-100 focus:bg-gray-100 focus:outline-none pr-2 pl-2'/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start	md:flex-row">

          <div className="flex-auto w-full md:w-1/6  md:block mr-2">
            <div className="flex flex-row align-center justify-between md:flex-col  ">
              <Category  title="Product Brand" data={categoryCarouselData} />
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
    </div>
  )
}

export default Product

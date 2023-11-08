'use client'
import { BannerV2 } from '@/components/banner'
import { ShopList } from '@/components/main/pageComponents/shoplist'
import React, { useState, useEffect } from 'react'
import { productCarouselData } from '../demo.data'
import { categoryCarouselData } from '../demo.data'
import TitleDivide from '@/components/titleDivide'
import Category from '@/components/main/pageComponents/shoplist/category/Category'
import { getAll } from '@/services/products/products'
import { IProduct, IProductResponse } from '@/interfaces/product'
import Breadcrumb from '@/components/breadcrumb'
import { listProduct } from '@/data/product'

import Pagination from '@/components/pagination/Pagination'
import { fetchData } from '@/data/category'
const Product = () => {

  // const [Categories,setCategories] = useState()
  // useEffect(() => {

  //   const fetch = fetchData(0)
  //   console.log(fetch);
    
  // },[])

  return (
    <div>
      <section>
        <Breadcrumb />
      </section>
      <section className="pt-10 md:py-16 section_container ">
        <div className="flex flex-row items-start	">

          <div className="flex-auto w-1/6  mr-2">
            <div>
              <Category title="Product Brand" data={categoryCarouselData} />

              <Category title="Categories" data={categoryCarouselData} />
              <Category title="Riting Item" data={categoryCarouselData} />
              <Category title="Price Filter" data={categoryCarouselData} />
            </div>


          </div>
          <div className='flex-auto w-4/6 ml-2'>
            <ShopList title='Product All' data={listProduct()} />
            {/* Pagination demo */}
           
          </div>
        </div>


      </section>
    </div>
  )
}

export default Product

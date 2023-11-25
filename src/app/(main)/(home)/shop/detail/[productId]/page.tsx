'use client'
import React, { useEffect, useState } from 'react'
import ProductsDetail from '@/components/main/pageComponents/home/productsDetail/ProductsDetail'
import { Comment, Descriptions, Related } from '@/components/main/pageComponents/home'
import { productCarouselData } from '../../../../(home)/demo.data'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { BannerV2 } from '@/components/banner'

import Breadcrumb from '@/components/breadcrumb'
import { getProductByCategoryId } from '@/services/products/products'




const Detail = () => {
 
  return (
    <section> 
      <section className=' section_container'>
        <section>
          <ProductsDetail />
          
        </section>
        
        {/* < Comment /> */}
        
      </section>
    </section>


  )
}

export default Detail

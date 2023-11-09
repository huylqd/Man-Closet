'use client'
import React from 'react'
import ProductsDetail from '@/components/main/pageComponents/home/productsDetail/ProductsDetail'
import { Comment, Descriptions, Related } from '@/components/main/pageComponents/home'
import { productCarouselData } from '../../../../(home)/demo.data'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { BannerV2 } from '@/components/banner'
import Breadcrumb from '@/components/breadcrumb'
import { getProductsByCategory } from '@/data/category'



const Detail = () => {
  
  return (
    <section> 
      <section className=' section_container'>
        <section>
          <ProductsDetail />
        </section>
        <section>
          <Descriptions />
        </section>
        {/* < Comment /> */}
        <section>
          <Related title='Related Products' data={[]} />
        </section>
      </section>
    </section>


  )
}

export default Detail

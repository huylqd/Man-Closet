"use client"
import React from 'react'
import ProductsDetail from '@/components/main/pageComponents/home/productsDetail/ProductsDetail'

import Breadcrumb from '@/components/breadcrumb'




const Detail = () => {
  return (
    <section>
      <Breadcrumb />
      <section className=' section_container'>

        <section>
          <ProductsDetail />
        </section>
        <section>
          {/* <Descriptions /> */}
        </section>
        <section>
          {/* <Related title='Related Products' data={productCarouselData} /> */}
        </section>

      </section>
    </section>


  )
}

export default Detail

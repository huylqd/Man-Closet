import React from 'react'
import ProductsDetail from '@/components/main/pageComponents/home/productsDetail/ProductsDetail'
import { Descriptions, Related } from '@/components/main/pageComponents/home'
import { productCarouselData } from '../(home)/demo.data'
const page = () => {
  return (
    <section className=' section_container'>
      <section>
        <ProductsDetail />
      </section>
      <section>
        <Descriptions />
      </section>
      <section>
        <Related title='Related Products' data={productCarouselData} />
      </section>

    </section>

  )
}

export default page

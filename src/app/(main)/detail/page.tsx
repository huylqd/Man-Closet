import React from 'react'
import ProductsDetail from '@/components/main/pageComponents/home/productsDetail/ProductsDetail'
import { Descriptions } from '@/components/main/pageComponents/home'
const page = () => {
  return (
    <section className=' section_container'>
      <section>
        <ProductsDetail />
      </section>
      <section>
        <Descriptions />
      </section>

    </section>

  )
}

export default page

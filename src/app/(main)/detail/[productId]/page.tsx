
import React from 'react'
import ProductsDetail from '@/components/main/pageComponents/home/productsDetail/ProductsDetail'
import { Descriptions, Related } from '@/components/main/pageComponents/home'
import { productCarouselData } from '../../(home)/demo.data'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { BannerV2 } from '@/components/banner'



const Detail  =  () => {
 
  return (
    <section className=' section_container'>
       <section>
        <BannerV2 title='Shop List' description='Detail' subTitle='Home . Shop' />
      </section>
      <section>
        <ProductsDetail />
      </section>
      <section>
        <Descriptions />
      </section>
      <section>
        <Related title='Related Products'  data={productCarouselData}  />
      </section>

    </section>

  )
}

export default Detail

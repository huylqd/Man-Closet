
import React from 'react'
import ProductsDetail from '@/components/main/pageComponents/home/productsDetail/ProductsDetail'
import { Comment, Descriptions, Related } from '@/components/main/pageComponents/home'
import { productCarouselData } from '../../../../(home)/demo.data'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { BannerV2 } from '@/components/banner'
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
          <Descriptions />
        </section>
        <section>
          <Comment />
        </section>
        <section>
          <Related title='Related Products' data={productCarouselData} />
        </section>

      </section>
    </section>


  )
}

export default Detail

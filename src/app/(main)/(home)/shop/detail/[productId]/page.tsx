'use client'
import React from 'react'

import { Comment, Descriptions, Related } from '@/components/main/pageComponents/home'
import { productCarouselData } from '../../../../(home)/demo.data'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { BannerV2 } from '@/components/banner'

import Breadcrumb from '@/components/breadcrumb'
import { Detail } from '@/components/main/pageComponents/productDetailPage'




const ProductDetailPage = () => {
  
  return (
    <>
      <section className='section_container'>
        <Detail/>
      </section>
    </>
  )
}

export default ProductDetailPage

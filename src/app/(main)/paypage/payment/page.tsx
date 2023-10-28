import React from 'react'
import { Caculate, CartTotal, Products, Table } from "@/components/main/pageComponents/payPage";
import { productCarouselData } from '../../(home)/demo.data';
import Information from '@/components/main/pageComponents/payPage/information/Information';

const PayMent = () => {
  return (
    <div className='md:flex flex-row section_container'>
      <section className= 'basis-3/4 '>
        <Information />
      </section>
      <div className='basis-1/4 '>
        <section>
            <Products data= {productCarouselData}/>
        </section>
      <section className=''>
        <CartTotal />
      </section>
     
      </div>
      
    </div>
  )
}

export default PayMent

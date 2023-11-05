import React from 'react'
import { Caculate, CartTotal, Table } from "@/components/main/pageComponents/payPage";
import { productCarouselData } from '../(home)/demo.data';
const PayPage = () => {
  return (
    <section className='md:flex flex-row section_container'>
      <section className= 'basis-3/4 '>
        <Table data={productCarouselData}/>
      </section>
      <div className='basis-1/4 '>
      <section className=''>
        <CartTotal />
      </section>
      <section>
        <Caculate />
      </section>
      </div>
      
    </section>
  )
}

export default PayPage

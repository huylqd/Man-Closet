"use cilent"

import { Button } from '@/components/ui/button'
import React from 'react'

const CartTotal = () => {
  return (
    <div className="flex flex-col w-full  h-fit gap-4 p-4 mt-[30px]">
        <p className="text-blue-900 text-xl font-extrabold">Caculate Shopping</p>
        <div className="flex flex-col p-4 gap-4 text-lg font-semibold shadow-md border rounded-sm">
            <div className="flex flex-row justify-between">
                <p className="text-gray-600">Subtotal </p>
                <p className="text-end font-bold">$99.98</p>
            </div>
            
            <hr className="bg-gray-200 h-0.5" />
            <div className="flex flex-row justify-between">
                <p className="text-gray-600">Total</p>
                <div>
                <p className="text-end font-bold">$103.88</p>
                </div>
            </div>
            <hr className="bg-gray-200 h-0.5" />
            <div className='flex items-center mb-4'>
              <input type="checkbox" />
              <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Shipping & taxes calculated at checkout</label>
            </div>
            <div className="flex gap-2">
            <Button variant={'primary'} className="transition-colors text-sm p-2 rounded-sm w-full text-white text-hover shadow-md">
            Processd To Checkout 
                </Button>
                 
            </div>
        </div>
    </div>
  )
}

export default CartTotal

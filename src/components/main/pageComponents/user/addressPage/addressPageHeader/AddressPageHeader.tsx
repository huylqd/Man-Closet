import { Plus } from 'lucide-react'
import React from 'react'

const AddressPageHeader = () => {
  return (
    <>
      <div className='flex items-center justify-between border-b pb-3 md:pb-4'>
        <h3 className='text-lg md:text-xl font-medium text-gray-800'>Địa chỉ của tôi</h3>
        <button className='flex items-center gap-1 text-md rounded text-white bg-zinc-800 hover:bg-zinc-600 md:py-2 md:px-3 p-1'>
          <Plus className='h-4 w-4'/>
          <span className='hidden md:block'>Thêm địa chỉ mới</span>
        </button>
      </div>
    </>
  )
}

export default AddressPageHeader
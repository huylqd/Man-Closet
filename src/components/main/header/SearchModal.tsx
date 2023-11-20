"use client"

import { SearchIcon, X } from 'lucide-react'
import React from 'react'

interface searchModal {
  onClose : () => void
}

const SearchModal = ({onClose}: searchModal) => {
  return (
    <div className='relative w-[460px] bg-white dark:bg-zinc-900  rounded shadow-md'>
      <div className='flex gap-2 items-center border-b p-3 md:p-6'>
        <span>
          <SearchIcon className='w-4 h-4'/>
        </span>
        <input type="text" placeholder='Tìm kiếm sản phẩm...' className='focus:outline-none flex-[1]'/>
        <button 
          onClick={() => onClose()}
        >
          <X className='w-5 h-5'/>
        </button>
      </div>

      <div
        className='p-3 md:p-6'
      >
        không tìm thấy kết quả
      </div>
    </div>
  )
}

export default SearchModal
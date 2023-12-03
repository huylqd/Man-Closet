"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

interface Props {
  initialValue: string,
  onClose : () => void
}

const ModalEditName = ({initialValue,onClose} : Props) => {
  const [name, setName] = useState(initialValue)
  
  const handleChangeValue = (value:string) => {
    setName(value)
  }
  return (
    <>
      <div className='bg-white p-3 rounded overflow-hidden'>
        <div className='pb-6'>
          <label htmlFor="changeUserNameInput" className='text-sm text-gray-600'>Tên người dùng</label>
          <input type="text" value={name} onChange={(e) => handleChangeValue(e.target.value)} id='changeUserNameInput' className='w-full text-gray-800 pt-1 text-md font-normal focus:outline-none border-b'/>
        </div>

        <div className='flex items-center gap-3 pt-6'>
          <Button variant={"primary"} className='flex-[1]'>Thay đổi</Button>
          <Button onClick={() => onClose()} variant={"bordered"} className='flex-[1]'>Huỷ</Button>
        </div>
      </div>
    </>
  )
}

export default ModalEditName
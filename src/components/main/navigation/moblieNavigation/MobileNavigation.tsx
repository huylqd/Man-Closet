import { Contact, Heart, Home, Shirt, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { v4 as uuidv4 } from "uuid"

const mobileNavigationData = [
  {
    icon: <Home className='w-5 h-5'/>,
    href: "/",
    name: "Trang chủ"
  },
  {
    icon: <Shirt className='w-5 h-5'/>,
    href: "/shop",
    name: "Sản phẩm"
  },
  {
    icon: <Contact className='w-5 h-5'/>,
    href: "/contact",
    name: "Liên hệ"
  },
  {
    icon: <Heart className='w-5 h-5'/>,
    href: "/wishlist",
    name: "Danh sách yêu thích"
  },
]

interface MobileNavigationProps {
  onClose : (value:boolean) => void
}

const MobileNavigation = ({onClose}: MobileNavigationProps) => {
  return (
    <div className='flex flex-col h-full'>
      <ul className='flex gap-y-5 flex-col p-3'>
        {mobileNavigationData.map(item => (
          <li key={uuidv4()}>
            <Link href={item.href} className='flex items-center justify-center border border-zinc-800 px-4 py-2 gap-x-2 rounded overflow-hidden'>
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <button 
        onClick={() => onClose(false)}
        className='mx-auto mt-auto mb-4'>
        <X/>
      </button>
    </div>
  )
}

export default MobileNavigation
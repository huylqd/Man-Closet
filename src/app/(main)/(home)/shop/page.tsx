"use client"

import Breadcrumb from '@/components/breadcrumb'
import { GridView } from '@/components/dataViews'
import React from 'react'

const ShopPage = () => {
  return (
    <>
      <Breadcrumb/>
      <div>
        <GridView marginLeft='40px' previews={4} wrap >
          
        </GridView>
      </div>
    </>
  )
}

export default ShopPage
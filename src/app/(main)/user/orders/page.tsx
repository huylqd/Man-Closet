

import Purchase from '@/components/main/pageComponents/users/purchase/Purchase';
import { PrivateRouter } from '@/components/privateRouter';
import {  useUserInfo } from '@/hooks';
import { getBillByUser } from '@/services/order/order';
import React, { useEffect, useState } from 'react'

const OrdersPage = () => {
  
  return (
    <div > 
      <PrivateRouter allowedRoles={['member']}>
      <Purchase/>
      </PrivateRouter>
  
    </div>
  )
}

export default OrdersPage


import Purchase from '@/components/main/pageComponents/users/purchase/Purchase';
import { PrivateRouter } from '@/components/privateRouter';
import { getBillByUser } from '@/services/order/order';
import React, { useEffect, useState } from 'react'

const PurchaseLayout = () => {
    
  return (
    <div>
      <PrivateRouter allowedRoles={['member']}>
      <Purchase/>
      </PrivateRouter>
  
    </div>
  )
}

export default PurchaseLayout
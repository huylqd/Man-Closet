

import Purchase from '@/components/main/pageComponents/users/purchase/Purchase';
import { getBillByUser } from '@/services/order/order';
import React, { useEffect, useState } from 'react'

const PurchaseLayout = () => {
    
  return (
    <div>
        <Purchase/>
    </div>
  )
}

export default PurchaseLayout
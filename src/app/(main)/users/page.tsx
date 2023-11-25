'use client'
import { PrivateRouter } from '@/components/privateRouter';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const User = () => {
    const router = useRouter();
    useEffect(() => {
        router.replace('/users/profile');
      }, []);
    
      // You can also provide some loading message here
    
    
    return (
      <PrivateRouter allowedRoles={['member']}>
      {null}
    </PrivateRouter>
    )

  
    }

export default User
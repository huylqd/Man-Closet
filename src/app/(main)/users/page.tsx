'use client'
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const User = () => {
    const router = useRouter();
    useEffect(() => {
        router.replace('/users/profile');
      }, []);
    
      return null; // You can also provide some loading message here
    }
    

  
  

export default User
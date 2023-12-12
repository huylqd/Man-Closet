'use client'
import { useCurrency } from "@/hooks";
import { getAllCategory } from "@/services/categories/category"
import { useEffect, useState } from "react";



const getAllCategories = () => {
    const [categories, setCategories] = useState([])
  
    useEffect(() => {
      
    }, [])
  
    return categories;
  };


export const dataFake = [
    {
        title: 'Danh mục',
        data: [
                {name:"Duy"},
                {name:"Duy"},
                {name:"Duy"},
            ]
        },
      {
        title: 'Đánh giá',
        data: [
            {name:"Duy"},
            {name:"Duy"},
            {name:"Duy"},
        ]
    },
      {
        title: 'Giá',
        data: [
            { name:`Dưới ${useCurrency(100000)}`,maxPrice: 100000},
            { name:`${useCurrency(100000)} - ${useCurrency(200000)}`,minPrice: 100000,maxPrice: 200000},
            { name:`${useCurrency(200000)} - ${useCurrency(500000)}`,minPrice:200000,maxPrice:500000 },
            { name:`${useCurrency(500000)} - ${useCurrency(1000000)}`,minPrice:500000,maxPrice:1000000 },
            { name:`${useCurrency(1000000)} - ${useCurrency(5000000)}`,minPrice:1000000,maxPrice:5000000 },
            { name:`Trên ${useCurrency(5000000)}`,minPrice:5000000 },
        ]
    }
    ,
      {
        title: 'Size',
        data: [
            { name:"Duy" },
            { name:"Duy" },
            { name:"Duy" },
        ]
    }
      
    
]
'use client'

import { ICategory } from '@/interfaces/category';
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import "./category.scss"
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useCurrency } from '@/hooks';
import { getAllCategory } from '@/services/categories/category';


import { useAppDispatch, useAppSelector } from '@/redux/store';
import { getProductByPrice, getProductBySize, getProductsByCategoryId, setPage, } from '@/redux/reducer/product.reducer';
import { useSelector } from 'react-redux';
interface CategoryProp {
    title: string;
    data: ICategory[];
    isOpen:boolean;
    onCategoryClick:(index:any) => void
  
}

const CategoryContainer = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    try {
      const response:any = await getAllCategory(0, Number.MAX_SAFE_INTEGER);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const data = [
   {
       title: 'Loại sản phẩm',
       data:categories
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
          { name:"S",size:"S" },
           { name:"M",size:"M" },
           { name:"L" ,size:"L"},
           { name:"XL" ,size:"XL"},
           { name:"2XL",size:"2XL" },
           { name:"3XL" ,size:"3XL"},
       ]
   }
       
]
    const [openCategory, setOpenCategory] = useState(null);
    const handleCategoryClick = (index:any) => {
      setOpenCategory((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
      <div className=" w-[120%] md:w-[80%]">
        {data.map((data, index) => (
          <Category
            key={index}
            title={data.title}
            data={data.data}
            isOpen={index === openCategory}
            onCategoryClick={() => handleCategoryClick(index)}
          />
        ))}
      </div>
    );
  };
  

const Category = ({ title, data, isOpen, onCategoryClick }:CategoryProp) => {
  const [selected,setSelected] = useState<any>([])
  const [currentPage,setCurrentPage] = useState<number>(1);
  const dispatchThunk = useAppDispatch();
 
  const {pageNumber} = useAppSelector((state) => state.product.page)

  console.log(pageNumber);
  
  const handleChangeData = async (e: React.ChangeEvent<HTMLInputElement>,data:any) => {
    if(e.target.checked){
      setSelected((prev:any) => [...prev,data]) 
        if(title === "Loại sản phẩm"){
        
          const body = { 
            page:pageNumber,
            categoryId: data._id
          }
          dispatchThunk(getProductsByCategoryId(body))
      } 
      if(title === "Giá"){
        const body = {
          page:pageNumber,
          minPrice:data.minPrice,
          maxPrice:data.maxPrice
        }
        dispatchThunk(getProductByPrice(body))

      }
      if(title === "Size"){
        // const fetchData = await filterProductBySize(0,data.size)
        const body = {
          page:pageNumber,
          size:data.size
        }
        dispatchThunk(getProductBySize(body))
      }
     
    }
  }
    
  
 
 
  
    return (
      
       <div className='flex flex-col rounded-lg w-[90%]'>
        <button onClick={onCategoryClick}  className='p-4  flex items-center justify-between tracking-wider font-bold text-sm  border-b-2 transition duration-300 '>
          {title}
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
        <div className={`transition-all ease-in-out duration-500 transform ${isOpen ? 'opacity-100 ' : 'opacity-0 '}`}>
        {isOpen && (
          <div  className="flex flex-col items-start rounded-lg p-2 ">
            {data?.map((item, i) => (
              <div className="flex  justify-start cursor-pointer rounded-r-lg border-l-transparent" key={i}>
                <input type="checkbox" className="accent-zinc-800" onChange={(e) => handleChangeData(e,item)}/>
                <h3 className="p-4 text-xs">{item.name}</h3>
              </div>
            ))}
          </div>
        )}
        </div>
        
      </div>
    
    
    );
  };



export default CategoryContainer
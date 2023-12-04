'use client'

import { ICategory } from '@/interfaces/category';
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import "./category.scss"
import { ChevronDown, ChevronUp } from 'lucide-react';
import { getAllCate } from './dataFake';
interface CategoryProp {
    title: string;
    data: ICategory[];
    isOpen:boolean;
    onCategoryClick:(index:any) => void
  
}
interface ModalCate{
    data:Array<any>,

}
const CategoryContainer = ({ data }:ModalCate) => {
  
  getAllCate()
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
                <input type="checkbox" className="accent-zinc-800" />
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

import TitleGap from '@/components/titleGap';
import { ICategory } from '@/interfaces/category';
import React from 'react'
import { v4 as uuidv4 } from "uuid";
interface CategoryProp {
    title: string;
    data: ICategory[];
}
const Category = ({ title, data }: CategoryProp) => {
    return (
        <div className="mt-1 pr-4 overflow-x-auto md:w-full ">
            <TitleGap title={title}/>
            <div className="hidden md:block">
                {data?.map((category, index) => {
                    return (<div key={uuidv4()} className='flex flex-row align-center   mb-8 pt-1 justify-center '>

                        <input type="checkbox" value={category?._id} className="mr-4 bg-gray-500 text-gray-500  dark:text-white dark:border-white border-2 dark:focus:ring-primary-600 dark:ring-offset-gray-100 accent-zinc-800  
                            dark:accent-zinc-100" />
                        <p>{category.name}</p>
                    </div>)
                })}


            </div>
        </div>
    )
}

export default Category
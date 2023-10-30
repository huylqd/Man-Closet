
import TitleDivide from '@/components/titleDivide'
import { ICategory } from '@/interfaces/category';
import React from 'react'
import { v4 as uuidv4 } from "uuid";
interface CategoryProp {
    title: string;
    data: ICategory[];
}
const Category = ({ title, data }: CategoryProp) => {
    return (
        <div>
            <TitleDivide title={title} align="center" />

            <div>
                {data?.map((category, index) => {
                    return (<div key={uuidv4()} className='flex flex-row align-center mb-8  '>

                        <input type="checkbox" value="" className="mr-4 bg-gray-500  dark:text-white dark:border-white border-2 dark:focus:ring-primary-600 dark:ring-offset-gray-100 accent-zinc-800  
                            dark:accent-zinc-100" />
                        <p>{category.name}</p>
                    </div>)
                })}


            </div>
        </div>
    )
}

export default Category
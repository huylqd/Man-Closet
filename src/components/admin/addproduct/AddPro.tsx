'use client'
import { getAllCategory } from '@/services/categories/category'
import { createPro } from '@/services/products/products'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

const AddPro = () => {
  const [cate, setCate] = useState([])
  useEffect(() => {
    getAllCategory().then(({ data }) => setCate(data.data))
  }, [])
  

  const {
    register,
    handleSubmit
  } = useForm()
  const onHandleSubmit = async(data:any) => {
    const body = {
      productName: data.productName,
      price: data.price,
      description: data.description,
      properties: [{
        imageUrl: data.imageUrl,
        color: data.color,
        quantity: data.quantity,
        size: data.size,
     } ],
     categoryId: data.categoryId
    }
    
    await createPro(body)
    
  }
  console.log(cate);
  return (
    <section className="bg-white dark:bg-gray-900">
           
      {/* <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
        <form action="#" onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
              <input type="text" {...register('productName')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required={true} />
            </div>
           
            <div className="w-full">
              <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
              <input type="number" {...register('price')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required={true} />
            </div>
            <div>
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
              <select {...register('categoryId')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <option selected={true} hidden>Select category</option>
              {cate?.map((item: any) => {
                  return (                 
                      <option value={item._id}>{item.name}</option>                    
                  )
                })}

              </select>
            </div>
            <form action="">
              
            <div>
              <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
              <input type="text" {...register('imageUrl')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required={true} />
            </div>
            <div className="w-full">
              <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
              <input type="text" {...register('quantity')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required={true} />
            </div>
            <div>
              <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
              <input type="text" {...register('color')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required={true} />
            </div>
            <div>
              <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Size</label>
              <input type="text" {...register('size')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required={true} />
            </div>
            </form>
            
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <textarea {...register('description')} rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
            </div>
          </div>
          <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Add product
          </button>
        </form>
      </div> */}
    </section>
  )
}

export default AddPro

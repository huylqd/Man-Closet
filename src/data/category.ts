

import { getAllCategory, getCategoryById } from "@/services/categories/category";
import { log } from "console";
import { useEffect, useState } from "react"



export const listCategory = () => {
    const [category, setCategory] = useState<any>();

  useEffect(() => {
    getAllCategory()?.then(({data}:any) => setCategory(data.data))
  }, [])
  return category
//   console.log(category);
}

export const getProductsByCategory = (id: string) => {
    const [products, setProducts] = useState([])
    console.log('id' ,id);
    
      useEffect(() => {
        getCategoryById(id).then(({data}:any) => setProducts(data))
        // console.log('ducdeptrai',products);
      })
    
}
 
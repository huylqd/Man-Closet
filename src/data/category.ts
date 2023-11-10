

import { getAllCategory, getCategoryById } from "@/services/categories/category";
import { log } from "console";
import { useEffect, useState } from "react"



<<<<<<< HEAD
export const fetchData = async (currentPage: number) => {
  const response = await getAllCategory(currentPage);
    if (response) {
      const { data } = response;
      console.log(data);
      
     
    }
 
    return response?.data
};
=======
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
 
>>>>>>> 7d5cbb1aef731f5b54f9945659e0662b73c92024

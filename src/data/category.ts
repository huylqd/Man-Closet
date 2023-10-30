

import { getAllCategory } from "@/services/categories/category";
import { useEffect, useState } from "react"



export const listCategory = () => {
    const [category, setCategory] = useState<any>();

  useEffect(() => {
    getAllCategory()?.then(({data}:any) => setCategory(data.data))
  }, [])
  return category
//   console.log(category);
}
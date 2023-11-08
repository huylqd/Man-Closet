

import { getAllCategory } from "@/services/categories/category";
import { useEffect, useState } from "react"



export const fetchData = async (currentPage: number) => {
  const response = await getAllCategory(currentPage);
    if (response) {
      const { data } = response;
      console.log(data);
      
     
    }
 
    return response?.data
};
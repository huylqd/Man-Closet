import { getAllCategory } from "@/services/categories/category"





export const getAllCate = async () => {
    try {
        const res = await getAllCategory(0,Number.MAX_SAFE_INTEGER)
        
        
        return res?.data;
    } catch (error) {
        
    }
  
    
}
export const dataFake = [
    {
        title: 'Category',
        data: [
                {name:"Duy"},
                {name:"Duy"},
                {name:"Duy"},
            ]
        },
      {
        title: 'Rating Item',
        data: [
            {name:"Duy"},
            {name:"Duy"},
            {name:"Duy"},
        ]
    },
      {
        title: 'Price Filter',
        data: [
            { name:"Duy" },
            { name:"Duy" },
            { name:"Duy" },
        ]
    }
    ,
      {
        title: 'Filter By Color',
        data: [
            { name:"Duy" },
            { name:"Duy" },
            { name:"Duy" },
        ]
    }
      
    
]
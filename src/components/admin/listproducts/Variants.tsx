import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
interface IVariants {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;

}
const Variants = ({register, errors}:IVariants) =>{
    const [arrIndex, setArrIndex] = useState<number[]>([]);
      const [variantCounter, setVariantCounter] = useState(0);
      const addNewVariant = () => {
        setArrIndex((prevIndexes) => [...prevIndexes, variantCounter]);
        setVariantCounter((prevCounter) => prevCounter + 1);
    };

    const removeVariant = (index: any) => () => {
        setArrIndex((prevIndexes) => prevIndexes.filter((item) => item !== index));
        // Không cần giảm giá trị của variantCounter vì nó không được sử dụng cho bất kỳ thứ gì khác
    };
  return (
    <div className="w-[60%]">
         <Button className='w-[30%]' variant={'primary'} type="button" onClick={addNewVariant} >
                Thêm variant
        </Button>
<div  className='  flex flex-row flex-wrap items-center justify-around '>      
        {arrIndex.map((item1,index1:any) => {   
        return (<><div className='w-[30%]' key={uuidv4()} >
        <label htmlFor="length" className="block text-sm font-medium text-gray-900 dark:text-white">Size</label>
        <input type="text" {...register(`properties[0].variants[${index1}].size`,{
            required:"Size bắt buộc nhập"
        })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="M..."  />
          <span className="text-red-600 text-sm">
            {(errors?.properties?.[0]?.variants?.[index1]?.size as any) && (errors?.properties?.[0]?.variants?.[index1]?.size as any).message}

</span>     
    </div>
    <div className='w-[30%]'>
        <label htmlFor="width" className="block text-sm font-medium text-gray-900 dark:text-white">Số lượng</label>
        <input type="number" {...register(`properties[0].variants[${index1}].quantity`,{
            required:"Số lượng bắt buộc nhập",
            validate: (val) => {
                if (isNaN(val)) {
                    return "Vui lòng nhập một số";
                  }
            }
        })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="23" />
        <span className="text-red-600 text-sm">
{(errors?.properties?.[0]?.variants?.[index1]?.quantity as any) && (errors?.properties?.[0]?.variants?.[index1]?.quantity as any).message}

</span>    
    </div>
    <Button variant={'primary'} type="button" className='mt-7' onClick={removeVariant(item1)}>
    Xóa variant
</Button>
    
    </>)
    })}

</div>
    </div>
    
  )
}

export default Variants
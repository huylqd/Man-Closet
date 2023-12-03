import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import "./modalFilter.scss"
import { Category } from '..';
import { categoryCarouselData } from '@/app/(main)/(home)/demo.data';

interface ModalFilter {
    onClose: () => void;
    isOpen: boolean;
   
  }
const ModalFilter = ({onClose,isOpen}:ModalFilter) => {
    useEffect(() => {
        if (!isOpen) {
          return;
        }
        document.body.style.marginRight = `${
          window.innerWidth - document.documentElement.clientWidth
        }px`;
        document.body.style.overflow = "hidden";
        return (): void => {
          document.body.style.overflow = "unset";
          document.body.style.marginRight = "0px";
        };
      }, [isOpen]);
 
  return (
    <>
      <div
        onClick={() => onClose()}
        className={cn(
          "blur_layer inset-0 fixed z-30",
          isOpen ? "block" : "hidden"
        )}
      ></div>

      <div
        className={cn(
          "atc_modal fixed z-50 top-0  right-0 bg-white rounded-t-lg md:rounded-l  h-screen w-[46%] lg:w-[360px] p-3 md:p-5  ",
          isOpen ? "open" : "close"
        )}
      >
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-between items-start">
          <div className="flex flex-col align-center justify-between   ">
              <Category  title="Product Brand" data={categoryCarouselData}/>
              <Category title="Categories" data={categoryCarouselData} />
              <Category  title="Riting Item" data={categoryCarouselData} />
              <Category  title="Price Filter" data={categoryCarouselData} />
            </div>
            <div className="p-1">
              <X onClick={() => onClose()} className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
       

        

         
        </div>
      </div>
    </>
  )
}

export default ModalFilter
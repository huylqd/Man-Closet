import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import React from 'react'


interface Pagination{
    totalPages:number,
    currentPage:number,
    onPageChange: (page:number) => void
}
const Pagination = ({totalPages, currentPage, onPageChange}:Pagination) => {

    const handle = (page:number) => {
        onPageChange(page)
    }
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(
            <button
            aria-current="page"
            className={`cursor-pointer border border-gray-300  relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ${
                i === currentPage
                  ? 'focus:bg-slate-200 bg-zinc-800  text-white' // Màu nền cho trang hiện tại
                  : 'bg-zinc-100  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600'
              }`}
              key={i}
              onClick={() => handle(i)}
              disabled={i === currentPage}
            >
              {i}
            </button>
          );
        }
        return pageNumbers;
      };
   
    
  return (
    <div className="flex items-center w-full justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
    
    <div className=" sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
          <span className="font-medium">97</span> results
        </p>
      </div>
      <div>
        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <button
           onClick={() => onPageChange(currentPage - 1)}
           
           disabled={currentPage === 1 ? true : false}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only" >Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          
       {renderPageNumbers()}
         
        
          <button
            onClick={() => onPageChange(currentPage + 1)}
           
            disabled={currentPage === totalPages ? true : false}
      
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </div>
  </div>
  )
}

export default Pagination
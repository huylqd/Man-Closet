"use client";
import { ICategory } from "@/interfaces/category";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "@/services/categories/category";
import React, { useEffect, useRef, useState } from "react";
import ModelCategory from "./ModelCategory";
import Toaster from "@/components/Toaster/Toaster";
import Pagination from "@/components/pagination/Pagination";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const ManagementCategory = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [categoriesAll, setCategoriesAll] = useState<ICategory[]>([]);
  const [modal, setModal] = useState(false);
  const [currentPage,setCurrentPage] = useState<number>(1);
  const [totalPages,setTotalPages] = useState<number>(1);
  const [category, setCategory] = useState<any>();
  const [key, setKey] = useState<string>('');
  const toasterRef = useRef<any>(null);
 useEffect(() => {
    fetchData(currentPage)
  }, []);
  
  
  const fetchData = async (currentPage: number) => {
    if(currentPage !== 0){
      const response = await getAllCategory(currentPage);
      if (response) {
        const  data:any  = response;
      
        
        setCategories(data.data)
        setTotalPages(data.paginate.totalPages)
      } else {

      }
    }else{
      const response = await getAllCategory(currentPage);
      if (response) {
        const  data:any  = response;
        setCategoriesAll(data.data)
        setTotalPages(data.paginate.totalPages)
      } else {

      }
    }
  

  };


  const handleDelete = (id: string | undefined) => {
    const confirm = window.confirm("Bạn có chắc muốn xóa không ?");
    if (confirm) {
      deleteCategory(id)
        .then(({ data }: any) => {
          // alert("Xóa thành công!");
          toasterRef.current.showToast("success", "Delete successfully");
          setCategories(
            categories.filter((item) => item._id !== data._id)
          );
   
        })
        .catch((err) => {
          toasterRef.current.showToast("error", "Delete Fail!");
        });
    }
  };
  const handleUpdate = async (category: ICategory) => {
    
   await updateCategory(category)
      .then((cate) => {
        // console.log(cate);
        // Gọi hàm showToast bên trong component Toaster
        toasterRef.current.showToast("success", "Update successfully!");
        // toast.success('Cập nhật thành công');
        setCategories(
          categories.map((item) =>
            item._id === category._id ? category : item
          )
        );
        setModal(false);
      })
      .catch(() => {
        toasterRef.current.showToast("error", "Update Fail!");
      });
  };
  const handleAdd = async (category: ICategory) => {  
  await  addCategory(category)
      .then(({ data }: any) => {
        console.log(data);

        // getAllCategory()?.then(({ data }) => setCategories(data.data));
        const newCategories = [...categories];
        // Thêm sản phẩm mới vào danh sách
        newCategories.push(data);
        // Cập nhật state `categories` với danh sách mới
        setCategories(newCategories);
        toasterRef.current.showToast("success", "Add successfully!");
        setModal(false);
        fetchData(currentPage)
      })
      .catch(() => {
        toasterRef.current.showToast("error", "Add Fail!");
      });
  };
  const handleChangePage = (page:number) => {
    setCurrentPage(page)
    fetchData(page)
  }

  
  
  const search = async () => {
    if(!key ){
   await  fetchData(currentPage)

    }else{
      await  fetchData(0)
      // console.log(categoriesAll);
      const regex = new RegExp(key, 'i');
      const temp = await categoriesAll
      let resultSearch = await  temp.filter((c:ICategory) => {
         // Chuyển chuỗi `key` và tên danh mục thành chữ thường và tách thành mảng từ
        const keyWords = key.toLowerCase().split(' ');
        const categoryWords = c.name.toLowerCase().split(' ')
          // Kiểm tra xem có ít nhất một từ trong `keyWords` tồn tại trong `categoryWords`
        return keyWords.some((word) => categoryWords.some((categoryWord) => categoryWord.includes(word)));
        // regex.test(c.name)
      }
    
    );
    console.log(resultSearch);
    
    setCategories(resultSearch);
    // fetchData(currentPage)
    }
  }
  console.log(categories);
  
  const handleChange = (e:any) => {
    setKey(e.target.value)
  }

  return (
    <div>
      <div className="relative overflow-x-auto">

        <section>
          <div>
            <h1 className="font-bold text-xl pt-6 pb-6 dark:text-black">
              Management Categories
            </h1>
          </div>
          <div className="font-bold text-xl pb-6">
            <form className="pb-6">
              <div className="flex">
                <label
                  htmlFor="-dropdown"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Your Email
                </label>
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                  type="button"
                >
                  All categories
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Mockups
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Templates
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Design
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Logos
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="relative w-full">
                  <input
                    type="search"
                    onChange={handleChange}
                    id="search-dropdown"
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-500"
                    placeholder="Search Mockups, Logos, Design Templates..."
              
                  />
                  <button
                    type="button"
                    onClick={() => search()}
                    className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
            <button
              type="submit"
              onClick={() => {
                setModal(true);
                setCategory(false);
              }}
              className="text-white inline-flex items-center bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                className="mr-1 -ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              New Category
            </button>
          </div>
        </section>
        <table className="w-full text-sm text-left table-auto text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                STT
              </th>
              <th scope="col" className="px-6 py-3">
                Category name
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((cate, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{cate.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-4">
                      <button
                        type="button"
                        onClick={() => {
                          setModal(true);
                          setCategory(cate);
                        }}
                        data-drawer-show="drawer-update-product"
                        aria-controls="drawer-update-product"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2 -ml-0.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(cate._id)}
                        data-modal-target="delete-modal"
                        data-modal-toggle="delete-modal"
                        className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2 -ml-0.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handleChangePage}/>
      </div>
      <Toaster ref={toasterRef} />
      <ModelCategory
        isvisible={modal}
        add={handleAdd}
        update={handleUpdate}
        category={category}
        onClose={() => setModal(false)}
      />
    </div>
  );
};

export default ManagementCategory;

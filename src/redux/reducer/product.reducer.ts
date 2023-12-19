import { IProduct, IProductInCart, Property } from "@/interfaces/product";
import { getAllProductInCart } from "@/services/cart.services";
import { filterProductByPrice, filterProductBySize, getAll, getAllProduct, getProductByCategoryId, getProductById } from "@/services/products/products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
interface ProductState {
  products: IProduct[];
  product: IProduct;
  productList:IProduct[],
  page:{
    pageNumber: number
  }
}

const initialState: ProductState = {
  products: [],
  product: {
    _id: "",
    productName: "",
    price: 0,
    description: "",
    properties: [],
    categoryId: "",
    couponId: "",
  },
  productList:[],
  page:{
    pageNumber:1
  }
};

export const getProductState = createAsyncThunk(
  "product/getProductById",
  async (product_id: string, thunkAPI) => {
    const response = await getProductById(product_id);
    return response.data;
  }
);
export const getProductByPrice = createAsyncThunk(
  "product/getProductByPrice",
  async (data:any) => {
    const {page,minPrice,maxPrice} = data;
    const response:any = await filterProductByPrice(page,minPrice,maxPrice);
    return response;
  }
);
export const getProductsByCategoryId = createAsyncThunk(
  "product/getProductByCategoryId",
  async (data:any) => {
    const {page,categoryId} = data;
    const response:any = await getProductByCategoryId(page,categoryId);
    return response;
  }
);
export const getProductBySize = createAsyncThunk(
  "product/getProductBySize",
  async (data:any) => {
    const {page,size} = data;
    const response:any = await filterProductBySize(page,size);
    // console.log(response);
    
    return response;
  }
);

export const getAllProductState = createAsyncThunk(
  "product/getAllProduct",
  async(_, thunkAPI) => {
    const response = await getAllProduct()
    return response.data
  }
)
export const getsProduct = createAsyncThunk(
  "product/getsProduct",
  async(page:number, thunkAPI) => {
    const response:any = await getAll(page)
    return response
  }
)

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page.pageNumber = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(getProductState.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(getAllProductState.fulfilled, (state, action) => {
      state.products = action.payload
    });
    builder.addCase(getProductByPrice.fulfilled, (state, action) => {
      state.productList = action.payload
    });
    builder.addCase(getProductBySize.fulfilled, (state, action) => {
      state.productList = action.payload
    });
    builder.addCase(getProductsByCategoryId.fulfilled, (state, action) => {
      state.productList = action.payload
    });
    builder.addCase(getsProduct.fulfilled, (state, action) => {
      state.productList = action.payload
    })
  },
});

export const {setPage} = productSlice.actions;
export default productSlice.reducer;

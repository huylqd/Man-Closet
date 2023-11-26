import { IProduct, IProductInCart, Property } from "@/interfaces/product";
import { getAllProductInCart } from "@/services/cart.services";
import { getAllProduct, getById } from "@/services/products/products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ProductState {
  products: IProduct[];
  product: IProduct;
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
};

export const getProduct = createAsyncThunk(
  "product/getProducts",
  async (product_id: string, thunkAPI) => {
    const response = await getById(product_id);
    return response.data;
  }
);

export const getAllProductState = createAsyncThunk(
  "product/getAllProduct",
  async(_, thunkAPI) => {
    const response = await getAllProduct()
    return response.data
  }
)

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(getAllProductState.fulfilled, (state, action) => {
      state.products = action.payload
    })
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;

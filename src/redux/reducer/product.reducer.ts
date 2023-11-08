import { IProduct, IProductInCart, Property } from "@/interfaces/product";
import { getAllProductInCart } from "@/services/cart.services";
import { getById } from "@/services/products/products";
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
  "cart/getProducts",
  async (product_id: string, thunkAPI) => {
    const response = await getById(product_id);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;

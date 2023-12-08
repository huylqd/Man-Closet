import { IProductInCart } from "@/interfaces/product";
import { addProductToCartAxios, getAllProductInCart } from "@/services/cart.services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CartState {
  products: IProductInCart[];
}

const initialState: CartState = {
  products: [],
};

export const getProductsInCart = createAsyncThunk(
  "cart/getProductsInCart",
  async (_, thunkAPI) => {
    const response = await getAllProductInCart();
    return response.result;
  }
);

interface AddProductToCartBody {
  user_id: string;
  product: IProductInCart;
}

export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async(data: AddProductToCartBody, thunkAPI) => {
    const {user_id, product} = data
    const response = await addProductToCartAxios(user_id, product)
    return response.data
  }
)

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(getProductsInCart.fulfilled, (state, action) => {
      state.products = action.payload;
    })
    .addCase(addProductToCart.fulfilled,(state, action) => {
      state.products.push(action.payload)
    })
  },
});

export const {} = cartSlice.actions
export default cartSlice.reducer;

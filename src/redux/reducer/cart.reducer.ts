import {
  FulfilledAction,
  PendingAction,
  RejectedAction,
} from "@/interfaces/asyncThunk";
import { IProductInCart, ProductInCart } from "@/interfaces/product";
import {
  addProductToCartAxios,
  deleteProductInCart,
  getAllProductInCart,
} from "@/services/cart.services";
import { commonErrorToast } from "@/utils/notify";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CartState {
  products: IProductInCart[];
  currentRequestId: undefined | string;
  loading: boolean;
  message: undefined | string;
}

const initialState: CartState = {
  products: [],
  currentRequestId: undefined,
  loading: false,
  message: undefined,
};

export const getProductsInCart = createAsyncThunk(
  "cart/getProductsInCart",
  async (_, thunkAPI) => {
    const response = await getAllProductInCart(thunkAPI.signal);
    return response.result;
  }
);

interface AddProductToCartBody {
  user_id: string;
  product: IProductInCart;
}

export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async (data: AddProductToCartBody, thunkAPI) => {
    const { user_id, product } = data;
    const response = await addProductToCartAxios(user_id, product);
    return response.data;
  }
);

type DeleteProductInCartParams = {
  user_id: string;
  data: ProductInCart[];
};
export const deleteProductInCartAsync = createAsyncThunk(
  "cart/deleteProduct",
  async ({ user_id, data }: DeleteProductInCartParams, {rejectWithValue, fulfillWithValue}) => {
    try {
      const response = await deleteProductInCart(user_id, data)
      return fulfillWithValue(response.data)
    } catch (error: any) {
      if(error.name === "AxiosError" && error.status === 404){
        return rejectWithValue(error.response.data)
      }
      throw error
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProductsInCart.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(deleteProductInCartAsync.fulfilled, (state, action) => {
        state.products = action.payload
      })
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith("/pending"),
        (state, action) => {
          state.loading = true;
          state.currentRequestId = action.meta.requestId;
        }
      )
      .addMatcher<RejectedAction>(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          if (
            state.loading &&
            action.meta.requestId === state.currentRequestId
          ) {
            state.loading = false;
            state.currentRequestId = undefined;
          }
        }
      )
      .addMatcher<FulfilledAction>(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          if (
            state.loading &&
            action.meta.requestId === state.currentRequestId
          ) {
            state.loading = false;
            state.currentRequestId = undefined;
          }
        }
      );
  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;

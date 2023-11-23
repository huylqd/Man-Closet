import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cart.reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productReducer from "./reducer/product.reducer";
import orderReducer from "./reducer/order.reducer";
import userReducer from "./reducer/user.reducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    order: orderReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// useAppDispatch dung de dispatch nhung action cua asyncThunk
export const useAppDispatch = () => useDispatch<AppDispatch>()

import { OrderItem } from "@/interfaces/order.interface";
import { ProductSold } from "@/interfaces/product";
import { Thongkedoanhthu, Thongkedonhang } from "@/services/analyst/analyst";
import { getAllOrderBill, getProductSold } from "@/services/order/order";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface OrderState {
  productSold: ProductSold[];
  orders: OrderItem[];
  countBill: number;
  doanhthu: number;
}

const initialState: OrderState = {
  productSold: [],
  orders: [],
  countBill: 0,
  doanhthu: 0,
};

export const getProductSoldState = createAsyncThunk(
  "order/getProductSold",
  async (_, thunkAPI) => {
    const response = await getProductSold();
    return response.data;
  }
);

export const getAllOrderBillState = createAsyncThunk(
  "order/getAllOrderBill",
  async (_, thunkAPI) => {
    const response = await getAllOrderBill(0, Number.MAX_SAFE_INTEGER);
    return response.data;
  }
);
export const getCountBillState = createAsyncThunk(
  "order/getCountBill",
  async (_, thunkAPI) => {
    const response = await Thongkedonhang();
    return response.data;
  }
);
export const getDoanhThuState = createAsyncThunk(
  "order/getDoanhThu",
  async (_, thunkAPI) => {
    const response = await Thongkedoanhthu();
    return response.data;
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProductSoldState.fulfilled, (state, action) => {
      state.productSold = action.payload;
    }),
      builder.addCase(getAllOrderBillState.fulfilled, (state, action) => {
        state.orders = action.payload;
      }),
      builder.addCase(getCountBillState.fulfilled, (state, action) => {
        state.countBill = action.payload[0].totalOrders;
      });
    builder.addCase(getDoanhThuState.fulfilled, (state, action) => {
      state.doanhthu = action.payload[0].totalAmountSold;
    });
  },
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;

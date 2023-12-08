
import { OrderItem } from "@/interfaces/order.interface"
import { ProductSold } from "@/interfaces/product"
import { getAllOrderBill, getProductSold } from "@/services/order/order"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface OrderState {
  productSold: ProductSold[]
  orders: OrderItem[]
}

const initialState : OrderState = {
  productSold: [],
  orders: []
}

export const getProductSoldState = createAsyncThunk(
  "order/getProductSold",
  async(_, thunkAPI) => {
    const response = await getProductSold()
    return response.data
  }
)

export const getAllOrderBillState = createAsyncThunk(
  "order/getAllOrderBill",
  async(_, thunkAPI) => {
    const response = await getAllOrderBill(0, Number.MAX_SAFE_INTEGER)
    return response.data
  }
)

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder.addCase(getProductSoldState.fulfilled, (state, action) => {
      state.productSold = action.payload
    }),
    builder.addCase(getAllOrderBillState.fulfilled, (state, action) => {
      state.orders = action.payload
    })
  }
})

export const {} = orderSlice.actions
export default orderSlice.reducer
import { IUser } from "@/interfaces/user";
import { User } from "@/interfaces/user.interface";
import { TAddress, addNewAddress } from "@/services/address.services";
import { getAllUser, getUserById, updateUserInfo } from "@/services/user/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: IUser;
  users: User[];
  address: TAddress[]
}

const initialState: UserState = {
  user: {} as IUser,
  users: [],
  address: []
};

// asyncThunk
export const getAllUserState = createAsyncThunk(
  "user/getAllUser",
  async(_, thunkAPI) => {
    const response = await getAllUser(0,5)
    return response.data
  }
)

export const getUserByIdState = createAsyncThunk(
  "user/getUserById",
  async(id:string, thunkAPI) => {
    const response = await getUserById(id)
    return response.data
  }
)


interface UpdateUserInfoParams{
  id:string,
  data: {
    [key:string] : number | string | boolean
  }
}
export const updateUserInfoState = createAsyncThunk(
  "user/updateUserInfo",
  async(value : UpdateUserInfoParams, thunkAPI) => {
    const {id,data} = value
    const response = await updateUserInfo(id, data)
    return response.data
  }
)

// address
type AddNewAddressStateParams = {
  user_id:string,
  data: {
    city: string,
    district: string,
    wards: string,
    detailAddress:string
  }
}
export const addNewAddressState = createAsyncThunk(
  "address/addNewAddress",
  async({user_id, data}:AddNewAddressStateParams, thunkAPI) => {
    const response = await addNewAddress(user_id, data)
    return response.data
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder.addCase(getAllUserState.fulfilled, (state, action) => {
      state.users = action.payload
    }),
    builder.addCase(getUserByIdState.fulfilled, (state, action) => {
      state.user = action.payload
    }),
    builder.addCase(updateUserInfoState.fulfilled, (state, action) => {
      state.user = action.payload
    }),
    builder.addCase(addNewAddressState.fulfilled, (state, action) => {
      state.address.push(action.payload)
    })
  }
})

export const {} = userSlice.actions
export default userSlice.reducer

import { IUser } from "@/interfaces/user";
import { User } from "@/interfaces/user.interface";
import { TAddress, addNewAddress } from "@/services/address.services";
import { deleteUserAddress, getAllUser, getUserAddress, getUserById, updateUserAddress, updateUserInfo } from "@/services/user/user";
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
  "user/addNewAddress",
  async({user_id, data}:AddNewAddressStateParams, thunkAPI) => {
    const response = await addNewAddress(user_id, data)
    return response.data
  }
)

export const getAddressByUserIdState = createAsyncThunk(
  "user/getAddressByUserId",
  async(id:string, thunkAPI) => {
    const response = await getUserAddress(id)
    return response.results
  }
)

type TDeleteAddress = {
  user_id: string
  address_id: string
}
export const deleteAddressState = createAsyncThunk(
  "user/deleteAddress",
  async({user_id, address_id}:TDeleteAddress, thunkAPI) => {
    const response = await deleteUserAddress(user_id, address_id)
    return response.data
  }
)

type TUpdateAddress = {
  user_id: string
  address_id: string
  data: {
    [key: string]: string | boolean
  }
}
export const updateUserAddressState = createAsyncThunk(
  "user/updateAddress",
  async({user_id,address_id,data} : TUpdateAddress, thunkAPI) => {
    const response = await updateUserAddress(user_id, address_id, data)
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
    }),
    builder.addCase(getAddressByUserIdState.fulfilled, (state, action) => {
      state.address = action.payload
    })
    builder.addCase(deleteAddressState.fulfilled, (state, action) => {
      state.address = action.payload
    }),
    builder.addCase(updateUserAddressState.fulfilled, (state, action) => {
      state.address = action.payload
    })
  }
})

export const {} = userSlice.actions
export default userSlice.reducer

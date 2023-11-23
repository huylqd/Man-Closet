import { User } from "@/interfaces/user.interface";
import { getAllUser } from "@/services/user/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: User;
  users: User[];
}

const dummyUserState = {
  _id: "",
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  address: [
    {
      city: "",
      district: "",
      wards: "",
      detailAdress: "",
    },
  ],
};

const initialState: UserState = {
  user: dummyUserState,
  users: [],
};

// asyncThunk
export const getAllUserState = createAsyncThunk(
  "user/getAllUser",
  async(_, thunkAPI) => {
    const response = await getAllUser()
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
    })
  }
})

export const {} = userSlice.actions
export default userSlice.reducer

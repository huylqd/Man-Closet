import { FulfilledAction, PendingAction, RejectedAction } from "@/interfaces/asyncThunk";
import { IComment } from "@/interfaces/comment";

import { DataComment, createComment, getCommentByProductId } from "@/services/comment/comment";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CommentState {
    comment: IComment[];
    currentRequestId: undefined | string;
    loading: boolean,
    message: undefined | string
}

const initialState: CommentState = {
    comment: [],
    currentRequestId: undefined,
    loading: false,
    message: ""
};
interface IData {
    productId: string | string[]
}
export const getAllCommentByProductId = createAsyncThunk(
    "comment/getAllCommentByProductId",
    async (data: IData, thunkAPI) => {
        const { productId } = data
        const response = await getCommentByProductId(productId);
        return response;
    }
);
export const postComment = createAsyncThunk("comment/postComment", async (data: DataComment, thunkAPI) => {
    const response = await createComment(data)
    console.log(response);
    return response
})



const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllCommentByProductId.fulfilled, (state, action) => {
            state.comment = action.payload

        })
        builder.addCase(postComment.fulfilled, (state, action: any) => {
            if (action.payload.data) {
                state.comment.unshift(action.payload.data)
                state.message = action.payload.message
            } else {
                state.message = action.payload.message
            }


        })
    },
});

export const { } = commentSlice.actions
export default commentSlice.reducer;

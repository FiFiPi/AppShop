import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import UserService from '../../services/user'

export const fetchAsyncGetMe = createAsyncThunk(
    'user/fetchAsyncGetMe',
    async (data, thunkAPI) => {
        const reponse = await UserService.get(data)
        return reponse.data
    }
)
export const fetchAsyncUpdate = createAsyncThunk(
    'user/fetchAsyncUpdate',
    async (data, thunkAPI) => {
        const reponse = await UserService.update(data)
        return reponse.data
    }
)
const userSlice = createSlice({
    name: 'User',
    initialState: {
        info: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncGetMe.fulfilled, (state, action) => {
                return {
                    ...state,
                    info: action.payload
                }
            })
            .addCase(fetchAsyncGetMe.rejected, (state, action) => {
                console.log(action.error.message)
            })
            .addCase(fetchAsyncUpdate.fulfilled, (state, action) => {
                console.log('fetchAsyncUpdate')
            })
            .addCase(fetchAsyncUpdate.rejected, (state, action) => {
                console.log(action.error.message)
            })
    }
})

export const { } = userSlice.actions
export default userSlice.reducer

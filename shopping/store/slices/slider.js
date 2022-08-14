import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import SliderService from '../../services/slider'
export const fetchSlider = createAsyncThunk(
    'slider/fetchSlider',
    async (data, thunkAPI) => {
        const response = await SliderService.list(data)
        return response.data
    }
)
const categorySlice = createSlice({
    name: 'Slider',
    initialState: {
        items: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSlider.fulfilled, (state, action) => {
                //console.log(action.payload)
                state.items = action.payload
            })
            .addCase(fetchSlider.rejected, (state, action) => {
                console.log(action.error.message)
            })
    },
})
export const { } = categorySlice.actions
export default categorySlice.reducer

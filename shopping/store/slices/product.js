import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ProductService from '../../services/product'

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (data, thunkAPI) => {
        const reponse = await ProductService.list(data)
        return {
            ...reponse,
            name: data.name,
            data: reponse.data
        }
    }
)
export const fetchSingleProduct = createAsyncThunk(
    'product/fetchSingleProduct',
    async (data, thunkAPI) => {
        const reponse = await ProductService.getSingle(data)
        return reponse.data
    }
)
const ProductSlice = createSlice({
    name: 'Product',
    initialState: {
        items: [],
        itemsSpec: [],
        itemsNew: [],
        product: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.fulfilled, (state, action) => {
                const { data, name } = action.payload
                return {
                    ...state,
                    [name]: data
                }
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                console.log(action.error.message)
            })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.product = action.payload
            })
            .addCase(fetchSingleProduct.rejected, (state, action) => {
                console.log(action.error.message)
            })
    }
})

export const { } = ProductSlice.actions
export default ProductSlice.reducer

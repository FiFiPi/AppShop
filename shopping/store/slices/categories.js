import { createSlice, createAsyncThunk, isAsyncThunkAction } from '@reduxjs/toolkit'
import CategoriesServies from '../../services/categories'

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (data, thunkAPI) => {
        const reponse = await CategoriesServies.list(data)
        return reponse.data
    }
)
export const fetchCategoriesInProduct = createAsyncThunk(
    'categories/fetchCategoriesInProduct',
    async (data, thunkAPI) => {
        const reponse = await CategoriesServies.listProduct(data)
        return reponse.data
    }
)
const categorySlice = createSlice({
    name: 'Category',
    initialState: {
        items: [],
        products: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                //  console.log(action.payload)
                // state.items = action.payload
                return {
                    ...state,
                    items: action.payload
                }
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                console.log(action.error.message)
            })
            .addCase(fetchCategoriesInProduct.fulfilled, (state, action) => {
                return {
                    ...state,
                    products: action.payload
                }
            })
            .addCase(fetchCategoriesInProduct.rejected, (state, action) => {
                console.log(action.error.message)
            })
    },
})

export const { } = categorySlice.actions
export default categorySlice.reducer

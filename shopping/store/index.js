import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import sliderReducer from './slices/slider'
import categoryReducer from './slices/categories'
import productReducer from './slices/product'
import filterReducer from './slices/filter'
import favoriteReducer from './slices/favorite'
import authReducer from './slices/auth'
import userReducer from './slices/user'
import cartReducer from './slices/cart'
import buyReducer from './slices/buy'

const store = configureStore({
    reducer: {
        Slider: sliderReducer,
        Category: categoryReducer,
        Product: productReducer,
        Filter: filterReducer,
        Favorite: favoriteReducer,
        Auth: authReducer,
        User: userReducer,
        Cart: cartReducer,
        Buy: buyReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })

})

export default store
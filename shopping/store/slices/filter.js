import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'Filter',
    initialState: {
        items: {
            toValue: 40000000,
            fromValue: 0,
            active: 'Mới nhất',
        },
    },
    reducers: {
        Filter: (state, action) => {
            const { active, toValue, fromValue } = action.payload
            return {
                ...state, items: {
                    ...state.items,
                    active,
                    toValue,
                    fromValue
                }
            }
        }
    }
})
export const { Filter } = filterSlice.actions
export default filterSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../redux/store'

const initialState = {
  products: [],
} as any

const rememberMeSlice = createSlice({
  name: 'reeco',
  initialState: initialState,
  reducers: {
    addProduct(state, action: any) {
      const product = action.payload
      return {
        ...state,
        products: [...state.products, product],
      }
    },
    updateProductStatus(state, action: any) {
      return {
        ...state,
        products: action.payload,
      }
    },
    resetAll() {
      return initialState
    },
  },
})
// Pull Actions and Reducer from RememberMeSlice
const { actions, reducer } = rememberMeSlice

// Export All the actions
export const { addProduct, updateProductStatus, resetAll } = actions

// Export default the reducer
export default reducer

// //Export select to get specific data from the store
export const selectProducts = (state: RootState) => state.reeco.products

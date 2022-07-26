import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './account/accountSlice'

const store = configureStore({
  reducer: {
    account: accountReducer,
  },
  devTools: true,
})
export default store

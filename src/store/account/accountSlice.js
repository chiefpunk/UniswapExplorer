import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  address: null,
  tokens: {},
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    updateWalletAddress: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log({ action })
      state.address = action.payload
    },
    addToken: (state, action) => {
      state.tokens = action.payload
    },

    disconnectWallet: (state, action) => {
      state.address = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateWalletAddress, disconnectWallet, addToken } =
  accountSlice.actions

export default accountSlice.reducer

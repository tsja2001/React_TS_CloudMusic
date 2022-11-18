import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 10
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.count = payload
    }
  }
})

export default counterSlice.reducer
export const { changeMessageAction } = counterSlice.actions

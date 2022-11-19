import { useMyDispatch } from '@/store'
import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'
import { getBenners } from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (state, { dispatch }) => {
    const res = await getBenners()
    dispatch(changeBannersAction(res.banners))
  }
)

interface IState {
  banners: any[]
}

const initialState: IState = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchBannerDataAction.pending, () => {
  //       console.log('peding')
  //     })
  //     .addCase(
  //       fetchBannerDataAction.fulfilled,
  //       (state, { payload }) => {
  //         state.banners = payload
  //       }
  //     )
  //     .addCase(fetchBannerDataAction.rejected, () => {
  //       console.log('rejected')
  //     })
  // }
})

export const { changeBannersAction } =
  recommendSlice.actions

export default recommendSlice.reducer

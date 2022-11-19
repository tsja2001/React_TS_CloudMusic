import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'
import {
  getBenners,
  getHotRecommend
} from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (state, { dispatch }) => {
    const res = await getBenners()
    dispatch(changeBannersAction(res.banners))
  }
)

export const fetchHotRecommend = createAsyncThunk(
  'banners',
  async (state, { dispatch }) => {
    const res = await getHotRecommend(8)
    dispatch(changeHotRecommendAction(res.result))
  }
)

interface IState {
  banners: any[]
  hotRecommend: any[]
}

const initialState: IState = {
  banners: [],
  hotRecommend: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    }
  }
})

export const {
  changeBannersAction,
  changeHotRecommendAction
} = recommendSlice.actions

export default recommendSlice.reducer

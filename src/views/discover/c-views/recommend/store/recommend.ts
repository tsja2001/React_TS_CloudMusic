import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'
import {
  getBenners,
  getHotRecommend,
  getNewAlbum
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

export const fetchNewAlbum = createAsyncThunk(
  'banners',
  async (state, { dispatch }) => {
    const res = await getNewAlbum()
    dispatch(changeNewAlbumsAction(res.albums))
  }
)

interface IState {
  banners: any[]
  hotRecommend: any[]
  newAlbums: any[]
}

const initialState: IState = {
  banners: [],
  hotRecommend: [],
  newAlbums: []
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
    },
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
    }
  }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumsAction
} = recommendSlice.actions

export default recommendSlice.reducer

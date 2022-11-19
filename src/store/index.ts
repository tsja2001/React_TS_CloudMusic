import {
  configureStore,
  createAsyncThunk
} from '@reduxjs/toolkit'
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'

import counterReducer from './modules/counter'
import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer
  }
})

type getStateType = typeof store.getState
type stateType = ReturnType<getStateType>
type dispatchType = typeof store.dispatch

export const useMySelector: TypedUseSelectorHook<stateType> =
  useSelector
export const useMyDispatch: () => dispatchType = useDispatch
export const myShallowEqual = shallowEqual

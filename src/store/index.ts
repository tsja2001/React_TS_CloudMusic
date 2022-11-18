import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'

import counterReducer from './modules/counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

type getStateType = typeof store.getState
type stateType = ReturnType<getStateType>
type dispatchType = typeof store.dispatch

export const useMySelector: TypedUseSelectorHook<stateType> =
  useSelector
export const useMyDispatch: () => dispatchType = useDispatch
export const myShallowEqual = shallowEqual

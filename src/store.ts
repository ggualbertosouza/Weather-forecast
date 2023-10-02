import {configureStore} from '@reduxjs/toolkit'
import { localReducer } from './features/city-slice'

export const store = configureStore({
    reducer: {
        city: localReducer
    }
})
type getStateType = typeof store.getState

export type RootState = ReturnType<getStateType>
import {PayloadAction, createSlice} from '@reduxjs/toolkit'

type localProps = {
        city: string,
}

const initialState: localProps = {
        city: 'São Paulo',
}

export const localSlice = createSlice({
    name: 'local',
    initialState,
    reducers: {
        setCity: (state, action: PayloadAction<string>) => {
            state.city = action.payload
        }
    }
})

export const {setCity} = localSlice.actions
export const localReducer =  localSlice.reducer
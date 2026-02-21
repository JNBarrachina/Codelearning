import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    increment: 1
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementValue: (state) => {
            state.value += 1
        },
        decrementValue: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.increment += action.payload
        },
    },
})

export const selectValue = state => state.counter.value // state - slice name - value reference
export const selectIncrement = state => state.counter.increment

export const {
    incrementValue,
    decrementValue,
    incrementByAmount
} = counterSlice.actions

export default counterSlice.reducer
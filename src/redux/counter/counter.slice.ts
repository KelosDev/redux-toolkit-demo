import { createSlice } from "@reduxjs/toolkit"

export type CounterStateType = {
    value: number
}

const initialState: CounterStateType = { value: 0 }

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            if (state.value > 0) {
                state.value--
            }
        },
        reset(state) {
            state.value = initialState.value
        }
    }
})

//ora devo esportare le azioni
export const { increment, decrement, reset } = counterSlice.actions
//ed esportare il reducer
export default counterSlice.reducer
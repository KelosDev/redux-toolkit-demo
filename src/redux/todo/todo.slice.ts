import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TodoType = {
    label: string
    completed: boolean
}

export type ListStateType = {
    list: TodoType[]
}

const initialState: ListStateType = {
    list: []
}

export const listSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        add: (state, action: PayloadAction<TodoType>) => {
            state.list.push(action.payload)
        },
        removeAll: (state)=>{
            state.list = initialState.list
        }
    }
})

export const { add, removeAll } = listSlice.actions
export default listSlice.reducer
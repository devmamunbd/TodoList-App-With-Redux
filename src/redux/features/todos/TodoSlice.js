import { createSlice } from '@reduxjs/toolkit'



const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {id: 1, text: "Learn React", completed: false},
        {id: 2, text: "Learn Nextjs", completed: false},
        {id: 3, text: "Learn TypeScript", completed: false}
    ],
    reducers: {
        addTodo: (state, action)=> {
            this.state.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
            })
        }
    }
})


export const {} = todoSlice.actions;
export default todoSlice.reducer;

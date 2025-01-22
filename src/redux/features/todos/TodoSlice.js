const { createSlice } = require("@reduxjs/toolkit");



const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
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

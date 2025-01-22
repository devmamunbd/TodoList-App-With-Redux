import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../redux/features/todos/TodoSlice'

const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})

export default store

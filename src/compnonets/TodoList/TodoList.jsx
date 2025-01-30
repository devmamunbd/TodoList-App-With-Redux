import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../redux/features/todos/TodoSlice';

const TodoList = () => {
    const [text, setText] = useState('')
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch()
    console.log(todos)
    console.log(text)

    const handleAddTodo =(e)=> {
        e.preventDefault();
        console.log(text)
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('')
        }
    }

  return (
    <div className='flex flex-col items-center bg-white shadow-md px-10 py-5 rounded-md'>
        <div>
            <h1 className='text-black font-bold text-3xl'>Todo List With Redux Toolkit</h1>
        </div>


        <div className='flex justify-between items-center gap-10 mt-5'>
        <input
        value={text}
        onChange={(e)=> setText(e.target.value)}
        className='w-full outline-none rounded-md border border-gray-400 p-2'
         type="text" placeholder='Add a Todo' />
        <button onClick={handleAddTodo} className='bg-blue-500 px-10 py-2 rounded-md text-white font-semibold'>Add</button>
        </div>

        <div className='mt-5'>
        <ul className='space-y-2'>
            {
                todos.length > 0 ? todos.map((todo)=> (
                    <li key={todo.id} className='flex justify-between items-center gap-10'>
               <span className='border border-gray-900 px-10 py-2'>{todo.text}</span>
               <button className='border border-gray-900 px-6 py-2 hover:underline'>Remove</button>
            </li>
                )) : <li className='text-red-500 font-semibold text-xl'>No Task Found</li>
            }

        </ul>
        </div>

    </div>
  )
}

export default TodoList

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import TodoList from './compnonets/TodoList/TodoList.jsx'
import DarkAndWhite from './compnonets/DarkAndWhite/DarkAndWhite.jsx'
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
       <div className='flex flex-col justify-center items-center min-h-screen bg-slate-100 '>
       <TodoList/>
       <DarkAndWhite/>
       </div>
    </Provider>
  </StrictMode>,
)

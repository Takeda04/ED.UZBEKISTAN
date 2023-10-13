import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StateProvider } from './context/ContextProvider'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateProvider>
    <BrowserRouter>
    <Toaster reverseOrder= {true}/>
    {" "}
    <App />
    </BrowserRouter>
  </StateProvider>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AppContextProvider from './context/AppContextProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <Toaster reverseOrder={true}/>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>,
)

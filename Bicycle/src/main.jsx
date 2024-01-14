import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import WishlistProvider from './context/WishlistContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <WishlistProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WishlistProvider>


  
)

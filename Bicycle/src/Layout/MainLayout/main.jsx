import React from 'react'
import Navbar from '../Navbar/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/footer'

const Main  = () => {
  return (
    <div> 
        <Navbar/>
        <Outlet/>
        <Footer/>
        
         </div>
  )
}

export default Main 
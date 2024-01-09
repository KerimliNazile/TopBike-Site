import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './Layout/MainLayout/main'
import Home from './Pages/HomePage/home'
import Shop from './Pages/ShopPage/shop'
import Featured from './Pages/FeaturedPage/featured'
import Pages from './Pages/PagesPage/pages'
import Blog from './Pages/BlogsPage/blog'
import Contact from './Pages/ContactPage/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/featured' element={<Featured />}></Route>
          <Route path='/pages' element={<Pages />}></Route>
          <Route path='/blogs' element={<Blog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App

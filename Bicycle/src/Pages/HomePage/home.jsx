import React from 'react'
import { Helmet } from 'react-helmet'
import Bicycle from '../../Components/HomeComponents/BcycleSection'
import Header from '../../Components/HomeComponents/Header'
import LatestNews from '../../Components/HomeComponents/LatestNewsSection'
import NewProduct from '../../Components/HomeComponents/NewProduct'
import Only from '../../Components/HomeComponents/OnlyOnline/only'
import Services from '../../Components/HomeComponents/SpofiySection/spofiy'

const Home = () => {
  return (
    <>
    <Helmet>
        <meta name="description" content="Your page description" />
        <title>Home Page </title>
        
    </Helmet>

    

    <div>
        <Header/>
        <Services/>
        <NewProduct/>
        <Only/>
        <Bicycle/>
        <LatestNews/>
    </div>
    </>
  )
}

export default Home
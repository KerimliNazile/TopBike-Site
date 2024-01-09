import React from 'react'
import Header from '../../Components/HomeComponents/Header'
import Spofiy from '../../Components/HomeComponents/SpofiySection/spofiy'
import Only from '../../Components/HomeComponents/OnlyOnline/only'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
    <Helmet>
        <meta name="description" content="Your page description" />
        <title>Home Page </title>
        
    </Helmet>

    

    <div>
        <Header/>
        <Spofiy/>
        <Only/>
    </div>
    </>
  )
}

export default Home
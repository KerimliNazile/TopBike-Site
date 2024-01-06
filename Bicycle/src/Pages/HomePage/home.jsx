import React from 'react'
import Header from '../../Components/HomeComponents/Header'
import Spofiy from '../../Components/HomeComponents/SpofiySection/spofiy'
import Only from '../../Components/HomeComponents/OnlyOnline/only'

const Home = () => {
  return (
    <div>
        <Header/>
        <Spofiy/>
        <Only/>
    </div>
  )
}

export default Home
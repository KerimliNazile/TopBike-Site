import React from 'react'
import { Helmet } from 'react-helmet'
import Shopp from '../../Components/ShopComponents/HeaderShop'

const Shop = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Your page description" />
        <title>Shop Page </title>

      </Helmet>

      <div>
        <Shopp/>
      </div>
    </>

  )
}

export default Shop
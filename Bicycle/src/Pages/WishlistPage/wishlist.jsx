import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext'

const Wishlist = () => {
    const {wish,deleteWish}=useContext(WishlistContext)
  return (
    <div>
        <h1>Wishlist</h1>
        {
            wish && wish.map(x=>
                <ul>
                    <li><img src={x.image} alt="" /></li>
                    <li>{x.name}</li>
                    <li>{x.price}</li>
                    <button onClick={()=>deleteWish(x)}>Delete</button>
                </ul>
                )
        }
    </div>
  )
}

export default Wishlist
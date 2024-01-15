import React, { useContext } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom'
import './index.scss'
import { WishlistContext } from '../../../context/WishlistContext';
import { BasketContext } from '../../../context/BasketContext';

const Card = ({ id, image, name, price, product }) => {
  const { addWish } = useContext(WishlistContext)
  const {addBasket}=useContext(BasketContext)
  console.log(id);
  return (
    <div>
      <div className="CardArea">
        <div className="CardIcon">
          <div onClick={() => addWish(product)} ><FaHeart className='FaHeart' /></div>
          <div><Link to={`/${id}`}><FaEye className='FaEye' /></Link></div>
         <div onClick={()=> addBasket(product)}> <SlBasket className='SlBasket' /></div>
        </div>
        <div className="ImageCard">
          <img src={image} alt="" />
        </div>
        <div className="CardContent">
          <h1>{name}</h1>
          <h2>{price}</h2>
        </div>
      </div>
    </div>
  )
}

export default Card
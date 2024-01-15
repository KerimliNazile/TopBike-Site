import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'
import './basket.scss'
const Basket = () => {
  const { basket, deleteBasket,increaseBasket,decreaseBasket } = useContext(BasketContext)
  return (
    <>
    <div className="Baskett">
      <h1>Basket</h1>
      {basket&&basket.map(x=>
      <ul className='BasketUl'>
        <li><img src={x.image} alt="" /></li>
        <li style={{fontSize:"30px"}}>{x.name}</li>
        <li style={{fontSize:"30px"}}>{x.price}</li>
        <li className='delete' style={{fontSize:"30px"}}><button onClick={()=>deleteBasket(x)}>Delete</button></li>
        <div className="Inrease">
           <li style={{fontSize:"30px"}}><button onClick={()=>increaseBasket(x)}>+</button></li>
        <p style={{fontSize:"30px"}}>{x.count}</p>
        <li style={{fontSize:"30px"}}><button onClick={()=>decreaseBasket(x)}>-</button></li>
        </div>
       
        
      </ul>
     ) }
    </div>
      
    </>
  )
}

export default Basket
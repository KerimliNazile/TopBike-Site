import React from 'react'
import "./index.scss"
import NewProduct from '../../HomeComponents/NewProduct'




const Shopp = () => {
  return (
    <div>
    
      <section id='doubleimages'>
        <div className='img1'>
          <h2>Products</h2>
          <div className='txt'>
            {/* <strong><Link to={"/"}>Home </Link></strong>- */}
            <strong className='bg'>Products</strong>
          </div>
        </div>
        <div className="img2">
          <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/Biking-Basics-5-Essential-Bike-Tools-to-Take-with-You-on-a-Cycling-Adventure.jpg?v=1613576668" alt="" />
          <div className="info">
            <h3 >A NEW COLLECTION</h3>
            <p>SALE UP TO 30%</p>
            <button>Shop Now</button>
          </div>
        </div>
      </section>
      <NewProduct/>
    </div>
  )
}

export default Shopp
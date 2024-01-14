import React, { useEffect, useState } from 'react'
import Card from '../Card'
import './index.scss'
const NewProduct = () => {
    const [product, setProduct] = useState([])
    async function getProducts() {
        const data = await fetch("http://localhost:5000/words")
        const res = await data.json()
        console.log(res);
        setProduct(res)
    }
    useEffect(()=>{
        getProducts()
    },[])
    console.log(product);
    return (
        <>
<section id='NewProduct'>
    <div className="NewProductArea">
        <div className="ProductText">
            <h1>New Product</h1>
        </div>
        <div className="CardAreaProduct">
            {product && product.map((item)=>(
                <div className="CardBox">
                    <Card key={item._id} id={item._id} name={item.name} image={item.image} price={item.price} product={item}/>
                </div>
            ))}
        </div>
    </div>
</section>
        </>
    )
}

export default NewProduct
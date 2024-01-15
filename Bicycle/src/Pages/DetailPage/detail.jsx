import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './index.scss'
const DetailPage = () => {
  const [detail, setDetail] = useState()
  const { id } = useParams()
  const fetchdetails = async () => {
    const res = await fetch(`http://localhost:5000/words/${id}`)
    const json = await res.json()
    setDetail(json)
  }
  useEffect(() => {
    fetchdetails()
  }, [])

  return (
    <>
    <h1>Detail</h1>
      <div className="DetailArea">
        {detail ? <>
          <div className="DetailCard">
            <img src={detail.image} alt="" />
            <h1>{detail.name}</h1>
            <h2>{detail.price}</h2>

          </div></> : '' }


       
      </div>
    </>
  )
}

export default DetailPage
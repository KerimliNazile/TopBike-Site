import React from 'react'
import { Helmet } from 'react-helmet'
import Contactt from '../../Components/ContactComponents/HeaderContact'
import ContactComponents from '../../Components/ContactComponents/FormikContact'

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Your page description" />
        <title>Contact Page </title>

      </Helmet>

      <div>
        <Contactt/>
        <ContactComponents/>
      </div>
    </>
  )
}

export default Contact

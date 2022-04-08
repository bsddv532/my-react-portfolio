import React from 'react'
import style from './Contact.module.css'
import ContactForm from './ContactForm'
import ContactMe from './ContactMe'

const Contact = () => {
  return (
    <div className={style.contact} id="contact">

        <h1>Contact Me</h1>

        <div className={style.container}>
          <ContactMe/>
          <ContactForm />
        </div>

    </div>
  )
}

export default Contact
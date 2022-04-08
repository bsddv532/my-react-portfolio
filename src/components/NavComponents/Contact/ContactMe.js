import React from 'react'
import style from './Contact.module.css'
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

const ContactMe = () => {
  return (
    <div className={style.ContactMe}>
      <p className={style.p1}>Let's Connect</p>
      <p className={style.p2}>Thankyou for visiting my Portfolio. Please feel free to to ask any queries. I will reply you as soon as possible. </p>

      <div className={style.details}>
        <p className={style.p3}><FiMail className={style.icons}/> deepakpradhan9962@gmail.com</p>
        <p className={style.p3}><FiPhoneCall className={style.icons}/>(+91) 7000447591</p>
        <p className={style.p3}><GrLocation className={style.icons}/> Q.No-1275, Churcha, Koriya(Chhattisgarh) </p>
      </div>


    </div>
  )
}

export default ContactMe
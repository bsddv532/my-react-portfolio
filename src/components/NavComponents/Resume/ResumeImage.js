import React from 'react'
import style from './Resume.module.css'
import dk2 from '../../../Images/deepak.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const ResumeImage = () => {
  return (
    <div className={style.ResumeImage}>
      <div className={style.resumeImg} >
        <img src={dk2} alt="deepak" />
      </div>

      <div className={style.icons}>
        <FaGithub className={style.socialIcons} />
        <FaLinkedin className={style.socialIcons} />
        <FaInstagramSquare className={style.socialIcons} />
        <FaFacebook className={style.socialIcons} />
      </div>
    </div>
  )
}

export default ResumeImage
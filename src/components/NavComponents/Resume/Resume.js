import React from 'react'
import Education from './Education'
import style from "./Resume.module.css"
import ResumeImage from './ResumeImage'


const Resume = () => {
  return (
    <div className={style.resume} id="resume">
      <h1> Resume </h1>

      <div div className={style.ResumeBOX}>

        <Education />
        <ResumeImage />
      </div>
    </div>
  )
}

export default Resume
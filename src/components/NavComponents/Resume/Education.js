import React, { useContext } from 'react'
import { ParentDatabase } from '../../Database'
import style from "./Resume.module.css"

const Education = () => {

  const [data] = useContext(ParentDatabase)

  return (
    <div className={style.Education}>

      <div className={style.EducationBox1}>
        <p className={style.p1}>Education</p>
        <hr />
        {
          data.filter((check) => check.category === "Education").map((content) =>
            <ul key={content.id}>
              <li  className={style.deepak}>
                <p className={style.degree}>{content.degree}
                  <span className={style.passingYear}>{content.passingYear}</span></p>
                <p className={style.institute}>{content.institute}</p>
              </li>
            </ul>
          )
        }
      </div>

      <div className={style.EducationBox2}>
        <p className={style.p1}>Certificates</p>
        <hr />
        {
          data.filter((check) => check.category === "Skills").map((content) =>
            <ul key={content.id}>
              <li >
                <p className={style.degree}>{content.degree} <span className={style.passingYear}>{content.passingYear}</span></p>
                <p className={style.institute}>{content.institute}</p>
              </li>
            </ul>
          )
        }
      </div>

    </div>
  )
}

export default Education
import React, { useContext } from 'react'
import dk1 from '../../Images/deepak.png'
import { ParentDatabase } from '../Database'

const About = () => {

  const [data] = useContext(ParentDatabase)


  return (
    <div id='about'>

      <div className='about-img'>
        <img src={dk1} alt="Deepak" className='home-profile-img' />
      </div>

      <div className='about-Para'>
        <div>
          <h1 className="Component-Headings">About Me </h1>

          <p>
            I'm a web designer & front-end developer. I'm interested in all kinds of visual communication, but my major focus is on designing web, mobile & tablet interfaces.
          </p>

          <p>
            I enjoy turning complex problems into simple, beautiful and intutive designs.And to work in a dynamic and challenging environment and achieve desired goals with full sincerity, dedication and honesty by using my coding skills, which would also help me to grow as a professional.
          </p>
        </div>

        <div className="about-techLogo-div">
          <p>Languages/Library/Technology</p>

          <div>
            {
              data.filter((check) => check.category === "TechnologyLogo").map((content) => <img key={content.id} src={content.url} alt={content.url} className="tech-logo" />)
            }
          </div>

        </div>

      </div>


    </div>
  )
}

export default About


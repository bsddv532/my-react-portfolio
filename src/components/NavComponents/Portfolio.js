import React, { useContext } from 'react'
import { ParentDatabase } from '../Database'
const handleURL = url => () => window.open(url, '_blank');

const Portfolio = () => {

  const [data] = useContext(ParentDatabase)


  return (
    <div id='portfolio'>
      <h1 className="Component-Headings">My Portfolio </h1>

      <div className='projects'>
        {
          data.filter((projects) => projects.category === "Portfolio").map((content)=><img key={content.id} src={content.image} alt={content.image} onClick={handleURL (content.repoUrl)} className="project-img" />)
        }
      </div>


    </div>
  )
}

export default Portfolio
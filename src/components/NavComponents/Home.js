import React from 'react'
import '../Style.css'
import dk from '../../Images/deepak.png'
// import wave from '../../Images/wave.svg'

const Home = () => {
    return (
        <div id='home'>
            <div className='home-Para'>
                <p className ="home-p1">Hi, I am Deepak Kumar Pradhan</p>
                <p className ="home-p2">A Front - end Developer</p>
                <p className ="home-p3">Get ready to turn ideas into reality</p>

                <button className='hire-me-btn'>Hire me</button>
                <button className='get-resume-btn'>Get Resume</button>
            </div>
            <div className='home-img'>
                <img src={dk} alt='DEEPAK' className='home-profile-img'/>
            </div>
            {/*<img src={wave} alt="Wave" className='Wave-img' />*/}
        </div>
    )
}

export default Home
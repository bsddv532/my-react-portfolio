import React, {useState, createContext} from 'react'

import HTMLlogo from '../Images/html5 logo.png'
import CSSlogo from '../Images/css-logo.png'
import JSlogo from '../Images/js-logo.png'
import Netlifylogo from '../Images/netlify-logo.png'
import BootStraplogo from '../Images/bootstrap logo.png'
import Reactlogo from '../Images/react logo.png'
import Githublogo from '../Images/github.png'

import backtracking from '../Images/backtracking.png'
import todoapp from '../Images/todoapp.png'
import todomobile from '../Images/todomobile.png'
import digitalclock from '../Images/digitalClock.png'
import blogapp from '../Images/blogProject.png'


export const ParentDatabase = createContext();

const Database = (props) => {
    const[data] = useState([
        {
            id: "1",
            category: "TechnologyLogo",
            url : HTMLlogo
        },

        {
            id: "2",
            category: "TechnologyLogo",
            url : CSSlogo
        },

        {
            id: "3",
            category: "TechnologyLogo",
            url : JSlogo
        },

        {
            id: "4",
            category: "TechnologyLogo",
            url : Netlifylogo
        },

        {
            id: "5",
            category: "TechnologyLogo",
            url : BootStraplogo
        },

        {
            id: "6",
            category: "TechnologyLogo",
            url : Reactlogo
        },

        {
            id: "7",
            category: "TechnologyLogo",
            url : Githublogo
        },





        {
            id: "1",
            category: "Portfolio",
            title: "Backtracking",
            image: backtracking,
            repoUrl: "https://bsddv532.github.io/backtracking/"
        },

        {
            id: "2",
            category: "Portfolio",
            title: "Todo App",
            image: todoapp,
            repoUrl: "https://bsddv532.github.io/final_todo_app/"
        },

        {
            id: "3",
            category: "Portfolio",
            title: "Todo App Mobile UI",
            image: todomobile,
            repoUrl: "https://bsddv532.github.io/todo_mobile_app_UI/"
        },

        {
            id: "4",
            category: "Portfolio",
            title: "Digital Clock",
            image: digitalclock,
            repoUrl: "https://bsddv532.github.io/digital_clock/"
        },

        {
            id: "5",
            category: "Portfolio",
            title: "Blog App",
            image: blogapp,
            repoUrl: "https://reverent-wescoff-f00969.netlify.app"
        },


        


        {
            id: "1",
            category: "Education",
            degree: "Bachelor in Computer Application",
            institute: "Dr. C.V. Raman University",
            passingYear: "2018-2021"
        },

        {
            id: "2",
            category: "Education",
            degree: "Diploma in Mining Engineering",
            institute: "Bhagwant University",
            passingYear: "2016-2018"
        },




        {
            id: "3",
            category: "Skills",
            degree: "Full Stack Development (MERN)",
            institute: "Prepbytes",
            passingYear: "2021-Pursuing"
        },


    ])


  return (
    <ParentDatabase.Provider value={[data]}>
        {props.children}
    </ParentDatabase.Provider>
  )
}

export default Database
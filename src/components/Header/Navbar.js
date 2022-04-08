import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div id={styles.navbar}>

            <p>Deepak Kumar Pradhan</p>

            <nav>
                <a href="/#home" >Home</a>
                <a href="/#about" >About</a>
                <a href="/#portfolio" >Portfolio</a>
                <a href="/#resume" >Resume</a>
                <a href="/#contact" >Contact</a>
            </nav>
        </div>
    )
}

export default Navbar
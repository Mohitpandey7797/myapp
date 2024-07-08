import React from 'react'
import {Link} from "react-router-dom"
function Header() {
  return <>
    <nav>Get Ready To Complete Your Daily Task</nav>
    <div className='header'>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    </div>
  </>
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='navBar'>
        <div className='logo'>
            <h1 className='cft-logo'>cft-app</h1>
        </div>
        <div>
            <Link to = "/" className='navLinks'>Home</Link>
            <Link to="/about" className='navLinks'>About</Link>
        </div>
    </nav>
  )
}



export default Navbar

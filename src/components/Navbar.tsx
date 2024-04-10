import React from 'react'
import Logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className='setWidth'>
        <div>   
            <img src={Logo} alt="logo" />
            <p>Features</p>
            <p>Pricing</p>
        </div>
        <div className='desktop'>
            <button className='login'>Login</button>
            <button className=''>Sign up</button>
        </div>
        <div className='mobile'>
            menu
        </div>
    </nav>
  )
}

export default Navbar
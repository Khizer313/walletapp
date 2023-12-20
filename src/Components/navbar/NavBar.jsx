import React from 'react'
import './navBar.css'
import navIcon from '../../assets/navicon.jpg.png';

const NavBar = () => {
  return (
    <>
    <nav>
     <div className="logo">Dazpay </div>
     <div className="links">
        <span className='f_link'>Market</span>
        <span className='sec_link'>Statistics</span>
        <span className='third_link'>How it works</span>
        <span className='fourth_link'>About us</span>
     </div>
     <span className="icon">
        <div className="icon_div">
        <img src={navIcon} alt="icon image" />
        </div>
    </span> 
     <span className='navBtn'>Log in</span>
     </nav>

    </>
  )
}

export default NavBar

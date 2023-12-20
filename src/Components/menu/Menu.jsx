import React from 'react'
import './menu.css'
import menuImg from '../../assets/menuImg.png';

const Menu = () => {
  return (
    <>
<div className="menu">
    <div className="menu_one">
      <h1>MEGA OFFER </h1>
      <p>Customers have the opportunity to receive percentages.</p>
    </div>
    <div className="menu_two">
     <img src={menuImg} alt="" />
     <span className='span'>Grab Your Special offer now</span>

     <span className='second_span_box'>
            <div className="txt">GET OFFER</div>
        </span>
    </div>
</div>






    </>
  )
}

export default Menu

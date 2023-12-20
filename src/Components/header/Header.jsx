import React from 'react'
import './Header.css'
import NavBar from '../navbar/NavBar'
import styleImg from '../../assets/styleImg.jpg.svg';
import Main from '../main/Main';
import Menu from '../menu/Menu';
import Section from '../lastSection/Section';

const Header = () => {
  return (
    <>
     <div className="header">
 <NavBar/>
 <div className="center_text">
 <h1 className='center_h1'>Dazpaywallet </h1>
 <span className='center_span'>Simplify your crypto life:</span>
 <span className='center_span_two'>access & manage your assets anytime, anywhere</span>
 </div>

 <img src={styleImg} alt="" className='header_style_img'/>

<div className="write">
    <div className="write_one">
 <p className='wo_f'>Crypto world. </p>
<p className='wo_sec'>All-in-one-solution. </p>
   </div>
<div className="write_two">
with our user-friendly platform, you can easily buy, sell, and store crypto
currency securely and hassle-free. Say goodbye to complicated interfaces and 
hello to a seamless crypto experience with Dazzpaywallet.
</div>
</div>
 
 


{/*---------------------- main -------------*/}

<Main/>
{/*---------------------- menu -------------*/}
<Menu/>
{/*------------------- section -------------*/}
<Section/>
 </div>  

    </>
  )
}

export default Header

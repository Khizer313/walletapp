import React from 'react'
import './main.scss'
import secure from '../../assets/secure.png';
import transaction from '../../assets/transaction.png';
import user from '../../assets/user.png';
const Main = () => {
  return (
    <>
      
<div className="main">

 <div className="main_f">
    <div className="main_f_one">
       <h2>562 M</h2>
       <span>of active daily user</span>


    </div>
    <div className="main_f_two">
    <h2>1234</h2>
       <span>transactions per second </span>

    </div>
    <div className="main_f_three">
    <h2>12458</h2>
       <span>validator node</span>


    </div>
    <div className="main_f_four">
    <h2>2 M</h2>
       <span>transactions per day</span>


    </div>
 </div>

<div className="text_section">
<h3 className='text_1'>Key features</h3>
<h3 className='text_2'>that set us apart</h3>
<p className='text_para'>Dazzpay is more than just a wallet - it’s a comprehensive platform with features
that are tailored to the need of cryptocurrency enthusiets</p>

</div>

<div className="boxes">
    <div className="box1 box">
    <div className="img_box">
        <img src={user} alt="" />
        </div>
        <span>Secure Storage</span>
        <p>Sending & receiving cryptocurrency
has never been easier. Make
transaction with just a few clicks.</p>
        <span className='second_span_box'>
            <div className="txt">Learn More</div>
        </span>
    </div>
    <div className="box2 box">
        <div className="img_box">
        <img src={transaction} alt="" />
        </div>
        <span>Easy transactions</span>
        <p>Sending & receiving cryptocurrency
has never been easier. Make
transaction with just a few clicks.</p>
        <span className='second_span_box'>
            <div className="txt">Learn More</div>
        </span>
    </div>
    <div className="box3 box">
    <div className="img_box">
        <img src={secure} alt="" />
        </div>
        <span>User-friendly interface</span>
        <p>Sending & receiving cryptocurrency
has never been easier. Make
transaction with just a few clicks.</p>
        <span className='second_span_box'>
            <div className="txt">Learn More</div>
        </span>
    </div>
    



</div>



</div>


    </>
  )
}

export default Main

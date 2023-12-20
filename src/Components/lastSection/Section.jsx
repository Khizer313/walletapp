import React from "react";
import "./section.css";
import Group from "../../assets/Group 4.png";
import Left from "../../assets/LArrow.png";
import Right from "../../assets/RArrow.png";
import Mobile from "../../assets/mobile.png";
import play from "../../assets/playstore.png";
import apple from "../../assets/applestore.png";
import fb from "../../assets/fb.png";
import tweet from "../../assets/tweet.png";
import linkedIn from "../../assets/linkedIn.png";
import UTube from "../../assets/UTube.png";
import cc from "../../assets/cc.png";

const Section = () => {
  return (
    <>
      <div className="section">
        <h1>Review</h1>

        <div className="slider">

          <div className="img1 ">
            <img src={Group} className="groupImg hideImages" />
            <img src={Left} className="Left" />
          </div>

          <div className="img1">
          <img src={Group} className="groupImg" />
          </div>

          <div className="img1 ">
            <img src={Group} className="groupImg hideImages" />
            <img src={Right} className="Right" />
          </div>

        </div>
{/*----------  end of slider ----------*/}


<div className="show">
    <div className="show_one">
        <img src={Mobile}  />
    </div>
    <div className="show_two">
        <h3>Download the App Today</h3>
        <p className="show_two_para">With our platform, you can make your first move
in less than 60 seconds! Don’t waste any more
time and start your trading journey today.</p>
<div className="show_two_span">
        <span className="show_two_span_one">
            <img src={play}  />
            <div className="secPara">
                <p className="secPara_POne">GET IT ON</p>
                <p className="secPara_PTwo">Google Play</p>
            </div>
        </span>
        <span className="show_two_span_two">
            <img src={apple}  />
            <div className="secPara">
                <p className="secPara_POne">Download on the</p>
                <p className="secPara_PTwo">App Store</p>
            </div>
        </span>
</div>
    </div>
</div>


{/*---------------  footer ----------*/}


<footer>
    <div className="footer_top">
        <h1>Dazpay</h1>
        <div className="links_footer">
            <img src={fb}  />
            <img src={tweet}  />
            <img src={linkedIn}  />
            <img src={UTube}  />
        </div>
    </div>
    <div className="footer_bottom">
       <div className="bottom_links">
        <span>Company</span>
        <span>Resources</span>
        <span>Legal</span>
        <span>Services</span>
       </div>
       <div className="bottom_ended">
        <span>Copyright   <img src={cc}  />        Dazpay, 2023 </span>
       </div>
    </div>
</footer>





      </div>
    </>
  );
};

export default Section;

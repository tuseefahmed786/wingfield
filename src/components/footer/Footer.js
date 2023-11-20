import React from "react";
import logo from "../../static/assests/footer/Layer_1.png";
import fb from "../../static/assests/socialicons/023-facebook 1.png";
import insta from "../../static/assests/socialicons/044-instagram 1.png";
import developer from "../../static/assests/footer/Group 2 10.png";

import '../../styles/footer.css'
function Footer() {
  return (
    <>
      <div className="footer-parent">
      <div className="footer-Layout">
        <div className="footer-logo">
          <img src={logo} alt="" srcset="" />
        </div>

        <div className="footer-nav d-flex">
          <ul>
            <li>
              <a href="/">Buy a car</a>
            </li>
            <li>
              <a href="/">Sell your car</a>
            </li>
            <li>
              <a href="/">finance</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">Privacy policy</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
            
          </ul>
          <ul>
            <li>
              <a href="/">Contact us</a>
            </li>
          
            
          </ul>
        </div>
        <div className="social-links d-flex">
            <div className="fb social d-flex">
                <img src={fb} alt="" srcset="" />
                <p>Facebook</p>
            </div>
            <div className="insta social d-flex">
                <img src={insta} alt="" srcset="" />
                <p>Instagram</p>
            </div>
        </div>

      </div>
      <div className="hr-layout">
      <hr className="footer-hr"/>

      </div>
      <div className="copywrite-section d-flex">
        <div className="copywrite-text">
            <p>2023 ©Wingfield Motors. All rights reserved.</p>
        </div>
        <div className="developer-name d-flex">
    <p>Created by</p><img src={developer} alt="" srcset="" />
        </div>
      </div>
      </div>

    </>
  );
}

export default Footer;

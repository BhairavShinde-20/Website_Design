import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer_1" id="contact">
        <div className="footimg-1">
          {/* <div className="contact"></div> */}

          <div className="con-1">
            <h2 className="C">Contact</h2>
            <br></br>
            <h3 className="g">Gera's Imperium Alpha,</h3>
            <p className="a">7th Floor,Office No</p>
            <p className="a">715,716 & 714,</p>
            <p className="a">Near Eon IT Park,</p>
            <p className="a">Kharadi,Pune - 411014</p>
            <p className="a">Email:</p>
            <p className="a">info@senwellsys.com</p>
            {/* <br></br> */}
            <div className="social-icons">
              <BsFacebook href="" />
              <BsLinkedin href="#" />
              <BsInstagram href="#" />
              <BsTwitter href="#" />
            </div>
          </div>
          {/* <br></br> */}
          <div className="navlink">
            <h3>Techonologies</h3>
            <a href="" className="link">
              Angular
            </a>
            <a href="" className="link">
              React
            </a>
            <a href="" className="link">
              Nodejs
            </a>
            <a href="" className="link">
              React Native
            </a>
            <a href="" className="link">
              Quality Assurance
            </a>
          </div>
          <div className="navlink">
            <h3>About</h3>
            <a href="" className="link">
              Pricing
            </a>
            <a href="" className="link">
              Business Models
            </a>
            <a href="" className="link">
              Career
            </a>
            <a href="" className="link">
              Career Opportunity
            </a>
            <a href="" className="link">
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

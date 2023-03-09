import React from "react";
import "./Navbar.css";
import Logo from "../img/logo.png";
import {useNavigate} from "react-router-dom"


const Navbar = () => {
 const  navigate = useNavigate();

  return (
    <>
      <div class="nav" id="home">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <img src={Logo} alt="Logo" className="rotate_1" />
          <div className="companyname">
        <h1 className="title">Senwell Solution</h1>
        <p className="name">Empowered by Innovation...</p>
        </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a onClick={()=>navigate("/")}>Home</a>
          {/* <a onClick={()=>navigate("/service")}>Services</a> */}
          <a onClick={()=>navigate("/service")}>Services</a>
          <a onClick={()=>navigate("/about")}>About</a>
          <a onClick={()=>navigate("/contact")}>Contact</a>
          <a onClick={()=>navigate("/faq")}>Faq</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

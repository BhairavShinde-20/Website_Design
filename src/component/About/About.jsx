import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./About.css";
import AboutPic from "../../img/ab_2.jpg";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="main-about">
        <div className="about_bg">
          <h1 className="tagline">Reliable Innovative Development & Creative Solutions.</h1>
          <br></br>
          <p className="company-text">
            We do great things. Deliver outstanding content solutions and
            technology-ready <br></br>transformation. We prosper with the impact
            and value we can provide.
          </p>
        </div>
        <main>
          <div className="content_right ser">
            <img src={AboutPic} alt="" className="hero_img circle" />
          </div>
          <div className="content_left ">
            <h2>Quality Centred.</h2>
            <h3>Customer Obsessed.</h3>
            <p>
              With decades of experience in IT, Fully Managed provides companies
              with the technical support, expertise, and products and services
              they need to be productive and proactive - helping them work
              smarter, more securely, and with greater efficiency.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default About;

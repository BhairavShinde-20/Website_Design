import React from "react";
import "./Services.css";
import Ui from "../img/Ui_1.png";
import { BsLaptop } from "react-icons/bs";
import { BsFillPenFill } from "react-icons/bs";
import { BsBraces } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import { BsMusicPlayer } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { BsCaretRightSquareFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <div className="container_1">
        <div className="services_1">
          <div className="main_box-1">
            <div className="box">
              <BsFillPenFill />
              <h3 className="designs">Design</h3>
              <p className="par">
                Improving conversions and turing complex interactions into a
                simple flow
              </p>
            </div>  
            <div className="box">
              <BsLaptop />
              <h3 className="designs">Development</h3>
              <p className="par">
                Creating new software and integrating new features into exiting
                suites
              </p>
            </div>
            <div className="box">
              <BsBraces />
              <h3 className="designs">Testing & Qa</h3>
              <p className="par">
                Ensuring the Quality of your project and the realiability of
                your code
              </p>
            </div>

            <div className="box">
              <BsLaptop />
              <h3 className="designs">Front-end</h3>
              <p className="par">
                Building Flexible,cross platform interface for your business
              </p>
            </div>
            <div className="box">
              <BsMusicPlayer />
              <h3 className="designs">Mobile</h3>
              <p className="par">Creating memorable experiences and reliable application</p>
            </div>
            <div className="box">
              <BsGraphUp />
              <h3 className="designs">Business & Management</h3>
              <p className="par">
                Providing your business & wmployees with relliable tools and
                suites
              </p>
            </div>

            <div className="box">
              <BsCart4 />
              <h3 className="designs">eCommerce</h3>
              <p className="par">Launching new eCommerce platform and implementing web shops</p>
            </div>
            <div className="box">
              <BsCaretRightSquareFill />
              <h3 className="designs">Entertainment</h3>
              <p className="par">
                Crreating software & websites for media creation and
                distrubation
              </p>
            </div>
            <div className="box">
              <BsFillEmojiSmileFill />
              <h3 className="designs">Healthcare</h3>
              <p className="par">
                Building robust software for helthcare business and
                organisations
              </p>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="content_right ser">
          <img src={Ui} alt="" className="hero_img circle" />
        </div>
        <div className="content_left">
          <h2>Start fast </h2>
          <h3>Finish confidently.</h3>
          <p>
            We want you to be able to start working on your project quickly, so
            we begin planning our work before our first call to hit the ground
            running as soon as you settle on your team. As a quality-obsessed
            software development outsourcing company, we want to ensure your
            satisfaction with our work, so our QA is more thorough than you can
            imagine.
          </p>
        </div>
      </main>
    </>
  );
};

export default Services;

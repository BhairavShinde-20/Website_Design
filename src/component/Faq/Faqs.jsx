import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Faqs = () => {
  return (
    <>
      <Navbar />
      <div className="con_1" id="faq">
        <h1 className="asked">How we do and do not work</h1>
        <div className="wrapper">
          <div className="collapsible">
            <input type="checkbox" id="collapsible-head1" />
            <label htmlFor="collapsible-head1"> Do you do adptive design?</label>
            <div className="collapsible-text">
              <p>
                Yes, we do. Our UI/UX design expertise covers both versatile and
                responsive design. Whether you need to retrofit your existing
                website to make it more mobile-friendly and dynamic or looking
                to build a brand new one, we will ensure your site flaunts
                extraordinary execution and outstanding client experience on any
                browser or device.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="collapsible">
            <input type="checkbox" id="collapsible-head2" />
            <label htmlFor="collapsible-head2">
              Will my website perform well on mobile device
            </label>
            <div className="collapsible-text">
              <p>
                We build future-proof solutions that work and scale well
                regardless of the platform. Depending on your project
                requirements and business goals, our UI/UX design services will
                help you choose the best suitable (responsive or adaptive)
                design approach to make sure your website loads fast, looks
                great on different screen sizes, and easily adapts content to
                any device.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="collapsible">
            <input type="checkbox" id="collapsible-head3" />
            <label htmlFor="collapsible-head3">
              What data do you need from me to start working my project
            </label>
            <div className="collapsible-text">
              <p>
                The first and most important step in beginning any project is
                knowing what you want to achieve. For a UI/UX design project, a
                good start would be outlining your business goals, sharing the
                platforms you’re going for (desktop/mobile), the styles you
                prefer (samples or references), and whether you’re looking for a
                custom or ready-made/modular solution. By outlining your project
                objectives for us, you give us a head start in planning the best
                approach and estimating the actual work to be done. With a clear
                understanding of your vision, well-defined requirements, and a
                target audience to work with, we will be able to get back to you
                with a plan, estimates, and first drafts in mere 2-5 days from
                the moment we have received your request.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="collapsible">
            <input type="checkbox" id="collapsible-head4" />
            <label htmlFor="collapsible-head4">
              How long do you need to show me first wireframe
            </label>
            <div className="collapsible-text">
              <p>
                Wireframes are an incredibly powerful deliverable that can serve
                many purposes from simply communicating your ideas to bringing
                simplicity and usability into complex functional structures. We
                start working on your project as soon as we’ve received your
                request. Depending on the complexity and scale of your project,
                it takes our designers about 8 hours to provide you with the
                first user flows, 2-5 days to create wireframes and mind maps,
                and approximately 2 weeks to turn all those into a design
                prototype. If you are in a real hurry to market and ready to
                provide us with clearly defined requirements, however, we can
                always skip the wireframing phase and go straight to design
                which allows us to significantly speed up the process.{" "}
              </p>
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </> 
  );
};

export default Faqs;

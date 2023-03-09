import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <>
      <div className="con_1" id="faq">
        <h1 className="asked">Frequently Asked Questions</h1>
        <div className="wrapper">
          <div className="collapsible">
            <input type="checkbox" id="collapsible-head1" />
            <label htmlFor="collapsible-head1">What are your rates?</label>
            <div className="collapsible-text">
              <p>
                Our rates average at $30 – $49 / hr depending on factors such as
                the preferred collaboration model, skill level of the
                specialists involved, and project duration. For your
                convenience, we have developed an easy-to-use pricing calculator
                Have a project at hand? Try it out!.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="collapsible">
            <input type="checkbox" id="collapsible-head2" />
            <label htmlFor="collapsible-head2">
              How Quickly will you be able to start on my project?
            </label>
            <div className="collapsible-text">
              <p>
                On average, it takes us 10 business days to launch a project.
                The timeline may be affected by the size of your project
                (requirements analysis, project estimation, and planning) as
                well as the number and availability of the required specialists.
                On complex, enterprise-level projects, the starting phase make
                take up to one month.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="collapsible">
            <input type="checkbox" id="collapsible-head3" />
            <label htmlFor="collapsible-head3">
              How do I know whether my project requries<br></br>a junior middle
              or senior engineer?
            </label>
            <div className="collapsible-text">
              <p>
                Your choice of an engineer should depend on the role they are
                hired to perform on your project as well as the complexity and
                scale of the particular tasks they would need to complete.
                Absolutely, senior and middle engineers possess far better
                coding skills and more knowledge accumulated along the way, in
                turn deduction in time but junior specialist’s is enthusiastic
                and curious about learning new things, this provides your
                project with many new, interesting, unconventional ideas and
                solutions. To avoid any extra costs when hiring a specialist and
                have a clear understanding of WHAT, WHY you’re actually paying
                for, read our comprehensive guide on Software Development Roles
                and Responsibilities in Outsourcing.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="collapsible">
            <input type="checkbox" id="collapsible-head4" />
            <label htmlFor="collapsible-head4">
              Whp will handle the project management?
            </label>
            <div className="collapsible-text">
              <p>
                The project manager should be where most of your software
                development team is. If the majority of your team is located
                in-house, it’s best to keep project management in-house too.
                When going with outsourcing or staff augmentation services,
                however, you should always consider hiring a project manager
                from your vendor. Having a manager close to the team is key to
                efficient communication and high productivity. Learn more about
                the pros and cons of In-house and Outsourced Project Management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;

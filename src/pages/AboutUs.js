
import React from "react";
import Footer from "../component/Footer";
import Showcase2 from "../images/Showcase2.png";

export const AboutUs = () => {
  return (
    <div>
      <section
      class=" text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start border border-5" style={{backgroundColor: '#F67984'}}>
      <div class="container">
        <div class="d-sm-flex align-items-center justify-content-between" >
          <div>
            <h1><span class="text-warning text-bg-dark border rounded-3 fluid" style={{marginRight : '100%' }}> WeMath </span></h1>
            <p class="lead my-4">
              Inspire students to share and explore knowledge in a collaborative community.
            </p>
          </div>
          <img
            class="img-fluid w-50 d-none d-sm-block"
            src="img/showcase.svg"
            alt=""
          />
        </div>
      </div>
    </section>
      <section id="KnowUs" className="p-5 text-light border border-5" style={{backgroundColor: '#F67984'}} >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2>LEND
                A HAND</h2>
              <p className="lead">
                We’re all in this together.

              </p>
              <p>
                We ask for help when we need it and we offer help always
                We approach everything and everyone with a focus on collaboration
                We act with the success of the team in mind
                We all know something we can teach others
              </p>
            </div>
            <div className="col-md">
              <img className='img-fluid' src={Showcase2} alt="showcase"></img>
            </div>
          </div>
        </div>
      </section>
      <section id="KnowUs2" className="p-5 text-light border border-5" style={{backgroundColor: '#F67984'}} >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img className='img-fluid' src={Showcase2} alt="showcase"></img>
            </div>
            <div className="col-md p-5">
              <h2>STAY CURIOUS</h2>
              <p className="lead">
                
                Always wonder. Always explore.
              </p>
              <p>
                We approach every question with a sense of wonder, and we do it with humility and respect
                We talk about what went wrong and freely share lessons learned with others
                We embrace the unexpected and look for ways to see change as opportunity
                We challenge the status quo and always seek to better ourselves, our work and our team
              
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutUs;
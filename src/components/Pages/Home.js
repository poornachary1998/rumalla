import React, { Fragment, useEffect } from "react";
import "./Home.css";

import Countries from "../../Assests/Images/HomeCountries.png";

const Home = () => {
  // useEffect(() => {
  //   document.documentElement.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "instant",
  //   });
  // }, []);

  return (
    <Fragment>
      <section id="234-HomeSection" className="Info">
        <div className="infomain container">
          <div className="details">
            <span className={`span har ${"glow"}`} data-aos="fade-right">
              {/* Rumalla Consulting Services Pvt LTD */}
              RUMALLA CONSULTING SERVICES PVT LTD
            </span>
            <span className={`span web ${"glow"}`} data-aos="fade-left">
              Where Innovation Meets Execution
            </span>
          </div>
          <span className="diveInTag">
            <p className="container text-start  p-5 p-md-1">
              Dive into the world of strategic brilliance with us. Elevate your
              business , where expertise meets innovation, driving unparalled
              growth and strategic excellence
            </p>
          </span>
          {/* <a className={"mailMe"} href="mailto:XXXXXXXXXXX@gmail.com">
          Mail me
        </a> */}
        </div>
      </section>

      <div className="container-fluid globalImage text-center">
        <div className="d-flex align-items-center ms-5 pt-5">
          <h2 className="globalOur">Our</h2>
          <h2 className="ms-3 globalGlobal">Global Presence</h2>
        </div>
        <img className="countriesImg" src={Countries} alt="sdfca"></img>
        <div className="ms-5 py-4 my-0 text-start" >We help you get started within 4 hours to 48 hours</div>
      </div>
    </Fragment>
  );
};

export default Home;

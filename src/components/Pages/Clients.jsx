import React, { useEffect } from "react";
import "./Clients.css";

import CdiLogo from "../../Assests/Images/CDI_Logo.jpg";
import MogasLogo from "../../Assests/Images/MogasLogo.jpg";
import SplitzerLogo from "../../Assests/Images/Logos-Spitzer.png";
import HpLogo from "../../Assests/Images/Hp_logo.jpeg";
import S2kLogo from "../../Assests/Images/s2k.jpg";
import cmarLogo from "../../Assests/Images/cmar.png";
import TechsterLogo from "../../Assests/Images/techster.png";
import ok2goLogo from "../../Assests/Images/ok2goLogo.jpg";
import { Link } from "react-router-dom";

const Clients = () => {
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  },[])
  return (
    <section className="ClientsSection">
      <div className="container clientsHead ">
        <h2 id="012-ClientsSection" className="CHead text-center p-5 ">
          Our Clients
        </h2>
      </div>
      <div className="container ">
        <div className="row row-cols-2 justify-content-center  ">
          <div data-aos="zoom-in" className="Client col-12 col-md-5 col-lg-3  px-5 m-4 text-center d-flex row align-items-center justify-content-center">
            <div className="">
              <img className="my-4" src={CdiLogo} />
            </div>
            <Link to="/clients/cdi" className="clientButtons btn my-2 ">
              Read more
            </Link>
          </div>
          <div data-aos="zoom-in"  className="Client  col-12 col-md-5 col-lg-3 px-5 m-4 text-center  d-flex row align-items-center justify-content-center">
            <div className="">
              <img className="my-4" src={SplitzerLogo} />
            </div>
            <Link to="/clients" className="clientButtons btn my-2 ">
              Read more
            </Link>
          </div>
          <div data-aos="zoom-in"  className="Client  col-12 col-md-5 col-lg-3  px-5 m-4 text-center d-flex row align-items-center justify-content-center">
            <div className="">
              <img className="my-4" src={HpLogo} />
            </div>
            <Link to="/clients" className="clientButtons btn my-2 ">
              Read more
            </Link>
          </div>
          <div data-aos="zoom-in"  className="Client  col-12 col-md-5 col-lg-3    px-5 m-4 text-center d-flex row align-items-center justify-content-center">
            <div className="">
              <img className="my-4" src={cmarLogo} />
            </div>
            <Link to="/clients" className="clientButtons btn my-2 ">
              Read more
            </Link>
          </div>
          <div data-aos="zoom-in"  className="Client   col-12 col-md-5 col-lg-3    px-5 m-4 text-center  d-flex row align-items-center justify-content-center">
            <div className="">
              <img className="my-4" src={MogasLogo} />
            </div>
            <Link to="/clients/mogas" className="clientButtons btn my-2 ">
              Read more
            </Link>
          </div>
          <div data-aos="zoom-in"  className="Client  col-12 col-md-5 col-lg-3  px-5 m-4 text-center d-flex row align-items-center justify-content-center">
            <div className="">
              <img className="my-4" src={TechsterLogo} />
            </div>
            <Link to="/clients" className="clientButtons btn my-2 ">
              Read more
            </Link>
          </div>{" "}
          <div data-aos="zoom-in"  className="Client  col-12 col-md-5 col-lg-3 px-5 m-4 text-center d-flex row align-items-center justify-content-center">
            <div className="">
              <img className="my-4" src={S2kLogo} />
            </div>
            <Link to="/clients" className="clientButtons btn my-2 ">
              Read more
            </Link>
          </div>
          <div data-aos="zoom-in"  className="Client col-12 col-md-5 col-lg-3 px-5 m-4 text-center d-flex row align-items-center justify-content-center">
            <div className="">
              <img className="my-4" src={ok2goLogo} />
            </div>
            <Link to="/clients" className="clientButtons btn my-2 ">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// <div className="d-flex col justify-content-around mx-5  ">
// <div className="Client col-4 px-5 m-4 text-center">
//   <div className="">
//     <img className="my-4" src={CdiLogo} />
//   </div>
//   <button type="button" className="btn  my-2 ">
//     Read more
//   </button>
// </div>

// <div className="Client col-4  px-5 m-4 text-center">
//   <div className="">
//     <img className="my-4" src={MogasLogo} />
//   </div>

//   <button type="button" className="btn  my-2 ">
//     Read more
//   </button>
// </div>
// </div>
// <div className="d-flex col justify-content-around  mx-5 ">
// <div className="Client col-4 px-5 m-4 text-center">
//   <div className="">
//     <img className="my-4" src={SplitzerLogo} />
//   </div>
//   <button type="button" className="btn  my-2 ">
//     Read more
//   </button>
// </div>
// <div className="Client col-4  px-5 m-4 text-center">
//   <div className="">
//     <img className="my-4" src={HpLogo} />
//   </div>
//   <button type="button" className="btn  my-2 ">
//     Read more
//   </button>
// </div>
// </div>
export default Clients;

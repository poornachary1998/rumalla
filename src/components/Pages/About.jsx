import React, { useEffect } from "react";
import "./About.css";
import AboutImg from "../../Assests/Images/about.png";
import AboutImg2 from "../../Assests/Images/about3.png";
import Countries from "../../Assests/Images/countries.png";

const About = () => {
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <section id="937-AboutSection" className="AboutSection">
      <div className="container aboutUsHead">
        <h2 className="AHead text-center p-3 p-md-5">About us</h2>
      </div>
      <div className="container">
        <div className="">
          <div className="d-flex row justify-content-around align-items-center mt-5">
            <div   className=" row justify-content-around align-items-center">
              <p className="col-12 col-md-7 aboutText" data-aos="fade-right">
                Rumalla Consulting Services in India has a team of experts in
                Operations, Engineering, Purchasing, Procurement, Manufacturing
                etc, having years of experience. We have worked with clients
                from various industries and have a deep understanding of the
                challenges that businesses face in managing their operations.
                Our expertise enables them to provide customized solutions that
                meet the specific needs of each client. In addition, Rumalla
                Consulting Services in India stays up-to-date with the latest
                best practices and industry trends.
              </p>
              <img
              data-aos="fade-left"
                className="col-8 col-md-4 imgs aboutSide"
                src={AboutImg}
                alt="consultancy Firm"
              ></img>
            </div>
            <div className="secondAboutROw d-flex row  justify-content-around align-items-center">
            <img
            data-aos="fade-right"
                className="col-8 col-md-4  imgs "
                src={AboutImg2}
                alt="consultancy Firm"
              ></img>
              <p data-aos="fade-left" className="col-12 col-md-7 aboutText">
                This allows us to offer them innovative solutions that can help
                businesses stay ahead of the competition. By leveraging their
                expertise, businesses can improve their operations and ensure
                24X7 support is available with qualified resources at the lowest
                cost. Our core focus lies in providing rapid and efficient
                technology, process solutions and services which are required
                for the Domain and clients across the Globe.
              </p>

            </div>
          </div>
        </div>
        {/* <h3 className="">We are located over below countries,</h3>

        <div className="countriesImg text-center">
          <img src={Countries} alt="sdfca"></img>
        </div> */}
      </div>
    </section>
  );
};

export default About;

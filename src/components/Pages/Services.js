import React, { useEffect, useState } from "react";
import "./Services.css";
import {
  DataAnalytics,
  DataScience,
  Documentation,
  Engineering,
  Manufacturing,
  Operations,
  Procurememnt,
  Sap,
} from "../services/AllServices";

const Services = () => {
  const [currentServiceOne, setCurrentServiceOne] =
    useState("service5operations");
  const [currentServiceTwo, setCurrentServiceTwo] = useState(
    "service5dataanalytics"
  );

  const ServiceOneHandler = (e) => {
    setCurrentServiceOne(e.target?.id);
  };
  const ServiceTwoHandler = (e) => {
    setCurrentServiceTwo(e.target?.id);
  };
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  },[])
  return (
    <section>
      <div className="container servicesHead">
        <h2 id="678-ServicesSection" className="SHead text-center p-3 p-md-5">
          Our Services
        </h2>
      </div>
      <div className="container">
        <div className="ServicesContainer">
          <div className="serviceHeads d-flex  row justify-content-around p-0 ">
            <h3
              id="service5operations"
              onClick={ServiceOneHandler}
              className={`${
                currentServiceOne === "service5operations" &&
                "ActiveserviceHeads"
              } col-6 col-lg-3 text-center m-0 p-2`}
            >
              Operations
            </h3>
            <h3
              id="service5procuremenmt"
              onClick={ServiceOneHandler}
              className={`${
                currentServiceOne === "service5procuremenmt" &&
                "ActiveserviceHeads"
              }  col-6 col-lg-3  text-center m-0 p-2`}
            >
              Procurement
            </h3>
            <h3
              id="service5manufacturing"
              onClick={ServiceOneHandler}
              className={`${
                currentServiceOne === "service5manufacturing" &&
                "ActiveserviceHeads"
              }  col-6 col-lg-3  text-center m-0 p-2`}
            >
              Manufacturing
            </h3>
            <h3
              id="service5engineering"
              onClick={ServiceOneHandler}
              className={`${
                currentServiceOne === "service5engineering" &&
                "ActiveserviceHeads"
              }  col-6 col-lg-3  text-center m-0 p-2`}
            >
              Engineering
            </h3>
          </div>
          {currentServiceOne === "service5operations" && <Operations />}
          {currentServiceOne === "service5procuremenmt" && <Procurememnt />}
          {currentServiceOne === "service5manufacturing" && <Manufacturing />}
          {currentServiceOne === "service5engineering" && <Engineering />}
        </div>
        <div className="ServicesContainerTwo">
          <div className="serviceHeads d-flex row p-0">
            <h3
              id="service5dataanalytics"
              onClick={ServiceTwoHandler}
              className={`${
                currentServiceTwo === "service5dataanalytics" &&
                "ActiveserviceHeads"
              }  col-6 col-lg-3 text-center m-0 p-2`}
            >
              Data Analytics
            </h3>
            <h3
              id="service5documentation"
              onClick={ServiceTwoHandler}
              className={`${
                currentServiceTwo === "service5documentation" &&
                "ActiveserviceHeads"
              }  col-6 col-lg-3 text-center m-0 p-2`}
            >
              Documentation
            </h3>
            <h3
              id="service5datascience"
              onClick={ServiceTwoHandler}
              className={`${
                currentServiceTwo === "service5datascience" &&
                "ActiveserviceHeads"
              }  col-6 col-lg-3 text-center m-0 p-2`}
            >
              Data Science
            </h3>
            <h3
              id="service5sap"
              onClick={ServiceTwoHandler}
              className={`${
                currentServiceTwo === "service5sap" && "ActiveserviceHeads"
              }  col-6 col-lg-3 text-center m-0 p-2`}
            >
              SAP
            </h3>
          </div>
          {currentServiceTwo === "service5dataanalytics" && <DataAnalytics />}
          {currentServiceTwo === "service5documentation" && <Documentation />}
          {currentServiceTwo === "service5datascience" && <DataScience />}
          {currentServiceTwo === "service5sap" && <Sap />}
        </div>
      </div>
    </section>
  );
};

export default Services;

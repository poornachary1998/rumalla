import React, { useEffect, useState } from "react";
import "./CdiPage.css";
import CdiLogo from "../../Assests/Images/CDI_Logo.jpg";
import CdiSingaporePage from "./CdiSingaporePage";
import CdiUsPage from "./CdiUsPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CdiMainPage = () => {
  const [currentMarket, SetCurrentMarket] = useState("cdiSingaporemarket");

  const CdiMarketHandler = (e) => {
    SetCurrentMarket(e.target.id);
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
      <div className="container">
        {/* <span className="position-absolute">
            <FontAwesomeIcon icon={faCircleArrowLeft}  size={"100"}/>
        </span> */}
        <div className="row d-flex align-items-center m-auto justify-content-center">
          <img className="col-4 my-5" src={CdiLogo} />
          <div className="cdiMarkets d-flex row align-items-center m-0 p-0 justify-content-around">
            <h4
              id="cdiSingaporemarket"
              onClick={CdiMarketHandler}
              className={`${currentMarket === "cdiSingaporemarket" && 'activeMarket'} text-center col-6 p-2 m-0`}
            >
              Singapore
            </h4>
            <h4
              id="cdiUsmarket"
              onClick={CdiMarketHandler}
              className={`${currentMarket === "cdiUsmarket" && 'activeMarket'} text-center col-6 p-2 m-0`}
            >
              US
            </h4>
          </div>
        </div>

        {currentMarket === "cdiSingaporemarket" && <CdiSingaporePage />}
        {currentMarket === "cdiUsmarket" && <CdiUsPage />}
      </div>
    </section>
  );
};

export default CdiMainPage;

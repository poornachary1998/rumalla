import React, { Fragment } from "react";
import "./Backdrop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const BackDrop = ({ CloseContactInfo }) => {
  return (
    <div
      id="backdrop"
      className="backdrop d-flex justify-content-center align-items-center"
      onClick={CloseContactInfo}
    >
      <div
        id="modalContact"
        className="Modal position-absolute text-center p-4 rounded-3"
        onClick={(e) => {
          e.stopPropagation();
        }}
        data-aos="zoom-in" 
      >
        <div>
          <h2 className="pb-3">Contact Info</h2>
          <ul className="ContactInformation p-0 text-start mt-3">
            <li className=" mt-3 mb-2">
              <FontAwesomeIcon icon={faMapLocationDot} className="me-4" />
              4th Floor, Surya Towers, S.D. Road, Secunderabad.
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faPhone} className="me-4" />
              +91 9100910156
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="me-4" />
              rumalla@rumallaconsulting.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BackDrop;

import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mainFooter text-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Info</h3>
            <ul className="footerLists p-0">
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
          <div className="col-md-5">
            <h3>Services</h3>
            <div className="d-flex ">
              <ul className="servicesFooterItems  footerLists p-0">
                <li className="mt-3 mb-2">
                  <FontAwesomeIcon icon={faChevronRight} className="me-4" />
                  <Link to='/services'>Operations</Link>
                  
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faChevronRight} className="me-4" />
                  <Link to='/services'>Procurement</Link>
                  
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faChevronRight} className="me-4" />
                  <Link to='/services'>Manufacturing</Link>
                  
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faChevronRight} className="me-4" />
                  <Link to='/services'>Engineering</Link>
                  
                </li>
              </ul>{" "}
              <ul className="servicesFooterItems  footerLists p-0 ms-5">
                <li className=" mt-3  mb-2">
                  <FontAwesomeIcon icon={faChevronRight} className="me-4" />
                  <Link to='/services'>Data Analytics</Link>
                  
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faChevronRight} className="me-4" />
                  <Link to='/services'>Documentation</Link>
                  
                </li>

                <li className="mb-2">
                  <FontAwesomeIcon icon={faChevronRight} className="me-4" />
                  <Link to='/services'>Data Science</Link>
                  
                </li>

                <li className="mb-2">
                  <FontAwesomeIcon icon={faChevronRight} className="me-4" />
                  <Link to='/services'>SAP</Link>
                  
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <h3>About Us</h3>
            <ul className="footerLists p-0">
              <li className=" mt-3 mb-2">
                At Rumalla, we are able to align diversified and intricate needs of our clients by providing reliable and strategic engineering solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

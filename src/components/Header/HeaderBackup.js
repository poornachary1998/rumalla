import React from "react";
import "./Header.css";

import RumalaLogo from "../../Assests/Images/RumalaLogo.jpg";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header({ OpenContactInfo }) {
  return (
    <>
      <header className="mainHeader sticky">
        
        <div className=" container dflex justify-content-between  align-items-center px-3 py-0 nav">
            <div className="otherSelect d-flex align-items-center">
              <img src={RumalaLogo} alt="Rummala Logo" />
            </div>
          
          <div className="HeaderPageOptions d-flex align-items-center">
            <ul className="headerItems nav justify-content-center align-items-center ms-5">
              <li className="nav-item d-flex align-items-center ">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link-active" : "nav-link "
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item d-flex align-items-center ">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link-active" : "nav-link "
                  }
                  end
                >
                  About us
                </NavLink>
              </li>{" "}
              <li className="nav-item d-flex align-items-center ">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "nav-link-active" : "nav-link"
                  }
                  end
                >
                  Our Services
                </NavLink>
              </li>
              <li className="nav-item d-flex align-items-center ">
                <NavLink
                  to="/clients"
                  className={({ isActive }) =>
                    isActive ? "nav-link-active" : "nav-link "
                  }
                  end
                >
                  Our Clients
                </NavLink>
              </li>{" "}
            </ul>
          </div>
          <div className="ContactButton px-4 py-2 rounded-pill"
            onClick={OpenContactInfo}
          >
            <h4>Contact Us</h4>
          </div>

          {/* <button className="HeaderOptionsButton px-3">
            <FontAwesomeIcon icon={faBars} />
          </button> */}
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;

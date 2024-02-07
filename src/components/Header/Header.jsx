import React from "react";
import "./Header.css";
import RumalaLogo from "../../Assests/Images/RumalaLogo.jpg";
import { NavLink, Outlet } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header({ OpenContactInfo }) {
  return (
    <>
      <header className="mainHeader sticky">
        <Navbar expand="lg" >
          <Container > 
            <Navbar.Brand href="/">
              <div className="RumallaLogo">
                <img src={RumalaLogo} alt="Rummala Logo" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="collapsingBox" >
            <ul className="headerItems nav justify-content-between align-items-center ms-5">
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

            <div className="ContactButton px-4 py-2 ms-5 rounded-pill"
            onClick={OpenContactInfo}
            data-aos="fade-left"
          >
            <h4>Contact Us</h4>
          </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Outlet />
    </>
  );
}

export default Header;

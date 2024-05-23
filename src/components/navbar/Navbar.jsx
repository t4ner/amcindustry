import React, { useEffect, useState } from "react";
import "./navbar.css";
import "./navbar2.css";

import logo from "/logo/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isContactPage, setIsContactPage] = useState(false);

  useEffect(() => {
    setIsContactPage(window.location.pathname === "/contact");
  }, []);
  const [openServices, setOpenServices] = useState(false);
  const [openTradingServices, setOpenTradingServices] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className={isContactPage ? "contact-navbar" : ""}>
        <nav className="nav ">
          <div className="nav__data">
            <Link to="/" className="nav__logo ">
              <img src={logo} alt="" className="h-44 mt-[88px]" />
            </Link>
            <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
              {menuOpen ? (
                <i className="ri-menu-line nav__burger"></i>
              ) : (
                <i className="ri-menu-line nav__burger"></i>
              )}
            </div>
          </div>

          <div
            className={menuOpen ? "nav__menu show-menu" : "nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list  text-lg ">
              <li>
                <Link to="/" className="nav__link">
                  HOME
                </Link>
              </li>
              <li className="dropdown__item">
                <div className="nav__link">
                  <Link to="/services">SERVICES</Link>{" "}
                  <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>
                <ul className="dropdown__menu z-50">
                  <li>
                    <Link
                      to="/equipment-supply-services"
                      className="dropdown__link p-3"
                    >
                      Equipment & Spare Part Supply
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/construction-services"
                      href="#"
                      className="dropdown__link p-3"
                    >
                      Construction Services
                    </Link>
                  </li>

                  <li className="dropdown__subitem w-52">
                    <div className="dropdown__link p-3 ">
                      <Link to="/trading-services ">Trading Service</Link>
                      <i className="ri-add-line dropdown__add"></i>
                    </div>
                    <ul className="dropdown__submenu w-44">
                      <li className="">
                        <Link
                          to="/clinker-and-cement-trading"
                          className="dropdown__sublink p-3 "
                        >
                          Clinker & Cement Trading
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/coal-trading"
                          className="dropdown__sublink p-3"
                        >
                          Coal Trading
                        </Link>
                      </li>{" "}
                      <li>
                        <Link
                          to="/alternative-fuels"
                          className="dropdown__sublink p-3"
                        >
                          Alternative Fuels Trading
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      to="/finance-solutions"
                      className="dropdown__link p-3"
                    >
                      Finance Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/project-management"
                      className="dropdown__link p-3"
                    >
                      Project Management
                    </Link>
                  </li>
                  <li>
                    <Link to="/consultancy" className="dropdown__link p-3">
                      Consultancy
                    </Link>
                  </li>
                  <li>
                    <Link to="/engineering" className="dropdown__link p-3">
                      Engineering
                    </Link>
                  </li>
                  <li>
                    <Link to="/licensing" className="dropdown__link p-3">
                      Licensing
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/whoweare" href="#" className="nav__link">
                  WHO WE ARE
                </Link>
              </li>

              {/* <li>
              <Link to="/world-map" href="#" className="nav__link">
                WORLD MAP
              </Link>
            </li> */}
              <li>
                <Link to="/contact" href="#" className="nav__link">
                  CONTACT
                </Link>
              </li>
              <li>
                <a href="#" className="nav__link"></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="header">
        <div className="">
          <Link to="/">
            <img src={logo} alt="" className="h-24" />
          </Link>
        </div>
        <input type="checkbox" id="nav_check" hidden />
        <nav className="z-50">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <div className="flex items-center">
                <Link to="/services">SERVICES</Link>

                <button
                  className="ml-5"
                  onClick={() => setOpenServices(!openServices)}
                >
                  <i className="ri-arrow-down-line text-[#006495]"></i>
                </button>
              </div>
            </li>
            {openServices && (
              <div className="">
                <ul className="ml-3">
                  <li>
                    {" "}
                    <Link to="/equipment-supply-services">
                      Equipment & Spare Part Supply
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/construction-services">
                      Construction Services
                    </Link>
                  </li>

                  <div className="flex items-center">
                    <li>
                      <Link to="/trading-services">Trading Service</Link>
                    </li>
                    <button
                      className="ml-5"
                      onClick={() =>
                        setOpenTradingServices(!openTradingServices)
                      }
                    >
                      <i className="ri-arrow-down-line font-semibold text-[#006495]"></i>{" "}
                    </button>
                  </div>
                  {openTradingServices && (
                    <div className="">
                      <ul className="ml-4">
                        <li>
                          {" "}
                          <Link to="/clinker-and-cement-trading">
                            Clinker & Cement Trading
                          </Link>
                        </li>
                        <li>
                          <Link to="/coal-trading">Coal Trading</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/alternative-fuels">
                            Alternative Fuels Trading
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                  <li>
                    {" "}
                    <Link to="/finance-solutions">Finance Solutions</Link>
                  </li>

                  <li>
                    {" "}
                    <Link to="/project-management">PROJECT MANAGEMENT</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/consultancy">CONSULTANCY</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/engineering">ENGINEERING</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/licensing">LICENSING</Link>
                  </li>
                </ul>
              </div>
            )}

            <li>
              <Link to="/whoweare" href="#">
                WHO WE ARE
              </Link>
            </li>
            {/* <li>
      <Link to="/world-map" href="#" className="nav__link">
        WORLD MAP
      </Link>
    </li> */}
            <li>
              <Link to="/contact" href="#">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
        <label for="nav_check" className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </div>
    </>
  );
}

export default Navbar;

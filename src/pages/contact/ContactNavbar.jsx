import React, { useState } from "react";
import "./contactnavbar.css";
import logo from "/logo/logo.png";
import { Link} from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="nav2 ">
        <div className="nav__data2">
          <Link to="/" className="nav__logo2">
            <img src={logo} alt="" className="h-24 md:h-40 mt-10" />
          </Link>
          <div className="nav__toggle2" id="nav-toggle2" onClick={toggleMenu}>
            {menuOpen ? (
              <i className="ri-menu-line nav__burger2"></i>
            ) : (
              <i className="ri-menu-line nav__burger2"></i>
            )}
          </div>
        </div>

        <div
          className={menuOpen ? "nav__menu2 show-menu2" : "nav__menu2"}
          id="nav-menu2"
        >
          <ul className="nav__list2  text-lg ">
            <li>
              <Link to="/" className="nav__link2">
                HOME
              </Link>
            </li>
            <li className="dropdown__item2">
              <div className="nav__link2">
                <Link to="/services">SERVICES</Link>{" "}
                <i className="ri-arrow-down-s-line dropdown__arrow2"></i>
              </div>
              <ul className="dropdown__menu2">
                <li className="dropdown__subitem2 w-52">
                  <div className="dropdown__link2 p-3 ">
                    <Link to="/trading-services">Trading Service</Link>
                    <i className="ri-add-line dropdown__add2"></i>
                  </div>
                  <ul className="dropdown__submenu2 w-44">
                    <li className="">
                      <Link
                        to="/clinker-and-cement-trading"
                        className="dropdown__sublink2 p-3 "
                      >
                        Clinker & Cement Trading
                      </Link>
                    </li>
                    <li>
                      <Link to="/coal-trading" className="dropdown__sublink2 p-3">
                        Coal Trading
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        to="/alternative-fuels"
                        className="dropdown__sublink2 p-3"
                      >
                        Alternative Fuels Trading
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/construction-services"
                    href="#"
                    className="dropdown__link2 p-3"
                  >
                    Construction Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/equipment-supply-services"
                    className="dropdown__link2 p-3"
                  >
                    Equipment & Spare Part Supply
                  </Link>
                </li>

                <li>
                  <Link to="/finance-solutions" className="dropdown__link2 p-3">
                    Finance Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/project-management" className="dropdown__link2 p-3">
                  Project Management
                  </Link>
                </li>
                <li>
                  <Link to="/consultancy" className="dropdown__link2 p-3">
                  Consultancy
                  </Link>
                </li>
                <li>
                  <Link to="/engineering" className="dropdown__link2 p-3">
                  Engineering
                  </Link>
                </li>
                <li>
                  <Link to="/licensing" className="dropdown__link2 p-3">
                  Licensing
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/whoweare" href="#" className="nav__link2">
                WHO WE ARE
              </Link>
            </li>

            {/* <li>
              <Link to="/world-map" href="#" className="nav__link">
                WORLD MAP
              </Link>
            </li> */}
            <li>
              <Link to="/contact" href="#" className="nav__link2">
                CONTACT
              </Link>
            </li>
            <li>
              <a href="#" className="nav__link2"></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
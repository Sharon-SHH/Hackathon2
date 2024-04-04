import React from "react";
import Logo from "../../assets/images/Sharon and Sachie Ltd.png";
import { Link } from "react-router-dom";
import "../Header/Header.scss";

function Header() {
  return (
    <ul className="header">
      <li className="header__wrapper">
        <Link to="/">
          <img className="header__logo" src={Logo} alt="header logo" />
        </Link>
        <span className="header__about">Color Detector</span>
      </li>
      <li className="header__title">
        <h1>
          Unleash the <span className="rainbow">Spectrum</span> <br></br>of Your
          Images
        </h1>
      </li>
    </ul>
  );
}

export default Header;

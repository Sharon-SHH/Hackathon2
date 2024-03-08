import React from "react";
import Logo from "../../assets/images/Sharon and Sachie Ltd.png";
import { Link } from "react-router-dom";
import "../Header/Header.scss";

function Header() {
  return (
    <div className="header">
      <ul className="header__list">
        <li>
          <Link to="/">
            <img className="header__logo" src={Logo} alt="header logo" />
          </Link>
        </li>
        <li className="header__about">Color Detector</li>
        <li className="header__title">
          <h1 className="hero__title">
            Unleash the <span className="rainbow">Spectrum</span> of Your Images
          </h1>
        </li>
      </ul>
    </div>
  );
}

export default Header;

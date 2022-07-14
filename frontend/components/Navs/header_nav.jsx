import React from "react";
import { Link } from "react-router-dom";
import UserIcon from "./user_icon";
import Modal from "../Modal/modal"

const HeaderNav = () => {
  return (
    <div className="NavHeader">
      <div className="NavHeader-left">
        <Link to="/buy"> Buy </Link>
        <Link to="/rent"> Rent </Link>
        <Link to="/sell"> Sell </Link>
      </div>
      <Link to="/" className="logo-container">
        <img className="logo" src={window.logoURL} />
      </Link>
      <div className="NavHeader-right">
        <a href="https://www.linkedin.com/in/anton-pinchuk-05443a1a4/"> LinkedIn</a>
        <a href="https://github.com/Wayattearp">Github</a>
        <UserIcon />
        <Modal />
      </div>
    </div>
  );
};

export default HeaderNav;

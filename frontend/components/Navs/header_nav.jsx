import React from "react";
import { Link } from "react-router-dom";
import UserIcon from "./user_icon";
import Modal from "../Modal/modal"

const HeaderNav = () => {
  return (
    <div className="NavHeader">
      <div className="NavHeader-left">
        <Link to="/search"> Buy </Link>
        <Link to="/search"> Rent </Link>
        <Link to="/sell"> Sell </Link>
      </div>
      <Link to="/" className="logo-container">
        <img className="logo" src={window.logoURL} />
      </Link>
      <div className="NavHeader-right">
        <a> LinkedIn</a>
        <a href="https://github.com/Wayattearp">Github</a>
        <UserIcon />
        <Modal />
      </div>
    </div>
  );
};

export default HeaderNav;

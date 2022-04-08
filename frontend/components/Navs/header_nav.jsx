import React from "react";
import { Link } from "react-router-dom";
import LoginNav from "./login_nav"
const HeaderNav = () => {
      return (
        <div className="NavHeader">
            <div className="NavHeader-left">
                <Link to="/search"> Buy </Link>
                <Link to="/search"> Rent </Link>
                <Link to="/sell"> Sell </Link>
            </div>
              <div className="NavHeader-right">
                <LoginNav />
            </div>
        </div>
  );
};

export default HeaderNav;

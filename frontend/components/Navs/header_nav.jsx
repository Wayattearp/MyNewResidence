import React from "react";
import { Link } from "react-router-dom";
import SignInNav from "./sign_in_nav_container"
const HeaderNav = () => {
      return (
        <div className="NavHeader">
            <div className="NavHeader-left">
                <Link to="/search"> Buy </Link>
                <Link to="/search"> Rent </Link>
                <Link to="/sell"> Sell </Link>
            </div>
              <div className="NavHeader-right">
                <SignInNav />
            </div>
        </div>
  );
};

export default HeaderNav;

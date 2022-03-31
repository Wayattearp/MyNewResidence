import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

const Splash = (props) => {
    return (
        <div className=" main-search-wrapper">
            <div className="main-content-slogan-container">
                <span> Whether you’re buying, selling or renting,</span>
                <span> we can help you move forward.</span>
            </div>

            <div className="options-wrapper">
                <Link to="/search">
                    <img src={window.buyimgURL} className="options-img" />
                    <h4>Buy a home</h4>
                    <p className="splash-card-content">
                        Find your new residence with an immersive photo experience and the most listings.
                    </p>
                    <div>
                        <button className="options-btn">Search Homes</button>
                    </div>
                </Link>
                <Link to="/sell">
                    <img src={window.sellimgURL} className="options-img" />
                    <h4>Sell a home</h4>
                    <p className="splash-card-content">
                        Discover your own path to a successful sale.
                    </p>
                    <div>
                        <button className="options-btn">See your options</button>
                    </div>
                </Link>
                <Link to="/search">
                    <img src={window.rentimgURL} className="options-img" />
                    <h4>Rent a home</h4>
                    <p className="splash-card-content">
                        We’re creating a seamless online experience – from shopping on the
                        largest rental network.
                    </p>
                    <div>
                        <button className="options-btn">Find Rentals</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Splash;
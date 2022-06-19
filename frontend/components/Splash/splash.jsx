import React from "react";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { openModal } from "../../actions/modal_actions";
import { useDispatch } from "react-redux";
import SearchBar from "../Search/search_bar";

const Splash = (props) => {
    let dispatch = useDispatch();
    if (!props.loggedIn) {
        dispatch(openModal("login"));
    }
    return (
        <div className=" main-search-wrapper">
            <img src={window.searchBgUrl} className="search-background" />
            <div className="main-search">
                <div className="search-slogan"> Open a new page of your life </div>
                <div className="search-bar-container">
                    <SearchBar />
                </div>
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
            <Footer />
        </div>
    );
};

const mapStateToProps = state => (
    { loggedIn: Boolean(state.session.currentUser) }
);


export default connect(mapStateToProps)(Splash);
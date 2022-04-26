import React from "react";

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer-container">

                <div className="icons">

                </div>
                <a href="https://github.com/Wayattearp">
                    <i className="fab fa-github"></i>
                </a>
            </div>

            <img src={window.footerUrl} draggable="false" className="footer-img" />
        </div>
    );
};

export default Footer;
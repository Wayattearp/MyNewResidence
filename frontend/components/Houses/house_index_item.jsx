import React from 'react';
import { withRouter } from 'react-router-dom';
import { motion } from "framer-motion";

class HouseIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
        const houseId = this.props.house.id;
        this.props.history.push(`/houses/${houseId}`);
    }


    render() {

        return (
            <motion.div className="houseIndexItem"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ x:0,
                    opacity: 1, scale: 1, transition: {
                        duration: 0.4,
                        x: "300px",
                    }
                }}
                exit={{ opacity: 0 }}
                layout
            >
                <div
                    onClick={this.handleClick}>
                    <div className="property-thumbnail-container">
                        <div className="property-thumbnail">
                            <img src={this.props.house.photoUrls} />
                            
                            <div className="property-thumbnail-info">
                                {this.props.house.is_rent ? (
                                    <h2>$ {`${this.props.house.price}`} /mo</h2>
                                ) : (
                                    <h2>$ {`${this.props.house.price.toLocaleString()}`}</h2>
                                )}
                                <p>{`${this.props.house.address}, ${this.props.house.city}, ${this.props.house.state} ${this.props.house.zipcode}`}</p>
                                {console.log(this.props.house)}
                                {this.props.house.is_rent ? "" : "For sale"}
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div >
            // </div>
        );
    }

};

export default withRouter(HouseIndexItem);


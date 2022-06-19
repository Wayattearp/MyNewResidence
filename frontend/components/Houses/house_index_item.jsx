import React from 'react';
import { withRouter } from 'react-router-dom';

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
            <div className="houseIndexItem"
            >
                <div
                    onClick={this.handleClick}>
                    <div className="property-thumbnail-container">
                        <div className="property-thumbnail">
                            <img src={this.props.house.photoUrls} />

                            <div className="property-thumbnail-info">
                                <h2>${`${this.props.house.price}`} /mo</h2>
                                <p>{`${this.props.house.address}, ${this.props.house.city}, ${this.props.house.state} ${this.props.house.zipcode}`}</p>
                                {this.props.house.is_rent ? "For sale" : ""}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }

};

export default withRouter(HouseIndexItem);


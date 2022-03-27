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


    componentDidMount() {

    }


    render() {
        return (
            <div className="houseIndexItem"
                >
                    <div
                    onClick={this.handleClick}>

                     house_id:{this.props.house.id}
                    </div>

            </div>
        );
    }

};

export default withRouter(HouseIndexItem);


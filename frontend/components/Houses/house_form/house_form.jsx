import React from 'react';
import { withRouter } from 'react-router-dom';

class HouseForm extends React.Component {
    constructor(props) {
        super(props);
        this.coords = { lat: props.lat, lng: props.lng }
        this.state = {
            description: '', 
        }
    }

    render() {
        const { lat, lng } = this.coords;

        return(
            <div>HOUSEFORM</div>
        )
    }
}

export default withRouter(HouseForm);
import React from 'react';
import { withRouter } from 'react-router-dom';

class HouseForm extends React.Component {
    constructor(props) {
        super(props);
        this.coords = { lat: props.lat, lng: props.lng };
        this.state = {
            address: '',
            description: '',
            state: '',
            city: '',
            zipcode: '',
            price: '',
            beds: '',
            baths: '',
            sqft: '',
            is_rent: '',
            yr_built: '',


        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToSearch = this.navigateToSearch.bind(this);
    }

    update(property) {
        return e => this.setState({
            [property]: e.target.value
        });
    }


    navigateToSearch() {
        this.props.history.push('/');
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('house[description', this.state.description);
        formData.append('house[lat]', this.coords['lat']);
        formData.append('house[lng', this.coords['lng']);

        this.props.createHouse(formData);
        this.navigateToSearch();
    }

    render() {
        const { lat, lng } = this.coords;
        const { description } = this.state;

        return (
            <div className='new-house-container'>
                <div className='new-house-form'>
                    <h3 className='new-house-title'> Create Rental</h3>

                    <form onSubmit={this.handleSubmit}>
                        <label className='new-house-description'> Description </label>
                        <input
                            type="text"
                            value={description}
                            onChange={this.update('description')}
                            className='house-field'
                        />

                        <label className='house-field'>Latitude</label>
                        <input
                            type="text"
                            disabled
                            value={lat}
                            className='house-field'
                        />

                        <label className='house-field'>Longitude</label>
                        <input
                            type="text"
                            disabled
                            value={lng}
                            className='house-field'
                        />

                        <div className="button-holder">
                            <input
                                type="submit"
                                value="Create House"
                                className="new-house-button"
                            />
                        </div>
                        <div className="button-holder">
                            <button
                                className="new-house-button"
                                onClick={this.navigateToSearch}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>


                </div>

            </div>
        )
    }
}

export default withRouter(HouseForm);
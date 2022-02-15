import React from 'react';
import { withRouter } from 'react-router-dom';



class HouseForm extends React.Component {
    constructor(props) {
        super(props);
        this.coords = { lat: props.lat, lng: props.lng };
        this.state = {
            address: '48 street',
            description: 'ui',
            state: 'NY',
            city: 'brooklyn',
            zipcode: 0,
            price: 0,
            beds: 0,
            baths: 0,
            sqft: 0,
            is_rent: true,
            yr_built: 2022,

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToSearch = this.navigateToSearch.bind(this);
        this.handleInputVals = this.handleInputVals.bind(this);
        console.log(this.props)
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
        let isValid = this.handleInputVals();
        if (isValid) {
            const formData = new FormData();
            // formData.append('house[city_id]', this.state.city_id);
            // formData.append('house[state_id]', this.state.state_id);
            formData.append('house[description]', this.state.description);
            formData.append('house[address]', this.state.address);
            formData.append('house[state]', this.state.state);
            formData.append('house[city]', this.state.city);
            formData.append('house[zipcode]', this.state.zipcode);
            formData.append('house[price]', this.state.price);
            formData.append('house[beds]', this.state.beds);
            formData.append('house[baths]', this.state.baths);
            formData.append('house[sqft]', this.state.sqft);
            formData.append('house[is_rent]', this.state.is_rent);
            formData.append('house[yr_built]', this.state.yr_built);
            formData.append('house[lat]', this.coords['lat']);
            formData.append('house[lng]', this.coords['lng']);

            this.props.createHouse(formData)
        }
    }

    handleInputVals() {
        if (!isNaN(parseInt(this.state.city))) {
            window.alert("City name should be String");
            return false;
        }
        if (!isNaN(parseInt(this.state.state))) {
            window.alert("State name should be String");
            return false;
        }
        if (isNaN(parseInt(this.state.zipcode)) || this.state.zipcode.length != 5) {
            window.alert("Zipcode value should be 5 digits Integer");
            return false;
        }
        if (isNaN(parseInt(this.state.price))) {
            window.alert("Price value should be Integer");
            return false;
        }
        if (isNaN(parseInt(this.state.baths))) {
            window.alert("Bathrooms value should be Integer");
            return false;
        }
        if (isNaN(parseInt(this.state.beds))) {
            window.alert("Bedrooms value should be Integer");
            return false;
        }
        if (isNaN(parseInt(this.state.sqft))) {
            window.alert("Sqft value should be Integer");
            return false;
        }

        return true;
    };

    render() {
        const { lat, lng } = this.coords;
        const { description, address, state, city, zipcode, price, beds, baths, sqft, is_rent, yr_built } = this.state;

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
                        <label className='new-house-address'> Address </label>
                        <input
                            type="text"
                            value={address}
                            onChange={this.update('address')}
                            className='house-field'
                        />
                        <label className='new-house-state'> State </label>
                        <select
                            onChange={this.update('state')}
                            className='house-field'>
                            <option value="NY">NY</option>
                            <option value="NJ">NJ</option>
                        </select>
                        <label className='new-house-city'> City </label>
                        <input
                            type="text"
                            value={city}
                            onChange={this.update('city')}
                            className='house-field'
                        />
                        <label className='new-house-zipcode'> Zipcode </label>
                        <input
                            type="number"
                            value={zipcode}
                            onChange={this.update('zipcode')}
                            className='house-field'
                        />
                        <label className='new-house-price'> Price </label>
                        <input
                            type="text"
                            value={price}
                            onChange={this.update('price')}
                            className='house-field'
                        />
                        <label className='new-house-beds'> Beds </label>
                        <input
                            type="text"
                            value={beds}
                            onChange={this.update('beds')}
                            className='house-field'
                        />
                        <label className='new-house-baths'> Baths </label>
                        <input
                            type="text"
                            value={baths}
                            onChange={this.update('baths')}
                            className='house-field'
                        />
                        <label className='new-house-sqft'> Sqft </label>
                        <input
                            type="number"
                            value={sqft}
                            onChange={this.update('sqft')}
                            className='house-field'
                        />
                        <label className='new-house-is_rent'> Currently available for rent </label>
                        <select
                            onChange={this.update('is_rent')}
                            className='house-field'>
                            <option value="NY">Available</option>
                            <option value="NJ">N/A</option>
                        </select>
                        <label className='new-house-yr_built'> Year built </label>
                        <input
                            type="text"
                            value={yr_built}
                            onChange={this.update('yr_built')}
                            className='house-field'
                        />

                        <label className='house-lat'>Latitude</label>
                        <input
                            type="number"
                            disabled
                            value={lat}
                            className='house-field'
                        />

                        <label className='house-lng'>Longitude</label>
                        <input
                            type="number"
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
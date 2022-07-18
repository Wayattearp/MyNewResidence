import React from 'react';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';



class HouseForm extends React.Component {
    constructor(props) {
        super(props);
        this.coords = { lat: props.lat, lng: props.lng };
        this.state = {
            address: '',
            description: '',
            state: '',
            city: '',
            zipcode: 0,
            price: 0,
            beds: 0,
            baths: 0,
            sqft: 0,
            is_rent: true,
            yr_built: 2022,
            photoFile: null,
            photoFiles: null,
            photoUrls: null
        };

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToSearch = this.navigateToSearch.bind(this);
        this.handleInputVals = this.handleInputVals.bind(this);
    }

    update(property) {
        return e => this.setState({
            [property]: e.target.value
        });
    }


    navigateToSearch() {
        this.props.history.push('/sell');
    }

    handleSubmit(e) {
        e.preventDefault();
        let isValid = this.handleInputVals();
        if (isValid) {
            const formData = new FormData();
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
            if (this.state.photoFile) {
                formData.append('house[photos][]', this.state.photoFile);
            }
            // if (this.state.photoFiles) {
            //     for (let i = 0; i < this.state.photoFiles.length; i++) {
            //         formData.append("house[photos][]", this.state.photoFiles[i]);
            //     }
            // }

            if (this.props.createHouse(formData)) {
                this.navigateToSearch();
            }
        }
    }

    handleInputVals() {
        if (this.state.address == '') {
            window.alert("Please check address box")
        }
        if (!isNaN(parseInt(this.state.city)) || this.state.city == '') {
            window.alert("Please check city box");
            return false;
        }
        if (!isNaN(parseInt(this.state.state)) || this.state.state == '') {
            window.alert("Please check state box");
            return false;
        }
        if (isNaN(parseInt(this.state.zipcode)) || this.state.zipcode.length != 5) {
            window.alert("Please enter a valid zipcode");
            return false;
        }
        return true;
    };

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrls: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    render() {
        const { lat, lng } = this.coords;
        const { description, address, state, city, zipcode, price, beds, baths, sqft, is_rent, yr_built } = this.state;

        return (
            <div className='new-house-container'>
                <div className='new-house-form'>
                    <h3 className='new-house-title'> Create Rental</h3>

                    <form onSubmit={this.handleSubmit}>
                        <label className='new-house-address'> Address </label>
                        <input
                            type="text"
                            value={address}
                            onChange={this.update('address')}
                            className='house-field'
                        />
                        <label className='new-house-city'> City </label>
                        <input
                            type="text"
                            value={city}
                            onChange={this.update('city')}
                            className='house-field'
                        />
                        <label className='new-house-state'> State </label>
                        <input
                            type="text"
                            value={state}
                            onChange={this.update('state')}
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
                            type="number"
                            value={price}
                            onChange={this.update('price')}
                            className='house-field'
                        />
                        <label className='new-house-beds'> Beds </label>
                        <input
                            type="number"
                            value={beds}
                            onChange={this.update('beds')}
                            className='house-field'
                        />
                        <label className='new-house-baths'> Baths </label>
                        <input
                            type="number"
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
                        <label className='new-house-is_rent'> Available for rent </label>
                        <select
                            value={is_rent}
                            onChange={this.update('is_rent')}
                            className='house-field'>
                            <option value="NY">Yes</option>
                            <option value="NJ">N/A</option>
                        </select>
                        <label className='new-house-yr_built'> Year built </label>
                        <input
                            type="number"
                            value={yr_built}
                            onChange={this.update('yr_built')}
                            className='house-field'
                        />
                        <label className='new-house-description'> Description </label>
                        <input
                            type="text"
                            value={description}
                            onChange={this.update('description')}
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

                        <h3 className="button-holder">Add a Picture</h3>
                        <input type="file" className="new-house-button"
                            onChange={this.handleFile.bind(this)} />

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
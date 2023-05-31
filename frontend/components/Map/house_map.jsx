import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';


const mapOptions = {
    center: { lat: 40.81120884751844, lng: -73.9656890580613 },
    zoom: 12,
};


class HouseMap extends React.Component {    
    
    componentDidMount() {
        this.history = this.props.history;
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.history);
            this.registerListeners();
            this.MarkerManager.updateMarkers(this.props.houses);
    }
    
    componentDidUpdate() {
        if (this.props.singleHouse) {
            const targetHouseKey = Object.keys(this.props.houses)[0];
            const targetHouse = this.props.houses[targetHouseKey];
            this.MarkerManager.updateMarkers([targetHouse]); //grabs only that one House
        } else {
            this.MarkerManager.updateMarkers(this.props.houses);
        }
    }
    
    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateFilter('bounds', bounds);
        });

    }
    
    // handleMarkerClick(house) {
    //     this.props.history.push(`houses/${house.id}`)
    // }
    
    handleClick(coords) {
        this.props.history.push({
            pathname: 'houses/new',
            search: `lat=${coords.lat}&lng=${coords.lng}`
        });
    }


    render() {
        return (
            <div className='mapItem'>
                <div id='map-container'
                    ref={map => this.mapNode = map}> // this ref gives us access to the map dom node
                </div>
            </div>

        );
    }
};

export default withRouter(HouseMap);
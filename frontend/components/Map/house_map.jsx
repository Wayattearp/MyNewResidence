import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});

const mapOptions = {
    center: { lat: 40.80996540451154, lng: -73.95014070092049 }, //Harlem
    zoom: 12
};

class HouseMap extends React.Component {
    componentDidMount() {
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        if (this.props.singleHouse) {
            // this.props.fetchHouse(this.props.houseId)
            // console.log(this.props.match.url)
            //center on target marker 
            // const targetHouseKey = Object.keys(this.props.houses)[0];
            // const targetHouse = this.props.houses[targetHouseKey];
            // const zoomedLat = targetHouse[this.props.houseId].lat;
            // const zoomedLng = targetHouse[this.props.houseId].lng
            this.map.setOptions({ 
                // draggable: false,
                zoom: 16,
                // center: { lat: zoomedLat, lng: zoomedLng}

             });
            
            
        } else {
            this.registerListeners();
            this.MarkerManager.updateMarkers(this.props.houses);
        }
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
        
        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = getCoordsObj(event.latLng);
            this.handleClick(coords);
        });
        
    }
    
    handleMarkerClick(house) {
        this.props.history.push(`houses/${house.id}`)
    }
    
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
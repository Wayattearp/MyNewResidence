import React from 'react';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
    center: { lat: 40.80996540451154, lng: -73.95014070092049 }, //Harlem
    zoom: 15
};

class HouseMap extends React.Component {
      componentDidMount() {      
            this.map = new google.maps.Map(this.mapNode, mapOptions);
            this.MarkerManager = new MarkerManager(this.map);

            this.MarkerManager.updateMarkers(this.props.houses);
        }

        componentDidUpdate() {
            this.MarkerManager.updateMarkers(this.props.houses);
        }


    
    render() {
        return (
            <div id='map-container'
                ref={map => this.mapNode = map}> // this ref gives us access to the map dom node

            </div>
        );
    }
};

export default HouseMap;
import React from 'react';

class HouseMap extends React.Component {

    componentDidMount() {
        const mapOptions = {
            center: { lat: 40.80996540451154, lng: -73.95014070092049 }, // this is SF
            zoom: 15
        };
        
        this.map = new google.maps.Map(this.mapNode, mapOptions);
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
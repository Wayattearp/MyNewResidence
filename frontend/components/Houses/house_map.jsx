import React from 'react';
import MarkerManager from '../../util/marker_manager';



const mapOptions = {
    center: { lat: 40.80996540451154, lng: -73.95014070092049 }, //Harlem
    zoom: 12
};

class HouseMap extends React.Component {
      componentDidMount() {      
            this.map = new google.maps.Map(this.mapNode, mapOptions);
            this.MarkerManager = new MarkerManager(this.map);

          google.maps.event.addListener(this.map, 'idle', () => {
              const { north, south, east, west } = this.map.getBounds().toJSON();
              const bounds = {
                  northEast: { lat: north, lng: east },
                  southWest: { lat: south, lng: west }
              };
              console.log(bounds)
              this.props.updateFilter('bounds', bounds);
          });


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
import React from "react";
import MarkerManager from "../../util/marker_manager";

const mapOptions = {
  center: { lat: 40.704935, lng: -74.012567 },
  zoom: 12,
  disableDefaultUI: true,
  mapTypeControl: false,
  streetViewControl: false,
  scaleControl: false,
  zoomConrol: false,
  clickableIcons: false,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ],
};

class MapClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.history = this.props.history;
    this.MarkerManager = new MarkerManager(this.map, this.history);
    this.registerListeners();
    // this.handleMarkerBounce();
    this.MarkerManager.updateMarkers(this.props.houses);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.houses);
    // this.handleMarkerBounce();
  }

  registerListeners() {
    const { dispatch, updateFilter } = this.props;
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
      };
      dispatch(updateFilter("bounds", bounds));
    });
  }


  render() {
    return <div id="map-container" ref={(map) => (this.mapNode = map)}></div>;
  }
}

export default MapClass;

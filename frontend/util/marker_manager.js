export default class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }

    updateMarkers(houses) {
        const housesObj = {};
        houses.forEach(house => housesObj[house.id] = house);

        houses
            .filter(house => !this.markers[house.id])
            .forEach(newHouse => this.createMarkerFromHouse(newHouse, this.handleClick));

        Object.keys(this.markers)
            .filter(houseId => !housesObj[houseId])
            .forEach((houseId) => this.removeMarker(this.markers[houseId]))
    }

    createMarkerFromHouse(house) {
        const position = new google.maps.LatLng(house.lat, house.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            houseId: house.id,
            icon: `${window.markerUrl}`,
        });

        marker.addListener('click', () => this.handleClick(house));
        this.markers[marker.houseId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.houseId].setMap(null);
        delete this.markers[marker.houseId]
    }
}
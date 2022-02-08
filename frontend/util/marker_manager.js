export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(houses) {
        const housesObj = {};
        houses.forEach(house => housesObj[house.id] = house);

        houses
            .filter(house => !this.markers[house.id])
            .forEach(newHouse => this.createMarkerFromHouse(newHouse))
    }

    createMarkerFromHouse(house) {
        const position = new google.maps.LatLng(house.lat, house.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            houseId: house.id
        });

        this.markers[marker.houseId] = marker;
    }

    removeMarker(marker) { 
        this.markers[marker.houseId].setMap(null);
        delete this.markers[marker.houseId]
    }
}
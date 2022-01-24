export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(houses) {
        if (houses) {
            houses.forEach(house => {
                this.createMarkerFromHouse(house);
            });
        }
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
}
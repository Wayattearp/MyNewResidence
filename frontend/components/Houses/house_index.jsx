import React from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import HouseIndexItem from './house_index_item';

const HouseIndex = ({ houses }) => {
    const location = useLocation();
    let filteredHouses;

    if (
        location.pathname.includes("rent") ||
        location.pathname.includes("houses")
    ) {
        filteredHouses = houses.filter((house) => house.is_rent == true);
    }
    if (location.pathname.includes("buy")) {
        filteredHouses = houses.filter((house) => house.is_rent == false);
    }

    const mappedHouses = filteredHouses.map((house, i) => {
        return (
            <HouseIndexItem
                key={`house-${i}`}
                house={house}
                isRent={house.is_rent}
            />
        );
    });
    return (
        <div className="property-index-container">
            {mappedHouses.length > 0 ? (
                mappedHouses
            ) : (
                <h1 className="no-listing"> "No Listing available.." </h1>
            )}
        </div>
    )
};

export default HouseIndex;

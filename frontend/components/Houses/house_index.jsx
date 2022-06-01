import React from 'react';
import HouseIndexItem from './house_index_item';

const HouseIndex = ({ houses }) => {

    let filteredHouses;

    const mappedHouses = houses.map((house, i) => {
        return (
            <HouseIndexItem
                key={`house-${i}`}
                house={house}
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

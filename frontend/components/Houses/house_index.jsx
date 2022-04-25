import React from 'react';
import HouseIndexItem from './house_index_item';

const HouseIndex = ({ houses }) => (
    <div className="property-index-container">
        {houses.map(house => (
            <HouseIndexItem
                house={house}
                key={house.id}
            />
        ))}
    </div>
);

export default HouseIndex;

import React from 'react';
import HouseIndexItem from './house_index_item';

const HouseIndex = ({ houses }) => (
    <div>
        <h1>Houses: </h1>
        {houses.map(house => (
            <HouseIndexItem
                house={house}
                key={house.id}
            />
        ))}
    </div>
);

export default HouseIndex;

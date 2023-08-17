import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import HouseIndexItem from './house_index_item';
import { removeAllFilters } from '../../actions/filter_actions'

const HouseIndex = ({ houses }) => {
    const location = useLocation();
    let filteredHouses;
    const dispatch = useDispatch();
    useEffect(() => dispatch(removeAllFilters()), []);
    // The empty array ensures it is called only once, on the first render.

    if (
        location.pathname.includes("rent")
    ) {
        filteredHouses = houses.filter((house) => house.is_rent == true);
    }
    if (location.pathname.includes("buy") ||
        location.pathname.includes("search")) {
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

import React from 'react';
import HouseMap from '../Map/house_map'
import HouseIndex from '../Houses/house_index_container'
import SearchNav from './search_nav';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';


const Search = ({ houses, updateFilter }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();

    let filteredHouses;
    if (
        location.pathname.includes("rent")
    ) {
        filteredHouses = Object.values(houses).filter(
            (house) => house.is_rent == true
        );
    }
    if (location.pathname.includes("buy") ||
        location.pathname.includes("search")) {

        filteredHouses = Object.values(houses).filter(
            (house) => house.is_rent == false
        );
    }
    return (
        <div>
            <SearchNav
            />
            <div className='listing-page'>
                <div className="listing-page-left">
                    <HouseMap
                        updateFilter={updateFilter}
                        houses={houses}
                        singleHouse={false}
                        dispatch={dispatch}
                        history={history}
                    />
                </div>
                <div className="listing-page-right">
                    <h1>Listings</h1>
                    <HouseIndex houses={filteredHouses} />

                </div>
            </div>
        </div>
    )

};
export default Search;
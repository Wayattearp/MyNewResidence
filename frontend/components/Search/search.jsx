import React from 'react';
import HouseMap from '../Houses/house_map'
import HouseIndex from '../Houses/house_index_container'
import SearchNav from './search_nav';


const Search = ({ houses, updateFilter }) => (
    <div>
        <SearchNav
        />
        <div className='listing-page'>
            <div className="listing-page-left">
                <HouseMap
                    updateFilter={updateFilter}
                    houses={houses}
                    singleHouse={false}
                />
            </div>
            <div className="listing-page-right">
                <h1>Listings</h1>
                <HouseIndex houses={houses} />

            </div>
        </div>
    </div>
);
export default Search;
import React from 'react';
import HouseMap from '../Houses/house_map'
import HouseIndex from '../Houses/house_index_container'
import FilterForm from './filter_form';


const Search = ({ houses, updateFilter, minPrice, maxPrice }) => (
    <div>
        <FilterForm
            minPrice={minPrice}
            maxPrice={maxPrice}
            updateFilter={updateFilter}
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
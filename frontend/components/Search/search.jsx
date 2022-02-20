import React from 'react';
import HouseMap from '../Houses/house_map'
import HouseIndex from '../Houses/house_index_container'
import FilterForm from './filter_form';

const Search = ({houses, updateFilter, minPrice, maxPrice}) => ( 
    <div>
        <FilterForm
            minPrice={minPrice}
            maxPrice={maxPrice}
            updateFilter={updateFilter}
        />
        <HouseMap
         updateFilter={updateFilter}
         houses={houses}
        />
        <HouseIndex houses={houses} />
    </div>
);
export default Search;
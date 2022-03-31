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
        <br />
        Click on the map to list a new house
        <br />
        <HouseMap
         updateFilter={updateFilter}
         houses={houses}
         singleHouse={false}
        />
        <HouseIndex houses={houses} />
    </div>
);
export default Search;
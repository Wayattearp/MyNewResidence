import React from 'react';
import HouseMap from '../Houses/house_map'
import HouseIndex from '../Houses/house_index_container'

const Search = ({houses, updateFilter}) => ( 
    <div>
        <HouseMap
         updateFilter={updateFilter}
         houses={houses}
        />
        <HouseIndex
         houses={houses}
         updateFilter={updateFilter}
        />
    </div>
);
export default Search;
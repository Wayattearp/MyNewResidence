import React from 'react';
import HouseMap from '../Houses/house_map'
import HouseIndex from '../Houses/house_index_container'

const Search = ({houses}) => ( 
    <div>
        <HouseMap
         houses={houses}
        />
        <HouseIndex
         houses={houses}
        />
    </div>
);
export default Search;
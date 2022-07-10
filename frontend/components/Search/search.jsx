import React from 'react';
import HouseMap from '../Map/house_map'
import HouseIndex from '../Houses/house_index_container'
import SearchNav from './search_nav';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Search = ({ houses, updateFilter }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    return(
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
                <HouseIndex houses={houses} />

            </div>
        </div>
    </div>
    )
   
};
export default Search;
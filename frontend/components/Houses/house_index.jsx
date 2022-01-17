import React from 'react';
import HouseIndexItem from './house_index_item';

 class HouseIndex extends React.Component {
     constructor(props){
         super(props)
         
     }
    componentDidMount() {
            this.props.fetchAllHouses()
        }

        render() {
            
            let houses = this.props.houses;

           let hlist = houses.map(house => (
                <li key={house.id}>
                    {house.address}
                </li>
            ))

        return(
                <div>
               {hlist}
                </div>
            );
     }
    };

export default HouseIndex;
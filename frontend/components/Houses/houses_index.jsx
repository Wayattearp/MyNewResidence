import React from 'react';
import HouseIndexItem from './houses_index_item';

 class HouseIndex extends React.Component {
     constructor(props){
         super(props)
     }
    componentDidMount() {
        // const houses = this.props.fetchAllHouses();
    //         // <div>
    //         //     <h1>Houses: </h1>
    //         //     {houses.map(house => (
    //         //         <HouseIndexItem
    //         //             house={house}
    //         //             key={house.id}
    //         //         />
    //         //     ))}
    //         // </div>
    
    
    this.props.fetchAllHouses().then((houses) => { 
        console.log(houses[1].address)});
            
}


render() {
        return(
                <div>
                 
                </div>
            );
     }
    };

export default HouseIndex;
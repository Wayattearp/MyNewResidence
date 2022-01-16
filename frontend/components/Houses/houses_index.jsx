import React from 'react';
import HouseIndexItem from './houses_index_item';
// import { fetchAllHouses } from '../../util/house_utils'

 class HouseIndex extends React.Component {
     constructor(props){
         super(props)
         this.state = {
             houses: {}
         }
     }
    componentDidMount() {

          // request houses from your API here



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

        // const BenchIndex = ({ benches }) => (
        //     <div>
        //         <h1>Benches: </h1>
        //         {benches.map(bench => (
        //             <BenchIndexItem
        //                 bench={bench}
        //                 key={bench.id}
        //             />
        //         ))}
        //     </div>
        // );


    
    
    this.props.fetchAllHouses().then((houses) => { 
        this.setState({houses: house})
        // console.log(houses)
    });
            
}

render() {

        // console.log(houses)

        return(
                <div>
                   {/* <HouseIndexItem houses = {houses}/> */}
                </div>
            );
     }
    };

export default HouseIndex;
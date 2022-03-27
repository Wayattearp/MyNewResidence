import React from "react";
import HouseMap from './house_map'


class HouseShow extends React.Component {
    constructor(props){
        super(props)
    }

    

    render() {
        const house = this.props.house;
        const houseId = this.props.houseId;
        const houses = [{ [houseId]: house}]
        return(
            <div>
                <h1>House Show</h1>
                <img src={house.photoUrl} />
                <HouseMap
                houses={houses}
                singleHouse={true}
                fetchHouse={this.props.fetchHouse}
                houseId={houseId}
                />
            </div>
        )
    }
}

// const HouseShow = ({ house }) => {
//         // let house = this.props.fetchHouse(this.props.match.params.id)
//         return(
//             <div>
//                 {/* <HouseMap
//                     house={house}
//                 /> */}
//             </div>
//         )
// }

export default HouseShow
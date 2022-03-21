import HouseShow from "./house_show.jsx";
import { connect } from 'react-redux';
import { fetchHouse } from "../../actions/houses_actions";

const mapStateToProps = (state, { match }) => {
    const houseId = parseInt(match.params.id);
    const house = state.entities.houses[houseId];
   return {
       houseId,
       house
   }
};

const mapDispatchToProps = dispatch => ({
    fetchHouse: id => dispatch(fetchHouse(id))
});



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HouseShow);
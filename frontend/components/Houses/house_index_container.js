import HouseIndex from "./house_index.jsx";
import { connect } from 'react-redux';
import { fetchAllHouses } from "../../actions/houses_actions";

const mapStateToProps = (state) => ({
    houses: Object.values(state.entities.houses),
});

const mapDispatchToProps = dispatch => ({
    fetchAllHouses: () => dispatch(fetchAllHouses()),
});



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HouseIndex);
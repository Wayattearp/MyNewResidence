import HousesIndex from "./houses_index.jsx";
import { connect } from 'react-redux';
import { fetchAllHouses } from "../../util/house_utils.js";

const mapStateToProps = (state) => ({
    houses: state.entities.houses,
});

const mapDispatchToProps = dispatch => ({
    fetchAllHouses: () => dispatch(fetchAllHouses),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HousesIndex);
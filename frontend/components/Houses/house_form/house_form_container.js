import { connect } from "react-redux";
import { createHouse } from "../../../actions/houses_actions";

import HouseForm from './house_form';

const mapStateToProps = (state, { location }) => ({
    lat: new URLSearchParams(location.search).get('lat'),
    lng: new URLSearchParams(location.search).get('lng')
});

const mapDispatchToProps = dispatch => ({
    createHouse: house => dispatch(createHouse(house))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HouseForm);

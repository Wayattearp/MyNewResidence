import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import { fetchAllHouses } from "../../actions/houses_actions";

import Search from './search';

const mapStateToProps = state => ({
    houses: asArray(state.entities),
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

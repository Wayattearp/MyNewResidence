import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';

import Search from './search';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
    houses: asArray(state.entities)
});

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

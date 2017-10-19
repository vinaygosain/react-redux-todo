import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/link';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (filter) => {
            dispatch(setVisibilityFilter(filter));
        },
    };
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;
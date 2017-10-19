import { combineReducers } from 'redux';
import todos from '../reducers/todos.jsx';
import visibilityFilter from '../reducers/visibilityFilter.jsx';

const combinedApp = combineReducers({
    todos,
    visibilityFilter,
});

export default combinedApp;

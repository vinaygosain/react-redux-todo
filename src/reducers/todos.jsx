import todo from './todo';
import _ from 'lodash';

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action),
            ];

        case 'TOGGLE_TODO':
            return _.map(state, (t) => todo(t, action));

        case 'TOGGLE_TODO_CHECK':
            return _.map(state, (t) => todo(t, action));

        case 'DELETE_TODO':
            return _.filter(state, (t) => todo(t, action));

        case 'TOGGLE_TODOS':
            return _.map(state, (t) => todo(t, action));

        case 'DELETE_TODOS':
            return _.filter(state, (t) => todo(t, action));

        default:
            return state;
    }
};

export default todos;

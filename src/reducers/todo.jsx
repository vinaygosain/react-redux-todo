const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                value: action.value,
                completed: false,
                checked: false,
            };

        case 'TOGGLE_TODO':

            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed,
            };

        case 'TOGGLE_TODO_CHECK':

            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                checked: !state.checked,
            };

        case 'DELETE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            break;

        case 'TOGGLE_TODOS':
            if (!(state.checked)) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed,
            };

        case 'DELETE_TODOS':
            if (!(state.checked)) {
                return state;
            }
            break;

        default:
            return state;
    }
};

export default todo;

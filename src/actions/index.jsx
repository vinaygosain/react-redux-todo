let nextTodoId = 0;

const addTodo = (value) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        value,
    };
};

const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter,
    };
};

const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id,
    };
};

const toggleTodos = (ids) => {
    return {
        type: 'TOGGLE_TODOS',
        ids,
    };
};

const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id,
    };
};

const deleteTodos = (ids) => {
    return {
        type: 'DELETE_TODOS',
        ids,
    };
};

const toggleTodoCheck = (id) => {
    return {
        type: 'TOGGLE_TODO_CHECK',
        id,
    };
};

export {
    addTodo,
    deleteTodo,
    toggleTodos,
    deleteTodos,
    setVisibilityFilter,
    toggleTodo,
    toggleTodoCheck,
};

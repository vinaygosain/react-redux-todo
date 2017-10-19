import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, toggleTodos, deleteTodos, toggleTodoCheck } from '../actions/';
import TodoList from '../components/todoList';
import _ from 'lodash';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;

        case 'SHOW_COMPLETED':
            return _.filter(todos, 'completed');

        case 'SHOW_ACTIVE':
            return _.reject(todos, 'completed');
    }
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        },
        onTodoDelete: (id) => {
            dispatch(deleteTodo(id));
        },
        onTodosComplete: (ids) => {
            dispatch(toggleTodos(ids));
        },
        onTodosDelete: (ids) => {
            dispatch(deleteTodos(ids));
        },
        onTodoChecked: (id) => {
            dispatch(toggleTodoCheck(id));
        },

    };
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;

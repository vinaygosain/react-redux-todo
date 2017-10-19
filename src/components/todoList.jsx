import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';
import _ from 'lodash';

const TodoList = ({ todos, onTodosDelete, onTodosComplete, onTodoChecked }) => {
    const ids = {};

    // const handleClick = (id) => {
    //     onTodoClick(id);
    // };

    const handleCheck = (id) => {
        onTodoChecked(id);
    };

    const handleBulkDelete = () => {
        onTodosDelete(ids);
    };

    const handleBulkComplete = () => {
        onTodosComplete(ids);
    };

    return (
        <div>
            <ul>
                {_.map(todos, (todo) =>
                    <Todo key={todo.id} {...todo} onCheck={handleCheck}/>
                )}
            </ul>
            <button onClick={handleBulkComplete}>Complete</button>
            <button onClick={handleBulkDelete}>Delete</button>
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            value: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired,
    onTodosDelete: PropTypes.func.isRequired,
    onTodosComplete: PropTypes.func.isRequired,
    onTodoChecked: PropTypes.func.isRequired,
};

export default TodoList;

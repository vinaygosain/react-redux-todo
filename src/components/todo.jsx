import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onCheck, completed, value, id }) => {
    // let inpt;
    const handleCheck = () => {
        onCheck(id);
    };

    // const refHandler = () => {
    //     // inpt = e;
    //     _.noop();
    //   {/* ref={refHandler}  */}
    // };

    return (
        <div>
            <input type="checkbox" onChange={handleCheck}></input>
            <li
                style={{
                    textDecoration: completed ? 'line-through' : 'none',
                }}
            >
                {value}
            </li>
        </div>
    );
};

Todo.propTypes = {
    onCheck: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default Todo;

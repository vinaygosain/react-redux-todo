import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = connect()(({ dispatch }) => {
    let txtInput = null;

    const handleRef = (node) => {
        txtInput = node;
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();

        dispatch(addTodo(txtInput.value));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={handleRef}/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
});

export default AddTodo;

import React from 'react';
import AddTodo from './container/addTodo';
import VisibleTodoList from './container/visibleTodoList';
import Footer from './components/footer';
import './styles/styles.css';

const App = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default App;

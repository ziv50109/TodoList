import React, { useContext } from 'react';
import Context from "../context";
import FilterBtn from './FilterBtn';

const Footer = (props) => {
    const { todos, filter, handleClearCompleted } = useContext(Context);
    const hasCompleted = todos.filter(ele => ele.completed).length;
    let filterTodos;
    switch (filter) {
        case 'all':
        default:
            filterTodos = todos;
            break;
        case 'active':
            filterTodos = todos.filter(ele => !ele.completed);
            break;
        case 'completed':
            filterTodos = todos.filter(ele => ele.completed);
            break;
    }

    return (
        <footer className={`todolist_footer ${todos.length ? 'show' : ''}`}>
            <span>{filterTodos.length} items left</span>
            <FilterBtn filterAction="all">All</FilterBtn>
            <FilterBtn filterAction="active">Active</FilterBtn>
            <FilterBtn filterAction="completed">Completed</FilterBtn>
            {
                hasCompleted ?
                    <button type="text" onClick={() => handleClearCompleted()}>Clear completed</button>
                : null
            }
        </footer>
    );
}
export default Footer;

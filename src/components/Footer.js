import React, { useContext } from 'react';
import Context from "../context";
import FilterBtn from './FilterBtn';

const Footer = (props) => {
    const { todos } = useContext(Context);

    return (
        <footer className="todolist_footer">
            <span>{todos.length} items left</span>
            <FilterBtn>All</FilterBtn>
            <FilterBtn>Active</FilterBtn>
            <FilterBtn>Completed</FilterBtn>
        </footer>
    );
}
export default Footer;

import React, { useContext, useRef } from 'react';
import Context from "../context";

const Header = (props) => {
    const { handleAppendTodo } = useContext(Context);
    const inputRef = useRef();

    const hadnleKeyDown = (e) => {
        const text = e.target.value;
        if (e.keyCode === 13) {
            handleAppendTodo(text);
            inputRef.current.value = '';
        }
    }
    return (
        <header className="todolist_header">
            <input
                type="text"
                ref={inputRef}
                onKeyDown={hadnleKeyDown}
                placeholder="What needs to be done?"
            />
        </header>
    );
};

export default Header;

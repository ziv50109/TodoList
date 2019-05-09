import React, { useContext } from "react";
import Context from "../context";

const TodoLists = () => {
    const { todos, handleToggleCompleted, handleDeleteTodo } = useContext(Context);

    return (
        <ul className="todolist_body">
            {todos.map(item => (
                <li
                    key={item.id}
                >
                    <div
                        className={`todolist-radio ${item.completed ? 'over' : ''}`}
                        onClick={() => handleToggleCompleted(item.id)}
                    >
                    </div>
                    <span>{item.text}</span>
                    <div
                        className="todolist-del"
                        onClick={() => handleDeleteTodo(item.id)}
                    >x</div>
                </li>
            ))}
        </ul>
    );
};

export default TodoLists;

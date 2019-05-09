import React, { useContext } from "react";
import Context from "../context";

const TodoLists = () => {
    const { todos, filter, handleToggleCompleted, handleDeleteTodo } = useContext(Context);
    let filterTodos;
    switch (filter) {
        case 'all':
        default:
            filterTodos = todos;
            break;
        case 'active':
            filterTodos = todos.filter(ele => ele.completed);
            break;
        case 'completed':
            filterTodos = todos.filter(ele => !ele.completed);
            break;
    }

    return (
        <ul className="todolist_body">
            {filterTodos.map(item => (
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

import React, { Component } from 'react';
import Context from "./context";
import uuidv4 from "uuid/v4";

import Header from './components/Header';
import TodoLists from './components/TodoLists';
import Footer from './components/Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all',
            todos: [
                {
                    id: "8cc64fe1-0706-49b3-b5c2-988e3d926323",
                    text: "吃早餐",
                    completed: false
                },
                {
                    id: "405d9e27-4a57-48a1-b5ed-182db1804add",
                    text: "買飲料",
                    completed: true
                },
                {
                    id: "f3dfa213-a535-4cc9-808f-422ec5736d74",
                    text: "認真上班",
                    completed: true
                }
            ]
        }
    }

    handleAppendTodo = (text) => {
        const {todos} = this.state;
        const todoItem = {
            id: uuidv4(),
            text: text,
            completed: false
        }
        const newTodos = [
            ...todos,
            todoItem
        ]
        this.setState({ todos: newTodos });
    }
    handleToggleCompleted = (id) => {
        const { todos } = this.state;
        const newTodos = todos.map(ele => {
            const completed = ele.completed;
            if (ele.id === id) {
                ele.completed = !completed;
            }
            return ele;
        });
        this.setState({ todos: newTodos });
    }
    handleDeleteTodo = (id) => {
        const { todos } = this.state;
        const newTodos = todos.filter(ele => ele.id !== id);
        this.setState({ todos: newTodos });
    }
    handleChangeFilter = (filter) => {
        this.setState({ filter });
    }
    handleClearCompleted = () => {
        const { todos } = this.state;
        const newTodos = todos.filter(ele => !ele.completed);
        this.setState({ todos: newTodos });
    }


    render() {
        const { todos, filter } = this.state;
        const handleAppendTodo = this.handleAppendTodo;
        const handleToggleCompleted = this.handleToggleCompleted;
        const handleDeleteTodo = this.handleDeleteTodo;
        const handleChangeFilter = this.handleChangeFilter;
        const handleClearCompleted = this.handleClearCompleted;

        return (
            <Context.Provider value={{
                todos,
                filter,
                handleAppendTodo,
                handleToggleCompleted,
                handleDeleteTodo,
                handleChangeFilter,
                handleClearCompleted
            }}>
                <div className="App">
                    <Header />
                    <TodoLists />
                    <Footer />
                </div>
            </Context.Provider>
        );
    }
}

export default App;
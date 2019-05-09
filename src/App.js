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
        const newTodos = todos.map(item => {
            const completed = item.completed;
            if (item.id === id) {
                item.completed = !completed;
            }
            return item;
        });
        this.setState({ todos: newTodos });
    }
    handleDeleteTodo = (id) => {
        const { todos } = this.state;
        const newTodos = todos.filter(ele => ele.id !== id);
        this.setState({ todos: newTodos });
    }


    render() {
        const { todos } = this.state;
        const handleAppendTodo = this.handleAppendTodo;
        const handleToggleCompleted = this.handleToggleCompleted;
        const handleDeleteTodo = this.handleDeleteTodo;

        return (
            <Context.Provider value={{ todos, handleAppendTodo, handleToggleCompleted, handleDeleteTodo}}>
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
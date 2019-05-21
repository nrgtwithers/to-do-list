import React, { Component } from 'react';
import Todos from "./components/Todos"
import AddTodo from "./components/AddTodo"
import Header from './components/layout/Header'
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Walk the dog",
        completed: false
      },
      {
        id: 2,
        title: "Go to the gym",
        completed: false
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false
      },
      {
        id: 4,
        title: "Read a new novel",
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;

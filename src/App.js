import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';

import { todos } from './Data/todos.json';

class App extends Component {

  title;
  number;

  constructor(){
    super();
    this.state = {
      title: "Tasks",
      todos
    }

    this.title = this.state.title; 
    this.number = this.state.todos.length;
  }

  render() {

    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div className="App">    
          <Navigation title = {this.title} number= {this.number} />
          <img src={logo} className="App-logo" alt="logo" />
          <div className="container">
            <div className="row mt-4">
              { todos }
            </div>
          </div>
      </div>
      
    );
  }
}

export default App;

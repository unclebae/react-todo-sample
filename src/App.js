import React, {Component} from "react";
import "./App.css";
import InsertTodo from "./components/InsertTodo";
import ListTodo from "./components/ListTodo";
import { reverse } from "dns";

class App extends Component {

  state = {
    todos: [
      {id:1, title: 'Greeting', action: 'READY'},
      {id:2, title: 'Homework', action: 'DOING'},
      {id:3, title: 'Diary', action: 'READY'},
      {id:4, title: 'Workout', action: 'DONE'},
    ]
  }

  addTodoItem = (title) => {
    var maxId = this.state.todos.reduce((prev, curr) => {
      return prev.id > curr.id ? prev.id : curr.id;
    })

    var newTodo = {
      id: maxId + 1,
			title: title,
			action: 'READY'
    }
    
    const newTodos = [...this.state.todos, newTodo];
    this.setState({todos: newTodos})
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col">
            <h1>Welcome Todo Lists.</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <InsertTodo placeholder="Enter your action item." addTodoItem={this.addTodoItem}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ListTodo todos={this.state.todos}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

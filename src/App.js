import React, { Component } from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css';

class App extends Component {
constructor(){
  super();
  this.state ={
    text:'',
    todos:[]
  }
}
  changeText  = (e) => {
    this.setState({text: e.target.value});
  }

  onChange = () => {
    console.log('changing text')
  }

  onSubmit () {

    const todos = this.state.todos;
    const newTodo = {text: this.state.text};
    todos.push(newTodo);
    this.setState({todos: todos});

  }

  doStuff = value => {
    console.log('derp ', value);
  }

  render() {
    return (
      <div className="App">
        <TodoForm
          onChange = {this.onChange}
          onSubmit = {this.onSubmit}
          doStuff = {(value) => this.doStuff(value)}
         />
        <TodoList todos= {this.state.todos} />
      </div>
    );
  }
}



export default App;

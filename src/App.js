import React, { Component } from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css';

class App extends Component {
  state ={
    text:'',
    todos:[
      {
        id:1,
        text: 'Meeting At Work'
      },
      {
        id:2,
        text: 'Bring Kids To School'
      },
      {
        id:3,
        text: 'Food Shopping'
      }
    ]
  }
  changeText  = (e) => {
    this.setState({text: e.target.value});
  }

  onChange = () => {
    console.log('changing text')
  }

  onSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target.text.value);
  }

  render() {
    return (
      <div className="App">
        <TodoForm
          onChange = {this.onChange}
          onSubmit = {this.onSubmit}
         />
        <TodoList todos= {this.state.todos} />
      </div>
    );
  }
}



export default App;

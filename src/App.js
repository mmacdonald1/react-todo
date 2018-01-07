import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state ={
    text:'Hello World'
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.text}</h1>
        <form>
            <input type ="text" onChange={this.changeText} value={this.state.text} />
            <button onClick={this.changeText} className="btn btn-primary"> Click </button>
        </form>
        <br />
        <ComponentTwo text= {this.state.text} />
      </div>
    );
  }
  changeText  = (e) => {
    this.setState({text: e.target.value});
  }
}

const ComponentTwo = props =>
      <div>
      {props.text}
      </div>;



export default App;

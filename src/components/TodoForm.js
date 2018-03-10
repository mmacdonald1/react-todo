import React, { Component } from 'react';
        //onClick={props.onSubmit}
class TodoForm extends Component {
  handleDoStuff(e) {
    e.preventDefault();
    const userText = this.input.value
    console.log('The value in the form: ', userText)
    this.props.doStuff(userText)
    this.input.value = ''
  }
  render() {

  return (
    <div>
      <form onSubmit={e => this.handleDoStuff(e)}>
        <div className= "form-group">
          <label> Todo text </label>
          <input type="text" ref={input => this.input = input }
          onChange={this.props.onChange} className="form-control" />
        </div>
        <button
            type="submit"
            className="btn btn-success"
          >
            Submit
          </button>
      </form>
    </div>
  )

}
}

export default TodoForm;

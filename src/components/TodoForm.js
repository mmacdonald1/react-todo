import React from "react";

const TodoForm = props =>
<div>
  <form>
    <div className= "from-group">
      <label> Todo text </label>
      <input type="text" onChange={props.onChange} className="form-control" />
    </div>
    <button
        type="submit"
        onClick={props.onSubmit}
        className="btn btn-success"
      >
        Submit
      </button>
  </form>
</div>

export default TodoForm;

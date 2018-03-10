import React from "react";

const TodoList = props =>
      <div>
        <ul className="list-group">
          {
            props.todos.map((todo, index) =>{
              return (<li key={index}> {todo.text}</li>)
            })
          }
        </ul>
      </div>;


  export default TodoList;

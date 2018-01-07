import React from "react";

const TodoList = props =>
      <div>
        <ul className="list-group">
          {
            props.todos.map(todo =>{
              return <li className="list-group-item" todo={todo} key={todo.id}>{todo.text}</li>
            })
          }
        </ul>
      </div>;


  export default TodoList;

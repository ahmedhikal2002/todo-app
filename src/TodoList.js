import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todo, deleteTodo, updateTodo }) {
  return (
    <div className="todo-list">
      {todo.map((todoitem, index) => (
        <TodoItem
          key={todoitem.id}
          value={todoitem.text}
          id={todoitem.id}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;

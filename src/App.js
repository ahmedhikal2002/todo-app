import React, { useEffect, useState } from "react";
import TodoFrom from "./TodoFrom";
import TodoList from "./TodoList";
import "./App.css";
import shortid from "shortid";
function App() {
  const StoredTodo = JSON.parse(localStorage.getItem("mytodo"));
  let [todo, setTodo] = useState(StoredTodo ?? []);
  const AddToDo = (newTodoText) => {
    const todoobject = {
      id: shortid.generate(),
      text: newTodoText,
    };
    setTodo([...todo, todoobject]);
  };
  const deleteTodo = (mytodo) => {
    const updateTodo = todo.filter((item) => {
      return item.id !== mytodo;
    });
    setTodo(updateTodo);
  };
  const updateTodo = (newtodo) => {
    const todosUpdate = todo.map((todo) =>
      todo.id === newtodo.id ? (todo = newtodo) : todo
    );

    setTodo(todosUpdate);
  };
  useEffect(() => {
    localStorage.setItem("mytodo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="app my-todo">
      <TodoFrom AddToDo={AddToDo} />
      <TodoList todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;

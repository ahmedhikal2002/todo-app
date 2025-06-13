import React, { useState } from "react";

function TodoFrom({ AddToDo }) {
  const [inputvalue, setInputValue] = useState("");
  const handelinput = () => {
    if (inputvalue !== "") {
      AddToDo(inputvalue);
      setInputValue("");
    }
  };
  return (
    <div className="todo-from">
      <input
        placeholder="Insret A Todo ..."
        type="text"
        value={inputvalue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn add" onClick={handelinput}>
        Add
      </button>
    </div>
  );
}

export default TodoFrom;

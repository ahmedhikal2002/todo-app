import React, { useRef, useState } from "react";

function TodoItem({ value, deleteTodo, id, updateTodo }) {
  const [isupdate, setIsUpdate] = useState(false);
  const [ischecked, setIschecked] = useState(false);
  const updateRef = useRef();

  const ToggleUpdate = () => {
    setIsUpdate(!isupdate);
  };
  const handelUPdate = () => {
    const newtodo = { id: id, text: updateRef.current.value };
    if (updateRef.current.value !== "") {
      updateTodo(newtodo);
      setIsUpdate(!isupdate);
    }
  };
  const handelinput = () => {
    setIschecked(!ischecked);
  };

  return (
    <>
      {isupdate ? (
        <div className="update">
          <input
            type="text"
            placeholder="Update Todo..."
            ref={updateRef}
            defaultValue={value}
          />
          <button className="btn  update-button " onClick={handelUPdate}>
            Save
          </button>
        </div>
      ) : (
        <div className="todo-item">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input type="checkbox" id="m" onClick={handelinput} />
            <div>{value}</div>
          </div>
          <div className="todo-content">
            <button className="btn" onClick={ToggleUpdate} disabled={ischecked}>
              update
            </button>
            <div className="close" onClick={() => deleteTodo(id)}>
              &times;
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoItem;

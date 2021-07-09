import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(null);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const updateWarning = inputValue.includes(".js")
      ? "You need JavaScript Skill to Complete the task.Do you have it?"
      : null;

    setTodo(inputValue);
    setWarning(updateWarning);
  };

  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea name="todo" value={todo} onChange={handleInput}></textarea>
      </p>
      

      <p>{warning || "Good Choice!"}</p>
      <hr />
      <hr />
    </div>
  );
}

export default Todo;

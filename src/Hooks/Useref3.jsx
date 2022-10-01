import { useState } from "react";
import Todo from "../components/Todo";

const Useref3 = () => {
  const handleClick = () => {
    setShowTodo(!showTodo);
  };
  const [showTodo, setShowTodo] = useState(true);
  return (
    <div>
      <h1>Example 3</h1>
      {showTodo && <Todo />}
      <button onClick={handleClick}>Toggle Todo</button>
    </div>
  );
};

export default Useref3;

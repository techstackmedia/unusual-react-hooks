import { memo } from "react";

const Button = ({ addTask }) => {
  console.log("Button rendered");
  return (
    <div>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

// export default Button;
export default memo(Button);

import { useCallback, useState } from "react";
import Button from "../components/Button";

const UseCallback = () => {
  const [tasks, setTasks] = useState([]);
  //   const addTask = () => {
  //     return setTasks((prev) => {
  //       return [...prev, "Some Task"];
  //     });
  //   };
  const addTask = useCallback(() => {
    return setTasks((prev) => {
      return [...prev, "Some Task"];
    });
  }, [setTasks]);
  return (
    <div>
      <h1>Example 5</h1>
      <Button addTask={addTask} />
      {tasks.map((task, index) => {
        return <p key={index}>{task}</p>;
      })}
    </div>
  );
};

export default UseCallback;

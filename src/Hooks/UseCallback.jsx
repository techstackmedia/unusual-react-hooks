import { useCallback, useState } from "react";
import Button from "../components/Button";

const UseCallback = () => {
  const [tasks, setTasks] = useState([]);
  //   const addTask = () => {
  //     setTasks((prev) => {
  //       return [...prev, "Some Task"];
  //     });
  //   };
  const addTask = useCallback(() => {
    setTasks((prev) => {
      return [...prev, "Some Task"];
    });
  }, [setTasks]);
  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => {
        return <p key={index}>{task}</p>;
      })}
    </div>
  );
};

export default UseCallback;

import { useEffect, useState } from "react";

const Todo = () => {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setTodo(data);
          setLoading(false);
        }, 3000);
      });
  }, []);
  console.log(todo);
  return loading ? <h3>Loading...</h3> : <h3>{todo.title}</h3>;
};

export default Todo;

/* 
import { useEffect, useRef, useState } from "react";

const Todo = () => {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});
  const isMounted = useRef(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data);
            setLoading(false);
          }
        }, 3000);
      });
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);
  return loading ? <h3>Loading...</h3> : <h3>{todo.title}</h3>;
};

export default Todo;

*/

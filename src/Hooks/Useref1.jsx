import { useRef } from "react";
import Useref2 from "./Useref2";
import Useref3 from "./Useref3";

const UseRef1 = () => {
  const inputRef = useRef();
  const paraRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    paraRef.current.innerHTML = "Done";
    inputRef.current.value = "Hello";
    inputRef.current.style.backgroundColor = "red";
    console.log(inputRef.current.value);
  };

  return (
    <>
      <h1>Example 1</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
      <p ref={paraRef} onClick={() => inputRef.current.focus()}></p>
      <Useref2 />
      <Useref3 />
    </>
  );
};

export default UseRef1;

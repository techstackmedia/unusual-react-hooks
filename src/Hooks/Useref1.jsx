import { useRef } from "react";

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
    </>
  );
};

export default UseRef1;

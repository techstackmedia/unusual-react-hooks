import { useEffect, useRef, useState } from "react";

const Useref2 = () => {
  const [name, setName] = useState("");
  const renders = useRef(1);
  const prevName = useRef("");
  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div>
        <h1>Example 2</h1>
        <h2>Render: {renders.current}</h2>
        <h3>Prev Name State: {prevName.current}</h3>
        <label htmlFor="name">Name: </label>
        <input type="text" value={name} onChange={handleChange} />
      </div>
    </>
  );
};

export default Useref2;

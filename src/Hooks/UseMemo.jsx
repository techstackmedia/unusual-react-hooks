import { useEffect, useMemo, useRef, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const renders = useRef(1);
  const handleClick = () => {
    setInc((prev) => {
      console.log(prev + 1);
      return prev + 1;
    });
  };
  const handleChange = (e) => {
    setNumber(e.target.value);
  };
  //   const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  useEffect(() => {
    renders.current = renders.current + 1;
  });
  return (
    <div>
        <h1>Example 4</h1>
      Increase: {inc}{" "}
      <input type="number" value={number} onChange={handleChange} />
      <h2>
        The sqrt of {number} is {sqrt}
      </h2>
      <button onClick={handleClick}>Re Render</button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
};

function getSqrt(n) {
  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }
  console.log("Expensive Function Called");
  return Math.sqrt(n);
}

export default UseMemo;

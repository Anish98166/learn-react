import { useState } from "react";

const UseState1 = () => {
  //Component will render if state variable is changed.
  let [count, setCount] = useState(0);

  console.log("i am state");

  return (
    <div>
      <div>count is {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default UseState1;

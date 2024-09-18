import { useEffect, useState } from "react";

const LearnUseEffect1 = () => {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(10);

  useEffect(() => {
    //cleanup function is the function which is return by useEffect.
    //cleanup function does not execute on first render (component mount), but from the second render if useEffect execute, cleanup function runs at first then the other code will run

    //mount => show
    //unmount => hide

    console.log("i am useEffect");
    return () => {
      console.log("i am cleanup function");
    };
  }, [count, count1]);

  return (
    <div>
      <div>Count is {count} </div>
      <div>Count1 is {count1}</div>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount1(count1 + 10);
          }}
        >
          Add by 10
        </button>
      </div>
    </div>
  );
};

export default LearnUseEffect1;

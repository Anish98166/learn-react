import { useEffect, useState } from "react";

const LearnUseEffect2 = () => {
  let [count, setCount] = useState(0);
  //useEffect runs in every render
  useEffect(() => {
    console.log("i am useEffect");
  });

  // we can have multiple useEffect, If you miss an array (dependency) [], useEffect will runs in every render
  //useEffect runs in first render only
  useEffect(() => {
    console.log("i am useEffect");
  }, []);

  // It will run in first render from the second render it will only run when the count state value is changed
  useEffect(() => {}, [count]);

  // dependency array [] ma bahira ko varible or function matra rakhne useEffect vitra ko ta aafai run vaihalxa, example:- a rakhna pardaina
  useEffect(() => {
    let a = 10;
    console.log(a);
  }, [count]);

  return <div>LearnUseEffect2</div>;
};

export default LearnUseEffect2;

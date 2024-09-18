import { useEffect } from "react";

const LearnUseEffect = () => {
  //useEffect function is a asynchronous function which will execute once all the code gets executed. It means it will executed once the dom is printed on the browser.
  useEffect(() => {
    console.log("i am useEffect");
  });

  console.log("a");

  return <div>LearnUseEffect</div>;
};

export default LearnUseEffect;

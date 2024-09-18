import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  // let [name, setName] = useState("ram");

  // let name = { name, setName };
  console.log("i am parent");
  return (
    <div>
      Parent
      <Child />
    </div>
  );
};

export default Parent;

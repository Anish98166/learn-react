import { useContext } from "react";
// import { Context } from "../App";

const GreatGrandChild = () => {
  // let value = useContext(Context);
  // console.log(value);
  console.log("i am ggc");

  return (
    <div>
      GreatGrandChild {value.name}
      <br />
      <button
        onClick={() => {
          value.setName("hari");
        }}
      >
        Change name
      </button>
    </div>
  );
};

export default GreatGrandChild;

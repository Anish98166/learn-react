import { useState } from "react";

const UseState2 = () => {
  let [show, setShow] = useState(true);
  return (
    <div>
      {show === true && <img src="./public/vite.svg" alt="image" />}
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        show{" "}
      </button>
      <button
        onClick={() => {
          setShow(false);
        }}
      >
        hide
      </button>
    </div>
  );
};

export default UseState2;

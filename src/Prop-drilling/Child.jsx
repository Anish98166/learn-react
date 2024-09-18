import GrandChild from "./GrandChild";

const Child = () => {
  //   console.log(props.name);
  console.log("i am child");
  return (
    <div>
      Child
      <GrandChild />
    </div>
  );
};

export default Child;

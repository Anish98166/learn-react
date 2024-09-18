import GreatGrandChild from "./GreatGrandChild";

const GrandChild = () => {
  //   console.log(props.name);
  console.log("i am gg");
  return (
    <div>
      GrandChild
      <GreatGrandChild />
    </div>
  );
};

export default GrandChild;

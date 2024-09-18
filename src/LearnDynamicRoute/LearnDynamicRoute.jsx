import { useParams } from "react-router-dom";

const LearnDynamicRoute = () => {
  //useParams() => to get dynamic route parameter

  let params = useParams();

  return (
    <div>
      LearnDynamicRoute <br />
      {params.id1} <br />
      {params.id2}
    </div>
  );
};

export default LearnDynamicRoute;

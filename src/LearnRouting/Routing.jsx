import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Contact from "../Contact";
import About from "../About";
import LearnDynamicRoute from "../LearnDynamicRoute/LearnDynamicRoute";
import GetQueryParams from "../LearnDynamicRoute/GetQueryParams";
import ErrorPage from "../ErrorPage";

const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home name={"ram"} number={9800012345} />}
      ></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>

      <Route
        path="/user/:id1/create/:id2"
        element={<LearnDynamicRoute />}
      ></Route>

      <Route path="/admin" element={<GetQueryParams />}></Route>
    </Routes>
  );
};

export default Routing;

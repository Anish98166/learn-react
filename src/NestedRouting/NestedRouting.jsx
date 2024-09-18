import { Outlet, Route, Routes } from "react-router-dom";

const NestedRouting = () => {
  return (
    <Routes>
      {/* <Route path="/a" element={<div>a page</div>}></Route>
      <Route path="/a/a1" element={<div>a1 page</div>}></Route>
      <Route path="/a/a1/a2" element={<div>a2 page</div>}></Route> */}

      <Route
        path="/"
        element={
          <>
            <Outlet />
          </>
        }
      >
        {/* Outlet replace the child element */}
        <Route index element={<div>home page</div>}></Route>
        <Route path="a" element={<Outlet />}>
          <Route index element={<div>a page</div>}></Route>
          <Route path="a1" element={<Outlet />}>
            <Route index element={<div>a1 page</div>}></Route>
            <Route path="a2" element={<div>a2 page</div>}></Route>

            <Route path=":id" element={<div>random page</div>}></Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default NestedRouting;

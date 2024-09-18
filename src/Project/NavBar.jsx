import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: "gray" }}>
      <NavLink to={"/products"} style={{ margin: "10px", color: "white" }}>
        Products
      </NavLink>
      <NavLink
        to={"/products/create"}
        style={{ margin: "10px", color: "white" }}
      >
        Create Product
      </NavLink>
    </nav>
  );
};

export default NavBar;

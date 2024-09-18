import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./Project/NavBar";
import Footer from "./Project/Footer";
import CreateProduct from "./Project/CreateProduct";
import ReadAllProduct from "./Project/ReadAllProduct";
import ProductSpecificDetails from "./Project/ProductSpecificDetails";
import ProductUpdate from "./Project/ProductUpdate";

const Project = () => {
  //http://localhost:3000/prodcuts => read all products
  //http://localhost:3000/prodcuts/create => form to create a product
  //http://localhost:3000/prodcuts/:id => read single  product
  //http://localhost:3000/prodcuts/update/:id => form to edit a product

  ///api
  /* 
    POST =>  http://localhost:3000/product
    data ={
        name: "charger",
        quantity:12,
        price:500,
        featured:true,
        productImage:"http://localhost:3000/productImage",
        manufactureDate: "2022-12-16",
        company:"apple"
    }

    note: company is in select ["apple", "samsung", "dell", "mi"]







  
  */

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar />
              <Outlet />
              <Footer />
            </div>
          }
        >
          <Route index element={<div>Home Page</div>}></Route>
          <Route
            path="products"
            element={
              <div>
                <Outlet />
              </div>
            }
          >
            <Route index element={<ReadAllProduct />}></Route>
            <Route path="create" element={<CreateProduct />}></Route>
            <Route path=":id" element={<ProductSpecificDetails />}></Route>
            <Route
              path="update"
              element={
                <div>
                  <Outlet />
                </div>
              }
            >
              {/* <Route index element={<div>Update Page</div>}></Route> */}
              <Route path=":id" element={<ProductUpdate />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Project;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { hitApi } from "../Services/hitApi";

const ReadAllProduct = () => {
  let [product, setProduct] = useState([]);

  let navigate = useNavigate();

  let getData = async () => {
    try {
      let result = await hitApi({
        url: `/product`,
        method: "GET",
      });
      setProduct(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      let result = await axios({
        url: `http://localhost:3000/product/${id}`,
        method: "DELETE",
      });
      //   console.log(result);
      getData();
    } catch (error) {}
  };

  let alertToast = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed === true) {
        handleDelete(id);
      }
    });
  };

  return (
    <div>
      {product.map((item, i) => {
        return (
          <div
            key={i}
            style={{
              border: "solid gray 3px",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              src={item.productImage}
              alt="product image"
              style={{ width: "80px", height: "80px" }}
            />

            <div>Name is : {item.name}</div>
            <div>Quantity is : {item.quantity}</div>
            <div>Price is : {item.price}</div>
            <br />
            <button
              style={{ cursor: "pointer", margin: "5px" }}
              onClick={() => {
                navigate(`/products/${item._id}`);
              }}
            >
              View
            </button>
            <button
              style={{ cursor: "pointer", margin: "5px" }}
              onClick={() => {
                navigate(`/products/update/${item._id}`);
              }}
            >
              Edit
            </button>
            <button
              style={{ cursor: "pointer", margin: "5px" }}
              onClick={() => {
                alertToast(item._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllProduct;

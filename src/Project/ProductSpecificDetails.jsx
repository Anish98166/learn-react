import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hitApi } from "../Services/hitApi";

const ProductSpecificDetails = () => {
  let [product, setProduct] = useState("");

  let params = useParams();

  let getData = async () => {
    try {
      let result = await hitApi({
        url: `/product/${params.id}`,
      });
      // console.log(result.data.result);
      setProduct(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <img
        src={product.productImage}
        alt="product image"
        style={{ height: "300px", width: "300px" }}
      />
      <div>Name is : {product.name}</div>
      <div>Quantity is : {product.quantity}</div>
      <div>Price is : {product.price}</div>
      <div>Date is : {product.manufactureDate}</div>
      <div>Featured : {product.featured === true ? "true" : "false"}</div>
      <div>Company is : {product.company}</div>
      <div></div>
    </div>
  );
};

export default ProductSpecificDetails;

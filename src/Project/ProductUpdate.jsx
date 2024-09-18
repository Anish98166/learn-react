import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hitApi } from "../Services/hitApi";
import ProductForm from "./ProductForm";

const ProductUpdate = () => {
  const [product, setProduct] = useState({});

  let params = useParams();

  // function getYearMonthDay(dateString) {
  //   const date = new Date(dateString);
  //   const year = date.getUTCFullYear();
  //   const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Ensure two digits
  //   const day = String(date.getUTCDate()).padStart(2, "0"); // Ensure two digits
  //   return `${year}-${month}-${day}`; // Format to yyyy-MM-dd
  // }

  let getData = async () => {
    try {
      let result = await hitApi({
        url: `/product/${params.id}`,
        method: "GET",
      });
      setProduct(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const onSubmit = async (data) => {
    try {
      let result = await hitApi({
        url: `/product/${params.id}`,
        method: "PATCH",
        data: data,
      });
      console.log(result);
    } catch (error) {}
  };

  return (
    <div>
      <ProductForm
        buttonName="Update Product"
        onSubmit={onSubmit}
        Product={product}
      />
    </div>
  );
};

export default ProductUpdate;

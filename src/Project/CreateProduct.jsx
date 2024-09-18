import ProductForm from "./ProductForm";
import { hitApi } from "../Services/hitApi";

const CreateProduct = () => {
  const onSubmit = async (data) => {
    try {
      let result = await hitApi({
        url: `/product`,
        method: "POST",
        data: data,
      });
      console.log(result);
    } catch (error) {}
  };

  return (
    <div>
      <ProductForm buttonName="Create Product" onSubmit={onSubmit} Product="" />
    </div>
  );
};

export default CreateProduct;

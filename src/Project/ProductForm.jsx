import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { hitApi } from "../Services/hitApi";

const ProductForm = ({
  buttonName = "",
  onSubmit = () => {},
  Product = {},
}) => {
  let [name, setName] = useState(Product?.name || "");
  let [quantity, setQuantity] = useState(Product?.quantity || 0);
  let [price, setPrice] = useState(Product?.price || 0);
  let [featured, setFeatured] = useState(Product?.featured || "false");
  let [productImage, setProductImage] = useState(Product?.productImage || "");
  let [manufactureDate, setManufactureDate] = useState(
    Product?.manufactureDate || ""
  );
  let [company, setCompany] = useState(Product?.company || "");

  let companies = [
    { label: "Choose a Company", value: "" },
    { label: "Apple", value: "apple" },
    { label: "Dell", value: "dell" },
    { label: "Samsung", value: "samsung" },
    { label: "Lenovo", value: "lenovo" },
  ];

  const onDrop = useCallback(async (acceptedFiles) => {
    // Do something with the files
    let fileData = acceptedFiles[0];
    let data = new FormData();
    data.append("document", fileData);
    try {
      let result = await hitApi({
        url: `/file/single`,
        method: "POST",
        data: data,
      });
      // console.log(result);
      setProductImage(result.data.result);
    } catch (error) {}
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  useEffect(() => {
    if (Product) {
      setName(Product?.name || "");
      setQuantity(Product?.quantity || 0);
      setPrice(Product?.price || 0);
      setFeatured(Product?.featured || false);
      setProductImage(Product?.productImage || "");
      setManufactureDate(Product?.manufactureDate || "");
      setCompany(Product?.company || "");
    }
  }, [Product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      quantity,
      price,
      featured,
      manufactureDate,
      productImage,
      company,
    };
    onSubmit(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity : </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="price">Price : </label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="featured">Featured : </label>
          <input
            type="checkbox"
            name="featured"
            id="featured"
            checked={featured === true}
            onChange={(e) => {
              setFeatured(e.target.checked);
            }}
          />
        </div>

        <div {...getRootProps()}>
          <label>Product Image : </label>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag and drop some files here, or click to select files</p>
          )}
          {productImage ? (
            <img
              src={productImage}
              alt="product image"
              style={{ height: "100px", width: "100px" }}
            />
          ) : null}
        </div>

        <div>
          <label htmlFor="date">Manufacture-Date : </label>
          <input
            type="date"
            name="date"
            id="date"
            value={manufactureDate}
            onChange={(e) => {
              setManufactureDate(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Company : </label>
          <select
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          >
            {companies.map((item, i) => {
              return (
                <option key={i} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <button>{buttonName}</button>
      </form>
    </div>
  );
};

export default ProductForm;

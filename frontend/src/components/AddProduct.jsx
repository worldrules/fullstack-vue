import React, { useState } from "react";
import { axios } from "axios";
import {useHistory} from "react-router-dom";


const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();


  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/products", {
      title: title,
      price: price
    });
    history.push("/")
  };

  return (
    <div>
      <form onSubmit={saveProduct}>
        <div className="field">
          <label className="label">
            {" "}
            Title
            <input
              type="text"
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </label>
        </div>
        <div className="field">
          <label className="label">
            Price
            <input
              type="text"
              className="input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
            />
          </label>
        </div>
        <div className="field">
          <button className="button is-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;

import axios from "axios";
import React from "react";
import { AuthContext } from "../contexts/auth";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
export default function LeftBar() {
  let authContext = React.useContext(AuthContext);
  let [file, setFile] = React.useState();
  let [productName, setProductName] = React.useState();
  let [description, setDescription] = React.useState();
  let [condition, setCondition] = React.useState("brand new");
  let [price, setPrice] = React.useState();
  let [quantity, setQuantity] = React.useState();
  let [category, setCategory] = React.useState("");
  let handleSubmit = async (e) => {
    e.target.textContent = "uploading...";
    let data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "shopix");
    try {
      let response = await axios.post(
        "https://api.cloudinary.com/v1_1/dbkpvjl7s/image/upload",
        data
      );

      if (response) {
        let addProduct = await axios.post("http://localhost:3000/api/product", {
          productImageId: response.data.secure_url,
          productName: productName,
          productsAvailable: +quantity,
          fromId: authContext.logedInId,
          category: category,
          productCondition: condition,
          price: +price,
          productOwnerId: "seller",
          description: description,
          isSold: false,
          rating: 1,
        });

        e.target.textContent = "uploaded";
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div className={styles.leftBar}>
        <div className="post-form">
          <p>post a new product</p>
          <label htmlFor="pName">product name</label>
          <input
            required
            type="text"
            placeholder="product name"
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
          <label htmlFor="condition"> in what condition is you product</label>
          <select
            name="condition"
            id=""
            onChange={(e) => {
              setCondition(e.target.value);
            }}
          >
            <option value="brand new" required>
              brand new
            </option>
            <option value="second hand & neat">second hand & neat</option>
            <option value="second hand with faults">
              second hand with faults
            </option>
          </select>
          <label htmlFor="category">choose category </label>
          <select
            required
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="others">others</option>
            <option value="art">art</option>
            <option value="cosmetics">cosmetics</option>
            <option value="gadgets">gadgets</option>
            <option value="fashion">fashion</option>

            <option value="healthy">healthy</option>
            <option value="sports">sports</option>
            <option value="food">food</option>
            <option value="cars">cars</option>
          </select>

          <label htmlFor="price">price in $</label>
          <input
            required
            type="number"
            placeholder="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <label htmlFor="quantity">
            how {productName ? `${productName}s` : ""} are available
          </label>
          <input
            required
            type="number"
            placeholder="price"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
          <label htmlFor="desc">description</label>
          <textarea
            required
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <label htmlFor="img">choose image</label>
          <div className="file">
            <input
              className="file"
              required
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            ></input>
          </div>

          <button onClick={handleSubmit}>add</button>
        </div>
      </div>
    </>
  );
}

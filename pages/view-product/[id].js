import Image from "next/image";
import React from "react";
import axios from "axios";
import Nav from "../../components/home-nav";
import { AuthContext } from "../../contexts/auth";
export let getServerSideProps = async (ctx) => {
  let data = await axios.get(
    `http://localhost:3000/api/view?id=${ctx.params.id}`
  );
  return {
    props: {
      data: data.data,
    },
  };
};
export default function Product({ data }) {
  let authContext = React.useContext(AuthContext);
  return (
    <div style={{ backgroundColor: "#5D656A" }}>
      <Nav authContext={authContext} />
      <div className="containers">
        <div className="container">
          <div className="view-image-wrapper">
            <Image
              alt=""
              src={data.data[0].productImageId}
              layout="fill"
            ></Image>
          </div>
        </div>
        <div className="container">
          <h1>{data.data[0].productName}</h1>
          <hr />
          <p>
            condition:
            <span>
              {data.data[0].productCondition
                ? data.data[0].productCondition
                : "new"}
            </span>
          </p>
          <p>
            in stock: <span>{data.data[0].productsAvailable}</span>
          </p>
          <p>
            {data.data[0].isSold == true
              ? "this is sold"
              : "this is still available"}
          </p>
          <hr />
          <div>
            <div className="view-price">
              <p>price</p>
              <p>${data.data[0].price}</p>
            </div>
            <button>buy now</button>
            <button>add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
export let getStaticPaths = async (ctx) => {
  let data = await axios.get(`http://localhost:3000/api/product`);
  let paths = data.data.data.map((item) => {
    return {
      params: { id: item._id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
*/

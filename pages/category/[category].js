import Nav from "../../components/home-nav";
import { AuthContext } from "../../contexts/auth";
import AllProducts from "../../components/allproducts";
import Footer from "../../components/footer";
import React from "react";
import { dbConnect } from "../../utils/db";
import { ProductModel } from "../../models/models";
import axios from "axios";
export let getServerSideProps = async (ctx) => {
  let data = await axios.get(
    `http://localhost:3000/api/category/${ctx.params.category}`
  );
  return {
    props: { data: data.data },
  };
};

export default function Category({ data }) {
  let authContext = React.useContext(AuthContext);

  return (
    <>
      <Nav authContext={authContext} />
      <AllProducts data={data} />
      <Footer />
    </>
  );
}

import { AuthContext } from "../contexts/auth";
import { useContext } from "react";
import Footer from "../components/footer";

import Stores from "../components/stores";
import styles from "../styles/Home.module.scss";
import HomeBar from "../components/home-bar";
import Nav from "../components/home-nav";
import AllProducts from "../components/allproducts";
import { userModel, storeModel, ProductModel } from "../models/models";
import { dbDisconnect, dbConnect } from "../utils/db";
import mongoose from "mongoose";
import axios from "axios";
export let getStaticProps = async () => {
  let data = await axios.get("https://shopix-blond.vercel.app/api/product");

  return {
    props: { data: data.data },
    revalidate: 120,
  };
};
export default function Home({ data, data2 }) {
  let authContext = useContext(AuthContext);
  return (
    <div className={styles.homeWrapper2}>
      <Nav authContext={authContext} />
      <HomeBar authContext={authContext} />
      <div className={styles.allProductsTitle}>
        <p>our top selling products</p>
      </div>

      <AllProducts authContext={authContext} data={data} />
      <div className={styles.storesTitle}>
        <p>trending amazon products</p>
      </div>
      <Stores data={data.data2.data} />
      <Footer />
    </div>
  );
}

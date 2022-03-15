import React from "react";
import Image from "next/image";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import styles from "../styles/Home.module.scss";
import { CartContext } from "../contexts/cart";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import { useEffect } from "react";
import Cookies from "js-cookie";
import useRouter from "next/router";
export default function AllProducts({ data }) {
  let { setCartItems, cartItems } = React.useContext(CartContext);

  let viewItem = (e) => {
    useRouter.push(`/view-product/${e.target.id}`);
  };
  let addToCart = (e) => {
    let step1 = e.target;
    let step2 = step1.attributes;
    let step3 = step2.values;
    let step4 = step3 ? step3.value : "none,none,none,none";

    let step5 = step4.split(",");

    let [cartProductName, cartImage, price, id] = step5;

    let filteredArray = cartItems.filter((filtrate) => {
      return filtrate.id != id.toString();
    });
    let myArray = [
      {
        cartProductName: cartProductName,
        image: cartImage,
        id: id.toString(),
        price: price,
      },
      ...filteredArray,
    ];

    setCartItems(myArray);

    /* console.log(
      typeof e.target.attributes.values.value?.split(",") == "object"
    ); */
  };

  return (
    <>
      {
        data.data[0] == undefined ? (
          <p className={styles.noOrders}>no related products yet</p>
        ) : (
          <div id="products" className={styles.AllProductsWrapper}>
            {data?.data?.map((data, index) => (
              <div className={styles.productWrapper} key={index}>
                <div className="product-wrapper">
                  <div
                    style={{
                      position: "relative",
                      height: "200px",
                      width: "90%",
                      margin: "auto",
                    }}
                  >
                    <Image
                      layout="fill"
                      src={data.productImageId}
                      alt={data.productName}
                      className={styles.productImg}
                    />
                  </div>
                  <h3 className={styles.productTitle}>{data.productName}</h3>
                  <p className={styles.conditionTxt}>{data.productCondition}</p>

                  <div className={styles.ratingIconsWrapper}>
                    {data.rating <= 1 ? (
                      <span>
                        <StarOutlineIcon
                          htmlColor="#EBF783 "
                          className={styles.ratingIcon}
                        />
                      </span>
                    ) : data.rating <= 2 ? (
                      <div>
                        <StarOutlineIcon
                          htmlColor="#EBF783 "
                          className={styles.ratingIcon}
                        />

                        <StarOutlineIcon
                          htmlColor="#EBF783 "
                          className={styles.ratingIcon}
                        />
                      </div>
                    ) : data.rating <= 3 ? (
                      <div>
                        <StarOutlineIcon
                          htmlColor="#EBF783 "
                          className={styles.ratingIcon}
                        />
                        <StarOutlineIcon
                          htmlColor="#EBF783 "
                          className={styles.ratingIcon}
                        />
                        <StarOutlineIcon
                          htmlColor="#EBF783 "
                          className={styles.ratingIcon}
                        />
                      </div>
                    ) : data.rating <= 4 ? (
                      <div>
                        <StarOutlineIcon
                          htmlColor="#EBF783 "
                          className={styles.ratingIcon}
                        />
                        <StarOutlineIcon
                          htmlColor="#EBF783 "
                          className={styles.ratingIcon}
                        />
                        <StarOutlineIcon
                          htmlColor="#EBF783 "
                          className={styles.ratingIcon}
                        />
                        <StarOutlineIcon
                          htmlColor="#EBF783 "
                          className={styles.ratingIcon}
                        />
                      </div>
                    ) : data.rating <= 5 ? (
                      <div>
                        <StarOutlineIcon
                          htmlColor="#EBF783 "
                          className={styles.ratingIcon}
                        />
                        <StarOutlineIcon
                          htmlColor="#EBF783 "
                          className={styles.ratingIcon}
                        />
                        <StarOutlineIcon
                          htmlColor="#EBF783 "
                          className={styles.ratingIcon}
                        />
                        <StarOutlineIcon
                          htmlColor="#EBF783 "
                          className={styles.ratingIcon}
                        />
                        <StarOutlineIcon
                          htmlColor="#EBF783 "
                          className={styles.ratingIcon}
                        />
                      </div>
                    ) : (
                      <p>0</p>
                    )}
                  </div>
                  <p className="price">${data.price}</p>
                  <div className={styles.productBtns}>
                    <button
                      id={data._id}
                      className={styles.viewBtn}
                      onClick={viewItem}
                    >
                      view
                    </button>{" "}
                    <button
                      values={`${data.productName},${data.productImageId},${data.price},${data._id}`}
                      id={data.productName}
                      className={styles.addToCartBtn}
                      onClick={addToCart}
                    >
                      <AddShoppingCart />
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
        /*
     <div className={styles.seeMoreBtnWrapper}>
       <button className={styles.seeMoreBtn}>see more...</button>
     </div>*/
      }
    </>
  );
}

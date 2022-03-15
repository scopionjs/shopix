import React from "react";
import Image from "next/image";
import { CartContext } from "../contexts/cart";
import styles from "../styles/Home.module.scss";
import { useRef, useState } from "react";
import SubjectIcon from "@mui/icons-material/Subject";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import useRouter from "next/router";
export default function Nav(props) {
  let cart = useRef();
  let menu = useRef();
  let cartContext = React.useContext(CartContext);
  let handleShowMenuItems = () => {
    menu.current.setAttribute("style", "display:block;");
  };
  let handleCloseMenu = () => {
    menu.current.setAttribute("style", "display:none;");
  };
  let handleCategoryClick = (e) => {
    useRouter.push(`/category/${e.target.innerText}`);
  };
  let handleRegisterClick = (e) => {
    useRouter.push(`/${e.target.innerText}`);
  };
  let handleLoginClick = (e) => {
    useRouter.push(`/login`);
  };
  const [hide, setHide] = useState(true);
  let toggleCart = () => {
    if (hide == true) {
      setHide(false);
    } else {
      setHide(true);
    }
  };

  let handleBuyFromCart = (e) => {
    useRouter.push(`/view-product/${e.target.id}`);
  };
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.homeNavWrapper}>
          <div className={styles.homeNavItem1}>
            <div ref={cart} className={styles.cartItemsWrapper}>
              {cartContext.cartItems[0] == undefined && hide == false ? (
                <p className={styles.noCartItems}>
                  the cart is empty please add something...
                </p>
              ) : (
                cartContext.cartItems.map((item, index) =>
                  item.cartProductName == "none" ? (
                    ""
                  ) : hide == true ? (
                    <div key={index} className={styles.cartItem}>
                      <div className={styles.cartImgWrapper}>
                        <img src={item.image} altpic />
                      </div>
                      <p>{item.cartProductName}</p>
                      <p className={styles.cartPrice}>${item.price}</p>
                      <div className={styles.cartBtnsWrapper}>
                        <button id={item.id} onClick={handleBuyFromCart}>
                          buy
                        </button>
                      </div>
                    </div>
                  ) : (
                    ""
                  )
                )
              )}
            </div>
            <div
              className="logo-wrapper"
              style={{
                position: "relative",
                width: "55px",
                height: "55px",
              }}
            >
              <Image src="/logo.jpeg" layout="fill" alt="shopix logo"></Image>
            </div>
          </div>
          <div className={styles.homeNavItem2}>
            <Link
              href={
                props.authContext.isLogedIn ? "/dashboard/profile" : "/login"
              }
            >
              <a className={styles.loginLink}>
                {props.authContext.isLogedIn
                  ? props.authContext.logedInUserName
                  : "login"}
              </a>
            </Link>

            <Link
              href={
                props.authContext.isLogedIn ? "/logout" : "/register/#register"
              }
            >
              <a className={styles.registerLink}>
                {props.authContext.isLogedIn ? "logout" : "register"}
              </a>
            </Link>

            <Link href="#">
              <a>
                <button className={styles.cartWrapper} onClick={toggleCart}>
                  <LocalGroceryStoreIcon
                    htmlColor="white"
                    className={styles.cartIcon}
                  />
                  <span className={styles.cartBadge}>
                    {cartContext.cartItems.length}
                  </span>
                  <span>cart</span>
                </button>
              </a>
            </Link>

            <button className={styles.menuButton}>
              <SubjectIcon htmlColor="white" onClick={handleShowMenuItems} />
            </button>
          </div>
        </div>
        <div className={styles.homeNavCategories}>
          <div className={styles.menuWrapper}>
            <div className={styles.menuItemsWrapper}>
              <div ref={menu} className={styles.menuItems}>
                <button className={styles.closeIcon} onClick={handleCloseMenu}>
                  <CloseIcon />
                </button>
                <div className={styles.menuListWrapper}>
                  <button
                    name="all"
                    className={styles.categoryBtn}
                    onClick={(e) => {
                      handleCategoryClick(e);
                    }}
                  >
                    all
                  </button>
                  <button
                    name="all"
                    className={styles.categoryBtn}
                    onClick={(e) => {
                      handleCategoryClick(e);
                    }}
                  >
                    gadgets
                  </button>
                  <button
                    name="all"
                    className={styles.categoryBtn}
                    onClick={(e) => {
                      handleCategoryClick(e);
                    }}
                  >
                    cosmetics
                  </button>
                  <button
                    name="all"
                    className={styles.categoryBtn}
                    onClick={(e) => {
                      handleCategoryClick(e);
                    }}
                  >
                    fashion
                  </button>
                  <button
                    name="all"
                    className={styles.categoryBtn}
                    onClick={(e) => {
                      handleCategoryClick(e);
                    }}
                  >
                    art
                  </button>
                  <button
                    name="all"
                    className={styles.categoryBtn}
                    onClick={(e) => {
                      handleCategoryClick(e);
                    }}
                  >
                    songs
                  </button>
                  <button
                    name="all"
                    className={styles.categoryBtn}
                    onClick={(e) => {
                      handleCategoryClick(e);
                    }}
                  >
                    healthy
                  </button>
                  <button
                    name="all"
                    className={styles.categoryBtn}
                    onClick={(e) => {
                      handleCategoryClick(e);
                    }}
                  >
                    sports
                  </button>
                  <button
                    name="all"
                    className={styles.categoryBtn}
                    onClick={(e) => {
                      handleCategoryClick(e);
                    }}
                  >
                    food
                  </button>
                  <button
                    name="all"
                    className={styles.categoryBtn}
                    onClick={(e) => {
                      handleCategoryClick(e);
                    }}
                  >
                    motors
                  </button>
                  <button
                    name="all"
                    className={styles.categoryBtn}
                    onClick={(e) => {
                      handleCategoryClick(e);
                    }}
                  >
                    others
                  </button>
                  <button
                    name="all"
                    className={styles.categoryBtn}
                    onClick={(e) => {
                      handleCategoryClick(e);
                    }}
                  >
                    stores
                  </button>
                  <div className={styles.btnsWrapper}>
                    <button
                      className={styles.login2}
                      onClick={(e) => {
                        handleLoginClick(e);
                      }}
                    >
                      login
                    </button>
                    <button
                      className={styles.register2}
                      onClick={(e) => {
                        handleRegisterClick(e);
                      }}
                    >
                      register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="/#products">
            <a>All</a>
          </Link>
          <Link href="/category/gadgets">
            <a>gadgets</a>
          </Link>
          <Link href="/category/cosmetics">
            <a>cosmetics</a>
          </Link>
          <Link href="/category/fashion">
            <a>fashion</a>
          </Link>
          <Link href="/category/art">
            <a>art</a>
          </Link>
          <Link href="/category/songs">
            <a>songs</a>
          </Link>
          <Link href="/category/healthy">
            <a>healthy</a>
          </Link>
          <Link href="/category/sports">
            <a>sports</a>
          </Link>
          <Link href="/category/food">
            <a>food</a>
          </Link>
          <Link href="/category/motors">
            <a>motors</a>
          </Link>
          <Link href="/category/others">
            <a>others</a>
          </Link>
        </div>
      </nav>
    </>
  );
}

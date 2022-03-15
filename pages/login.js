import Cookies from "js-cookie";
import React, { useRef } from "react";
import { AuthContext } from "../contexts/auth";
import Nav from "../components/home-nav";
import Footer from "../components/footer";
import axios from "axios";
import { useContext } from "react";
import useRouter from "next/router";
import styles from "../styles/Home.module.scss";
export default function Login() {
  let authContext = useContext(AuthContext);
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let errors = useRef();
  let submitBtn = useRef();
  let handleSubmit = async (e) => {
    e.preventDefault();
    errors.current.textContent = "signing in....";
    try {
      let response = await axios.post("/api/login", {
        password: password,
        email: email,
      });
      if (response.data.error) {
        errors.current.textContent = response.data.error;
      } else {
        //console.log(response.data.credentials[0]);
        Cookies.set("username", response.data.credentials[0].sellerName);
        Cookies.set("password", password);
        Cookies.set("id", response.data.credentials[0]._id);
        Cookies.set(
          "has_img",
          response.data.credentials[0].user_img ? true : false
        );
        authContext.setIsLogedIn(true);
        authContext.setLogedInUserName(response.data.credentials[0].sellerName);
        authContext.setLogedInId(response.data.credentials[0]._id);
        authContext.setUserDetails(response.data.credentials[0]);
        authContext.setHasProfilePic(
          response.data.credentials[0].user_img ? true : false
        );
        useRouter.push("/dashboard/profile");
      }
    } catch (error) {
      errors.current.textContent = error.message;
    }
  };

  return (
    <>
      <div className={styles.loginFormWrapper}>
        <Nav authContext={authContext} />
        <p>sign in</p>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <label className={styles.loginInput1} htmlFor="email">
            email
          </label>
          <input
            type="text"
            placeholder="your email"
            className={styles.loginInput1}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password" className={styles.loginInput2}>
            password
          </label>
          <input
            required
            type="text"
            placeholder="password"
            className={styles.loginInput2}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button ref={submitBtn}>sign in</button>
          <div className={styles.errorField}>
            <span ref={errors} className={styles.showErrors}></span>
          </div>
        </form>
      </div>
    </>
  );
}

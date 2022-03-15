import React, { useRef } from "react";
import Nav from "../components/home-nav";
import axios from "axios";
import useRouter from "next/router";
import styles from "../styles/Home.module.scss";
import { AuthContext } from "../contexts/auth";
import Footer from "../components/footer";
export default function Register() {
  let [userName, setUserName] = React.useState("");
  let [passWord, setPassWord] = React.useState("");
  let [email, setEmail] = React.useState("");
  let authContext = React.useContext(AuthContext);
  let errors = useRef();
  let submitBtn = useRef();
  let handleSubmit = async (e) => {
    e.preventDefault();
    errors.current.textContent = "creating....";
    try {
      let res = await axios.post("api/register", {
        password: passWord,
        email: email,
        sellerName: userName,
      });
      console.log(res);
      if (res.data.error) {
        errors.current.textContent = res.data.error;
      } else {
        errors.current.textContent = "account created successfully";
        setTimeout(() => {
          useRouter.push("/login");
        }, 2000);
      }
    } catch (error) {
      if (error) {
        if (error.message == "Request failed with status code 500") {
          errors.current.textContent =
            "please try again your network has some errors";
        } else {
          console.log(error);
          errors.current.textContent = error.message;
        }
      }
    }
  };
  let comparePassword = (e) => {
    let clickedElement = e.target;
    let initialPassword =
      clickedElement.previousElementSibling.previousElementSibling.value;
    if (clickedElement.value == initialPassword) {
      errors.current.textContent = "";
      setPassWord(clickedElement.value);
      submitBtn.current.removeAttribute("disabled");
    } else {
      errors.current.textContent = "password doesnt match";
    }
  };
  let showNext = (e) => {
    let clickedElement = e.target;
    let next1 = clickedElement.nextElementSibling;
    let next2 = next1.nextElementSibling;
    if (clickedElement.value.length > 5) {
      next1.setAttribute(
        "style",
        "display:block;transition: all 6s ease-in-out;-webkit-transition: all 7s ease-in-out;-moz-transition: all 7s ease-in-out;-o-trasition: all 7s ease-in-out;"
      );
      errors.current.textContent = "";
      next2.setAttribute("style", "display:block;");
    } else {
      errors.current.textContent = `your ${clickedElement.previousElementSibling.innerHTML} is too short `;
    }
  };
  return (
    <>
      <div className={styles.registerFormWrapper}>
        <Nav authContext={authContext} />
        <p>sign up</p>
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <label htmlFor="firstName">firstname</label>
          <input
            type="text"
            placeholder="firstname"
            className={styles.registerInput0}
            onKeyPress={showNext}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          <label className={styles.registerInput2} htmlFor="email">
            email
          </label>
          <input
            type="text"
            placeholder="your email"
            className={styles.registerInput2}
            onKeyPress={showNext}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password" className={styles.registerInput3}>
            password
          </label>
          <input
            type="text"
            placeholder="password"
            className={styles.registerInput3}
            onKeyPress={showNext}
          />
          <label htmlFor="username" className={styles.registerInput4}>
            confirm password
          </label>
          <input
            type="text"
            placeholder="comfirm password"
            className={styles.registerInput4}
            onKeyUp={comparePassword}
          />
          <button ref={submitBtn} disabled>
            register
          </button>
          <div className={styles.errorField}>
            <span ref={errors} className={styles.showErrors}></span>
          </div>
        </form>
      </div>
    </>
  );
}

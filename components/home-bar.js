import styles from "../styles/Home.module.scss";
import { Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
export default function HomeBar() {
  let [wordsToShow, setWordsToShow] = useState("");
  let bg = useRef();
  let txt = useRef();
  let index = 2;
  let bgImages = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jfif", "bg5.jfif"];
  let changeBgImge = () => {};
  useEffect(() => {
    let changeBg = setInterval(() => {
      if (index >= bgImages.length) {
        index = 0;
        bg.current.setAttribute(
          `style`,
          `background-image: url("${bgImages[index]}");
          transition: all 2s ease-in-out;
          -webkit-transition: all 2s ease-in-out;
	-moz-transition: all 2s ease-in-out;
	-o-trasition: all 2s ease-in-out;
          `
        );
      } else {
        bg.current.setAttribute(
          `style`,
          `background-image: url("${bgImages[index]}");
          transition: all 2s ease-in-out;`
        );
        index++;
      }
    }, 4000);
    return () => {
      clearInterval(changeBg);
    };
  }, []);
  let wordIndex = 0;
  let words = "WELCOME TO SHOPIX,THE BEST MULTI-VENDOR WEBSITE";
  let oldLetter = "";

  useEffect(() => {
    let changeTxt = setInterval(() => {
      if (wordIndex <= words.length - 1) {
        setWordsToShow((aval) => aval + words[wordIndex]);
        wordIndex++;
      } else {
        wordIndex = 0;
        setWordsToShow("");
      }
    }, 200);
    let wait = setTimeout(changeTxt, 8000);
    return () => {
      clearInterval(changeTxt);
      clearTimeout(wait);
    };
  }, []);
  let visitors = 10;
  return (
    <div ref={bg} className={styles.wrapper1}>
      <div className={styles.textWrapper}>
        <h2 ref={txt} className={styles.h2}>
          {wordsToShow}
        </h2>
        <button className={styles.joinBtn}>join now</button>
      </div>
    </div>
  );
}

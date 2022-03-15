import React from "react";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { AuthContext } from "../contexts/auth";
import EditIcon from "@mui/icons-material/Edit";
export default function LeftBar({ data }) {
  let input1 = React.useRef();
  let input2 = React.useRef();
  let input3 = React.useRef();
  let input4 = React.useRef();
  let input5 = React.useRef();
  let [isEdit, setEdit] = React.useState(false);
  let textToEdit;
  let editPopUp = React.useRef();
  let editInput = React.useRef();
  let context = React.useContext(AuthContext);
  let handleCloseEdit = () => {
    editPopUp.current.setAttribute("style", "display:none;");
    textToEdit = "";
  };
  let handleEdit = () => {};

  return (
    <>
      <div className={styles.leftBar}>
        <div className="profileEditWrapper">
          <p>edit profile</p>
          {/* first input group  */}
          <div className="inputWrapper1">
            <div className="wrapper1">
              <label htmlFor="input">user name</label>
              <input ref={input1} />
            </div>
            <div className="wrapper2">
              <label htmlFor="input">password</label>
              <input ref={input2} type="password" />
            </div>
          </div>
          {/*second input group */}
          <div className="inputWrapper2">
            <div className="wrapper1">
              <label htmlFor="input">email</label>
              <input ref={input3} type="email" />
            </div>

            <div className="wrapper2">
              <label htmlFor="input">location</label>
              <input ref={input4} type="text" />
            </div>
          </div>
          {/* third input group */}
          <div className="inputWrapper3">
            <p>About me</p>
            <input ref={input5} type="text" name="" id="" />
            <button onClick={handleEdit}>edit</button>
          </div>
        </div>
        <div className="profile-view">
          <div className="image">
            <Image src="/no-pic.png" alt="profile pic" layout="fill"></Image>
          </div>
          <h2>{context.logedInUserName}</h2>
          <hr />
          <p>hi am a seller</p>
        </div>
      </div>
    </>
  );
}

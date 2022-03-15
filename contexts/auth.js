import React, { Children } from "react";
import { createContext } from "react";
import Cookies from "js-cookie";
import MyApp from "../pages/_app";
export let AuthContext = React.createContext();
export default function Auth({ children }) {
  let [userDetails, setUserDetails] = React.useState({});
  let [isLogedIn, setIsLogedIn] = React.useState(false);
  let [logedInId, setLogedInId] = React.useState(
    Cookies.get("id") ? Cookies.get("id") : ""
  );
  let [logedInUserName, setLogedInUserName] = React.useState(
    Cookies.get("username") ? Cookies.get("username") : ""
  );
  let [hasProfilePic, setHasProfilePic] = React.useState(
    Cookies.get("has_image") == true ? true : false
  );
  let [profilePic, setProfilePic] = React.useState("");

  let values = {
    isLogedIn,
    setIsLogedIn,
    logedInUserName,
    setLogedInUserName,
    hasProfilePic,
    setHasProfilePic,
    profilePic,
    setProfilePic,
    logedInId,
    setLogedInId,
    setUserDetails,
    userDetails,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

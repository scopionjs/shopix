import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import PaymentIcon from "@mui/icons-material/Payment";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import TimelineIcon from "@mui/icons-material/Timeline";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import StoreIcon from "@mui/icons-material/Store";
import PublicIcon from "@mui/icons-material/Public";
import NotificationsIcon from "@mui/icons-material/Notifications";
import styles from "../styles/Home.module.scss";
import { AuthContext } from "../contexts/auth";
import React from "react";

export default function RightBar({ active, data }) {
  let handleLogout = (e) => {
    e.target.textContent = "signing out..";
    e.target.setAttribute("style", "color:white;font-weight:border;");
    Cookies.remove("username");
    Cookies.remove("password");
    Cookies.remove("has_img");
    Cookies.remove("id");
    useRouter.push("/");
  };
  let context = React.useContext(AuthContext);
  return (
    <>
      <div className={styles.rightBar}>
        <p className={styles.heading}>dashboard</p>
        <hr />
        <div className={styles.wrapper}>
          <div>
            <Link href="/">
              <a>
                <HomeIcon />
                <p>home</p>
              </a>
            </Link>
          </div>
          <div>
            {active == "profile" ? <div className={styles.dot}></div> : ""}
            <Link href="/dashboard/profile">
              <a>
                <PersonIcon />
                <p>profile</p>
              </a>
            </Link>
          </div>
          <div>
            {active == "notifications" ? (
              <div className={styles.dot}></div>
            ) : (
              ""
            )}
            <Link href="/dashboard/notifications">
              <a>
                <NotificationsIcon />
                <p>notifications</p>
              </a>
            </Link>
          </div>
          <div>
            {active == "products" ? <div className={styles.dot}></div> : ""}
            <Link href="/dashboard/products">
              <a>
                <BusinessCenterIcon />
                <p>my products</p>
              </a>
            </Link>
          </div>
          <div>
            <div>
              {active == "orders" ? <div className={styles.dot}></div> : ""}
              <Link href="/dashboard/orders">
                <a>
                  <StorefrontIcon />
                  <p>my orders</p>
                </a>
              </Link>
            </div>
          </div>
          <div>
            {active == "performance" ? <div className={styles.dot}></div> : ""}
            <Link href="/dashboard/performance">
              <a>
                <TimelineIcon />
                <p>performance</p>
              </a>
            </Link>
          </div>
          <section>
            <button onClick={handleLogout}>log out</button>
          </section>
        </div>
      </div>
    </>
  );
}

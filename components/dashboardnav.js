import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";

import useRouter from "next/router";
import DehazeIcon from "@mui/icons-material/Dehaze";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "../styles/Home.module.scss";
export default function DashBoardNav() {
  return (
    <>
      <nav className="dash-nav">
        <div className={styles.dashBoardNavWapper}>
          <div className="dash-logo">
            <Link href="/">
              <a>
                <h1>SHOPIX</h1>
              </a>
            </Link>
          </div>
          <div className="nav-pic">
            i
            <div>
              <div>
                <Image alt="pic" layout="fill" src="/no-pic.png" />
              </div>
              <span>rosa riah</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

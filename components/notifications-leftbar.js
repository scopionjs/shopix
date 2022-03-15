import styles from "../styles/Home.module.scss";
import Image from "next/image";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export default function LeftBar({ data }) {
  let handleNotOpt = (e) => {
    e.target?.parentNode?.previousElementSibling?.setAttribute(
      "style",
      "visibility:visible"
    );
  };
  let handleDelete = (e) => {};
  return (
    <>
      <div className={styles.leftBar}>
        {data[0] == undefined ? (
          <div className={styles.noOrders}>
            <p>you currently have no notifications...</p>
          </div>
        ) : (
          <div className={styles.notificationsWrapper}>
            {data.map((item, index) => (
              <div className={styles.notification} key={index}>
                <div className={styles.not_img}>
                  <Image
                    src="/no-pic.png"
                    alt="not img"
                    width={45}
                    height={45}
                  ></Image>
                  <span>2 hrs ago</span>
                </div>
                <div className={styles.not_msg}>
                  <p>
                    you have ordered a product Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quo, non.
                  </p>
                </div>
                <div className={styles.not_btn}>
                  <div className="not-delete">
                    <button onClick={handleDelete}>delete</button>
                  </div>
                  <button onClick={handleNotOpt} className={styles.moreOpts}>
                    <MoreVertIcon htmlColor="white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

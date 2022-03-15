import styles from "../styles/Home.module.scss";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
export default function LeftBar({ data }) {
  return (
    <>
      <div className={styles.leftBar}>
        <div className={styles.items}>
          <div className={styles.item1}>
            <p className={styles.item1}>products</p>
            <p className={styles.num}>{data.products}</p>
          </div>
          <div className={styles.item2}>
            <p className={styles.performanceTittle}>stores</p>
            <p className={styles.num}>{data.stores}</p>
          </div>
          <div className={styles.item3}>
            <p className={styles.performanceTittle}>rating</p>

            {data.rating <= 1 ? (
              <div>
                <StarOutlineIcon
                  htmlColor="#EBF783 "
                  className={styles.ratingIcon}
                />
              </div>
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
        </div>
      </div>
    </>
  );
}

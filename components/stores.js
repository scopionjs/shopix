import Link from "next/link";
import styles from "../styles/Home.module.scss";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
export default function Stores({ data }) {
  return (
    <>
      <div className={styles.storesWrapper}>
        {data.map((product, index) => (
          <div className={styles.storeWrapper} key={index}>
            <img src={product.image} alt="" className={styles.storeImg} />
            <p className={styles.storeName}>{product.title}</p>

            {product.rating <= 1 ? (
              <span>
                <StarOutlineIcon
                  htmlColor="#EBF783 "
                  className={styles.ratingIcon}
                />
              </span>
            ) : product.rating <= 2 ? (
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
            ) : product.rating <= 3 ? (
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
            ) : product.rating <= 4 ? (
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
            ) : product.rating <= 5 ? (
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
              <StarOutlineIcon
                htmlColor="#EBF783 "
                className={styles.ratingIcon}
              />
            )}
            <Link href={product.link}>
              <a style={{ display: "block" }} className={styles.visitBtn}>
                visit item
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

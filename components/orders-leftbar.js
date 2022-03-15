import { useRef } from "react";
import styles from "../styles/Home.module.scss";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
export default function LeftBar(props) {
  let isDelivered = useRef();
  let handleCloseIsDelivered = () => {
    isDelivered.current.setAttribute("style", "display:none;");
  };
  let handleIsDelivered = () => {
    isDelivered.current.setAttribute("style", "display:block;");
  };
  return (
    <>
      <div className={styles.leftBar}>
        <h5 className={styles.order}>orders history</h5>

        <div ref={isDelivered} className={styles.isDelivered}>
          <div className={styles.isDeliveredClose}>
            <button className={styles.close} onClick={handleCloseIsDelivered}>
              <DisabledByDefaultIcon htmlColor="#954636" />
            </button>
          </div>
          <p>have you received this item?</p>
          <button className={styles.is}>yes</button>
          <button className={styles.is}>No</button>
        </div>

        {props.data[0] == undefined ? (
          <div className={styles.noOrders}>
            <p>you havent ordered anything yet</p>
          </div>
        ) : (
          <table className={styles.orderTable}>
            <tr className={styles.tableHeads}>
              <th>order-id</th>
              <th>image</th>
              <th>date</th>
              <th>item-name</th>
              <th>delivered</th>
              <th>paid</th>
            </tr>

            {props.data.map((item, index) => (
              <tr key={index} className={styles.tableRows}>
                <td>{item.orderId}</td>
                <td>
                  <img
                    src={item.img}
                    className={styles.orderedImg}
                    alt="image"
                  />
                </td>
                <td>{item.date}</td>
                <td>{item.itemName}</td>
                <td>
                  {item.isDelivered ? (
                    <p>yes</p>
                  ) : (
                    <button
                      className={styles.isOrderedBtn}
                      onClick={handleIsDelivered}
                    >
                      yes / no
                    </button>
                  )}
                </td>
                <td>{item.isPaid ? <p>yes</p> : <p>no</p>}</td>
              </tr>
            ))}
          </table>
        )}
      </div>
    </>
  );
}

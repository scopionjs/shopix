import styles from "../styles/Home.module.scss";
export default function LeftBar() {
  return (
    <>
      <div className={styles.leftBar}>
        <div className={styles.addPaymentWrapper}>
          <p>shopix use paypal as a payment gateway</p>
          <p>set your paypal email as a way of receiving your payments</p>
          <label htmlFor="paypal"> paypal email</label>
          <input type="text" placeholder="enter your paypal email" />
          <button>set</button>
        </div>
      </div>
    </>
  );
}

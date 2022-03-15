import LeftBar from "../../components/orders-leftbar";
import RightBar from "../../components/dashboard-rightbar";
import styles from "../../styles/Home.module.scss";
import DashBoardNav from "../../components/dashboardnav";
export let getServerSideProps = async (ctx) => {
  let myCookies = ctx.req.cookies;
  if (
    myCookies.username &&
    myCookies.password &&
    myCookies.id &&
    myCookies.has_img
  ) {
    return {
      props: { credentials: myCookies },
    };
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default function DashBoardPerformance() {
  return (
    <>
      <div style={styles.dashBoardWrapper}>
        <DashBoardNav />
        <div className={styles.bars}>
          <RightBar data={{}} active={"orders"} />
          <LeftBar
            data={[
              {
                orderId: 1,
                img: "/shoes.jfif",
                itemName: "shoes",
                isPaid: true,
                date: "12:00",
                isDelivered: false,
              },
              {
                orderId: 2,
                img: "/shoes.jfif",
                itemName: "shoes",
                isPaid: true,
                date: "12:00",
                isDelivered: true,
              },
              {
                orderId: 2,
                img: "/shoes.jfif",
                itemName: "shoes",
                isPaid: true,
                date: "12:00",
                isDelivered: true,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

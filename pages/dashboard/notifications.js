import LeftBar from "../../components/notifications-leftbar";
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
          <RightBar data={{}} active={"notifications"} />
          <LeftBar
            data={[
              {
                date: "12 hrs ago",
                msg: "the product you ordered has been delivered",
              },
              {
                date: "5 hrs ago",
                msg: "the product you ordered has been delivered",
              },
              {
                date: "13 hrs ago",
                msg: "the product you ordered has been delivered",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

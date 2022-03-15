import "../styles/globals.scss";
import Auth from "../contexts/auth";
import Cart from "../contexts/cart";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Cart>
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </Cart>
    </>
  );
}

export default MyApp;

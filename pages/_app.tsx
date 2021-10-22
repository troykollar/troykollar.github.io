import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { RiMoonLine } from "react-icons/ri";

import NavBubble from "../components/Nav/NavBubble";
import Name from "../components/Nav/Name";
import Footer from "components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app dark">
      <div className="nav-bar dark">
        <Name text="Troy Kollar" />
        <NavBubble />
        <div></div>
        {/* <RiMoonLine size={40} /> */}
      </div>
      <div className="main">
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}
export default MyApp;

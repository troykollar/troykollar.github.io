import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { RiMoonLine } from "react-icons/ri";

import NavBubble from "../components/Nav/NavBubble";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <div className="nav-bar dark">
        <div className="name-text">Troy Kollar</div>
        <NavBubble />
        <RiMoonLine size={40} />
      </div>
      <div className="main">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default MyApp;

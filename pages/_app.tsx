import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { RiMoonLine } from "react-icons/ri";

import NavBubble from "../components/Nav/NavBubble";
import Name from "../components/Nav/Name";
import Footer from "components/Footer/Footer";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [bubbleActive, setBubbleActive] = useState(false);
  function bubbleClick(event: any) {
    event.stopPropagation();
    setBubbleActive(!bubbleActive);
  }
  return (
    <div className="app dark" onClick={() => setBubbleActive(false)}>
      <div className="nav-bar dark">
        <Name text="Troy Kollar" />
        <NavBubble
          active={bubbleActive}
          closeBubble={() => setBubbleActive(false)}
          click={bubbleClick}
        />
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

import * as React from "react";
import { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/NavBubble/NavBubble.module.scss";
import { NavRing } from "./NavRing";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

interface NavBubbleProps {}

const NavBubble: FunctionComponent<NavBubbleProps> = () => {
  const [active, setActive] = useState(false);

  function closeBubble() {
    setActive(false);
  }

  return (
    <div className={styles.circleContainer}>
      <NavRing
        active={active}
        ringNum={4}
        text="Contact"
        to="/contact"
        click={closeBubble}
      />
      <NavRing
        active={active}
        ringNum={3}
        text="Personal"
        to="/personal"
        click={closeBubble}
      />
      <NavRing
        active={active}
        ringNum={2}
        text="Professional"
        to="/professional"
        click={closeBubble}
      />
      <NavRing
        active={active}
        ringNum={1}
        text="Home"
        to="/"
        click={closeBubble}
      />

      <div
        className={`${styles.navBubble} ${styles["dark"]} ${styles.active}`}
        onClick={() => setActive(!active)}
      >
        {!active && <RiMenuLine size={20} />}
        {active && <RiCloseLine size={30} />}
      </div>
    </div>
  );
};

export default NavBubble;

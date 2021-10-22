import * as React from "react";
import { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/Nav/NavBubble/NavBubble.module.scss";
import { NavRing } from "./NavRing";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

interface NavBubbleProps {}

const NavBubble: FunctionComponent<NavBubbleProps> = ({}) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={styles.circleContainer}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <NavRing
        active={active}
        ringNum={3}
        text="Skills"
        to="/skills"
        click={() => setActive(false)}
      />
      <NavRing
        active={active}
        ringNum={2}
        text="Work"
        to="/work"
        click={() => setActive(false)}
      />
      <NavRing
        active={active}
        ringNum={1}
        text="Home"
        to="/"
        click={() => setActive(false)}
      />

      <div
        onClick={() => setActive(!active)}
        className={`${styles.navBubble} ${active ? styles.active : ""}`}
      >
        {!active && <RiMenuLine size={20} />}
        {active && <RiCloseLine size={30} />}
      </div>
    </div>
  );
};

export default NavBubble;

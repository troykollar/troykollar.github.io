import * as React from "react";
import { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/Nav/NavBubble/NavBubble.module.scss";
import { NavRing } from "./NavRing";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

interface NavBubbleProps {
  active: boolean;
  closeBubble: React.MouseEventHandler;
  click: React.MouseEventHandler;
}

const NavBubble: FunctionComponent<NavBubbleProps> = ({
  closeBubble,
  active,
  click,
}) => {
  return (
    <div className={styles.circleContainer}>
      <NavRing
        active={active}
        ringNum={3}
        text="Skills"
        to="/skills"
        click={closeBubble}
      />
      <NavRing
        active={active}
        ringNum={2}
        text="Work"
        to="/work"
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
        className={`${styles.navBubble} ${active ? styles.active : ""}`}
        onClick={click}
      >
        {!active && <RiMenuLine size={20} />}
        {active && <RiCloseLine size={30} />}
      </div>
    </div>
  );
};

export default NavBubble;

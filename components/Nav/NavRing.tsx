import {
  useState,
  useEffect,
  useRef,
  FunctionComponent,
  MouseEventHandler,
} from "react";
import Link from "next/link";

import styles from "../../styles/Nav/NavBubble/NavRing.module.scss";

interface NavRingProps {
  active: boolean;
  ringNum: number;
  text: string;
  to: string;
  click: MouseEventHandler<HTMLDivElement>;
}

export const NavRing: FunctionComponent<NavRingProps> = ({
  active,
  ringNum,
  text,
  to,
  click,
}) => {
  const size = 90 * ringNum + 60;

  const [ringClasses, setRingClasses] = useState(styles.navRing);
  useEffect(() => {
    setRingClasses(
      active ? `${styles.navRing} ${styles.active}` : `${styles.navRing}`,
    );
  }, [active]);
  return (
    <Link href={to}>
      <div
        onClick={click}
        className={ringClasses}
        style={{ width: size, height: size, borderRadius: size }}
      >
        <div id={text} className="curve-text">
          {text}
        </div>
      </div>
    </Link>
  );
};

import * as React from "react";
import { FunctionComponent } from "react";
import Link from "next/link";

import styles from "@/styles/Nav/Name.module.scss";

interface NameProps {
  text: string;
}

const Name: FunctionComponent<NameProps> = ({ text }) => {
  return (
    <Link href="/">
      <div className={styles.name}>
        <div className={styles.nameText}>{text}</div>
      </div>
    </Link>
  );
};

export default Name;

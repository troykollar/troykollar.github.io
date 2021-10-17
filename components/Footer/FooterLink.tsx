import * as React from "react";
import { FunctionComponent } from "react";
import { IconType } from "react-icons";
import styles from "@/styles/Footer.module.scss";

export interface FooterLinkProps {
  href: string;
  title: string;
  icon: IconType;
}

const FooterLink: FunctionComponent<FooterLinkProps> = ({
  href,
  title,
  icon,
}) => {
  const Icon = icon;
  return (
    <a href={href}>
      <div className={styles.footerLinkContainer}>
        <div>
          <Icon />
        </div>
        <div>{title}</div>
      </div>
    </a>
  );
};

export default FooterLink;

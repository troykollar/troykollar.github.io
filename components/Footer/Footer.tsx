import * as React from "react";
import { FunctionComponent } from "react";
import styles from "@/styles/Footer.module.scss";
import { RiLinkedinBoxFill } from "react-icons/ri";
import FooterLink, { FooterLinkProps } from "components/Footer/FooterLink";

interface FooterProps {
  links: FooterLinkProps[];
}

const Footer: FunctionComponent<FooterProps> = ({ links }) => {
  return (
    <div className={styles.footer}>
      <h4>Links</h4>
      <div className={styles.spacer}></div>
      <div className={styles.footerLinks}>
        {links.map((link) => (
          <FooterLink
            href={link.href}
            title={link.title}
            icon={link.icon}
            key={link.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;

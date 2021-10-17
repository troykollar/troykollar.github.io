import * as React from "react";
import { FunctionComponent } from "react";
import styles from "@/styles/Footer.module.scss";
import FooterLink, { FooterLinkProps } from "components/Footer/FooterLink";
import { RiLinkedinBoxFill, RiGithubFill, RiMailFill } from "react-icons/ri";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  const links = [
    {
      href: "https://www.linkedin.com/in/troy-kollar-571910158",
      title: "LinkedIn",
      icon: RiLinkedinBoxFill,
    },
    {
      href: "https://github.com/troykollar",
      title: "GitHub",
      icon: RiGithubFill,
    },
    {
      href: "mailto: troykollar@gmail.com",
      title: "Email",
      icon: RiMailFill,
    },
  ];
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

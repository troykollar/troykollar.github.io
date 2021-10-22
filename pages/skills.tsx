import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Skills/Skills.module.scss";
import SkillBubble from "components/Skills/SkillBubble";

import { RiVuejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiSvelte,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiNodedotjs,
  SiFigma,
  SiAdobexd,
  SiVisualstudiocode,
  SiArduino,
  SiRaspberrypi,
  SiApachecordova,
  SiFirebase,
  SiHeroku,
  SiGooglecloud,
  SiGit,
  SiMicrosoftexcel,
  SiLinux,
  SiMacos,
  SiWindows,
} from "react-icons/si";

const Skills: NextPage = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.skillSection}>
        <h1>Languages</h1>
        <div className={styles.skillBubbleContainer}>
          <SkillBubble icon={SiJavascript} title="Javascript" />
          <SkillBubble icon={SiTypescript} title="Typescript" />
          <SkillBubble icon={SiPython} title="Python" />
          <SkillBubble icon={SiCplusplus} title="C++" />
        </div>
      </div>
      <div className={styles.skillSection}>
        <h1>Frameworks</h1>
        <div className={styles.skillBubbleContainer}>
          <SkillBubble icon={RiVuejsFill} title="Vue" />
          <SkillBubble icon={RiReactjsFill} title="React" />
          <SkillBubble icon={SiSvelte} title="Svelte" />
          <SkillBubble icon={SiNodedotjs} title="NodeJS" />
        </div>
      </div>
      <div className={styles.skillSection}>
        <h1>Cloud Services</h1>
        <div className={styles.skillBubbleContainer}>
          <SkillBubble icon={SiFirebase} title="Firebase" />
          <SkillBubble icon={SiHeroku} title="Heroku" />
          <SkillBubble icon={SiGooglecloud} title="Cloud Functions" />
        </div>
      </div>
      <div className={styles.skillSection}>
        <h1>Tools</h1>
        <div className={styles.skillBubbleContainer}>
          <SkillBubble icon={SiGit} title="Git" />
          <SkillBubble icon={SiFigma} title="Figma" />
          <SkillBubble icon={SiAdobexd} title="Adobe XD" />
          <SkillBubble icon={SiVisualstudiocode} title="VS Code" />
          <SkillBubble icon={SiApachecordova} title="Cordova" />
          <SkillBubble icon={SiMicrosoftexcel} title="Excel" />
        </div>
      </div>
      <div className={styles.skillSection}>
        <h1>Hardware</h1>
        <div className={styles.skillBubbleContainer}>
          <SkillBubble icon={SiArduino} title="Arduino" />
          <SkillBubble icon={SiRaspberrypi} title="Raspberry Pi" />
        </div>
      </div>
      <div className={styles.skillSection}>
        <h1>Operating Systems</h1>
        <div className={styles.skillBubbleContainer}>
          <SkillBubble icon={SiLinux} title="Linux" />
          <SkillBubble icon={SiMacos} title="Mac OS" />
          <SkillBubble icon={SiWindows} title="Windows" />
        </div>
      </div>
    </div>
  );
};

export default Skills;

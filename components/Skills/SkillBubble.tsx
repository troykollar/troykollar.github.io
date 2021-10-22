import * as React from "react";
import { FunctionComponent } from "react";
import { IconType } from "react-icons";
import styles from "styles/Skills/SkillBubble.module.scss";

interface SkillBubbleProps {
  title: string;
  icon: IconType;
}

const SkillBubble: FunctionComponent<SkillBubbleProps> = ({ title, icon }) => {
  const Icon = icon;
  return (
    <div className={styles.skillBubble}>
      <div className={styles.icon}>
        <Icon size="2em" />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default SkillBubble;

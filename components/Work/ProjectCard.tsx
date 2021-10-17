import * as React from "react";
import { FunctionComponent } from "react";
import styles from "styles/Work/ProjectCard.module.scss";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  textBody: string[];
  img: StaticImageData;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  title,
  subtitle,
  textBody,
  img,
}) => {
  return (
    <div className={styles.projectCard}>
      <img src={img.src} />
      <div className={styles.textArea}>
        <div className={styles.title}>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
        {textBody.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

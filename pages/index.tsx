import Ima from "components/Ima";
import type { NextPage } from "next";
import Link from "next/dist/client/link";
import styles from "../styles/Home/Home.module.scss";

import selfImg from "../assets/self.jpg";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Ima
        text={[
          "Troy Kollar.",
          "a web developer.",
          "a software engineer.",
          "a quick learner.",
          "a Node JS developer.",
          "a leader.",
          "adaptable.",
          "A Vue JS developer.",
          "eager to learn.",
          "a React deveoper.",
          "a Python developer.",
          "a gamer.",
          "a hobbyist.",
        ]}
      />
      <img
        className={`noselect ${styles.selfImg}`}
        src={selfImg.src}
        alt="A very handsome individual."
      />
      <section className={styles.description}>
        <p>
          My name is Troy Kollar. I am a full stack developer working primarily
          in Typescript and Javascript.
        </p>

        <p>
          During my time at <a href="http://www.darkoinc.com">Darko</a> I've
          produced high quality frontend and backend software for Amazon,
          Google, GE, Roku, and countless other brands.
        </p>

        <p>
          My educational background is in Electrical Engineering, but after
          college I was able to experiment with some web development, and have
          been hooked ever since.
        </p>

        <p>
          On the frontend I have experience with Vue, React, and Svelte, using
          both Javascript and Typescript.
        </p>

        <p>
          On the backend I have used NodeJS to create backend logic for dozens
          of projects, some for use cases you may not expect.
        </p>

        <p>
          You can read more about the work I've done on the{" "}
          <Link href="/work">Work</Link>&nbsp;tab.
        </p>
      </section>
    </div>
  );
};

export default Home;

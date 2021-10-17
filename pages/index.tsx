import Ima from "components/Ima";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home/Home.module.scss";

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
          "a friend.",
          "a React deveoper.",
          "kind of an idiot sometimes.",
          "a Python developer.",
          "a gamer.",
          "a hobbyist.",
        ]}
      />
    </div>
  );
};

export default Home;

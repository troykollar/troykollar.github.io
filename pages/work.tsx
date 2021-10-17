import Footer from "components/Footer/Footer";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Work/Work.module.scss";
import ProjectCard from "components/Work/ProjectCard";

import deadboltImg from "assets/projects/deadbolt.jpeg";
import capImg from "assets/projects/cap.jpeg";

const Home: NextPage = () => {
  return (
    <div className={styles.work}>
      <ProjectCard
        title="Project Deadbolt"
        subtitle="Darko"
        textBody={[
          "Project Deadbolt was a project created in collaboration with Amazon's \
          TechOps team. It is a phone locker that allows Amazon and Whole Foods \
          employees to 'rent' out phones to fulfill online orders.",
          "I wrote all of the on-device software for this project. Which includes \
          a frontend UI built in Vue JS, and a NodeJS server written in Typescript, \
          which handles all of the logic and device communication.",
          "The locker allows a user to scan their employee badge to authenticate, \
          then finds the shelf with the most fully charged phones and opens that \
          shelf. The locker then keeps track of which/how many phones are taken, \
          and stores that information locally, and posts it to a AWS lambda endpoints \
          that were created by the Amazon TechOps team.",
          "Project Deadbolt allowed Amazon and Whole Foods to dramatically reduce the \
          amount of device theft involved in their online ordering process.",
        ]}
        img={deadboltImg}
      />
      <ProjectCard
        title="Amazon CAP"
        subtitle="Darko"
        textBody={[
          "The Amazon CAP (Customer Assistance Portal) project is another project \
          that was done for the Amazon TechOps team. CAP exists in Amazon Hub Stores,\
          and serves as a self-serve kiosk to instruct customers on their next steps \
          to complete a pickup or return.",
          "In the case that the customer needs assistance from a store employee, they \
          are entered into a queue, which is displayed on the TV screen. This also \
          communicates with a Philips Hue bulb in the back of house to alert store employees \
          that a customer is in need of assitance.",
          "In addition to the in store functions, the kiosk also communicates these events \
          to AWS lambda endpoints that were created by the Amazon TechOps team so they can \
          gather analytics on various aspects of this customer interaction.",
          "I wrote all of the on-device software for the CAP project, using VueJS for the \
          frontend and NodeJS to to handle the backend logic.",
        ]}
        img={capImg}
      />
      <Footer />
    </div>
  );
};

export default Home;

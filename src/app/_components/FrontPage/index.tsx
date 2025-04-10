"use client";

import styles from "./index.module.css";
import { Header } from "../shared/Header/Header";
import { theme } from "../../../styles/index";
import { Background } from "../shared/Background/Background";
import { Navbar } from "../shared/Navbar/Navbar";
import { Course } from "./course";
export const FrontPage: React.FC = () => {


  return (
    <div className={styles.container}>
      <Background />
      <Header
        title="Quiz"
        subtitle="Test your knowledge!"
        color={theme.colors.primary}

      />

      <div className={styles.subContainer}>


          <Course
            bgColour = {theme.colors.faintYellow}
            borderColour={theme.colors.warmYellow}
            title="Simile"
            progress={0}
            totalProgress={15} urlToCourse={"/quiz/simile"}
          />

          <Course
            bgColour = {theme.colors.faintBlue}
            borderColour={theme.colors.coolAccentBg}


            title="Metaphor"
            progress={2}
            totalProgress={15} urlToCourse={"/quiz/metaphor"}
          />

          <Course
            bgColour= {theme.colors.faintCoolDark}
            borderColour={theme.colors.coolDark}


            title="Idiom"
            progress={15}
            totalProgress={15} urlToCourse={"/quiz/idiom"}
          />

          <Course
            bgColour = {theme.colors.white}
            borderColour={theme.colors.coolDark}


            title="Random"
            progress={0}
            totalProgress={15} urlToCourse={"/quiz/random"}
          />

      </div>
      <Navbar />
    </div>
  );
};

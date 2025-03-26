"use client";

import styles from "./index.module.css";
import { Header } from "../shared/Header/Header";
import { TypeLabel } from "../shared/TypeLabel/TypeLabel";
import { theme, labelStyles } from "../../../styles/index";
import { Background } from "../shared/Background/Background";
import { Navbar } from "../shared/Navbar/Navbar";
import { useState, useEffect } from "react";
import expressions from "../../data/quiz.json";
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

            title="Simile"
            progress={0}
            totalProgress={15} urlToCourse={""}
          />

          <Course

            title="Metaphor"
            progress={2}
            totalProgress={15} urlToCourse={""}
          />

          <Course

            title="Idiom"
            progress={15}
            totalProgress={15} urlToCourse={""}
          />

          <Course

            title="Random"
            progress={0}
            totalProgress={15} urlToCourse={""}
          />

      </div>
      <Navbar />
    </div>
  );
};

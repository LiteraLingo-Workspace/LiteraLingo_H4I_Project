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

            title="Course 1"
            progress={0}
            totalProgress={0} urlToCourse={""}
          />

          <Course

            title="Course 1"
            progress={0}
            totalProgress={0} urlToCourse={""}
          />

          <Course

            title="Course 1"
            progress={0}
            totalProgress={0} urlToCourse={""}
          />

          <Course

            title="Course 1"
            progress={0}
            totalProgress={0} urlToCourse={""}
          />

      </div>
      <Navbar />
    </div>
  );
};

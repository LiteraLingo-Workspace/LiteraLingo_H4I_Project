"use client";

import styles from "./index.module.css";
import { Header } from "../shared/Header/Header";
import { TypeLabel } from "../shared/TypeLabel/TypeLabel";
import { theme } from "../../../styles/index";
import { StatusInfo } from "./StatusInfo/index";
import { Prompt } from "./Prompt/index";
import { MultipleChoice } from "./MultipleChoice/index";
import { Background } from "../shared/Background/Background";
import { Navbar } from "../shared/Navbar/Navbar";
import { useState } from "react";
import expressions from "../../data/quiz.json";

const maxQuestions = 15;
const numberOfChoices = 3;

type JsonData = Record<string, string>;

type QuestionMC = {
  type: string,
  expression: string;
  description: string;
  alternatives: string[];
}

export const QuizPage: React.FC = () => {
  // set state var for prompt and question choices (group together)
  const [questionInfo, setQuestionInfo] = useState<QuestionMC>();

  // set state var for the current number of questions completed
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);

  // pick a random question (there can be repeats for now)
  const getRandomQuestion = (expressionList: JsonData) => {
  };

  return (
    <div className={styles.container}>
      <Background />
      <Header
        title="Quiz"
        color={theme.colors.primary}
        typeLabel={
          <TypeLabel
            color={theme.colors.warmYellow}
            bg={theme.colors.faintYellow}
            text="Simile"
          />
        }
      />
      <div className={styles.subContainer}>
        <StatusInfo />
        <Prompt />
        <MultipleChoice />
      </div>
      <Navbar />
    </div>
  );
};

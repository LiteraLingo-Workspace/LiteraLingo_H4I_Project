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
const allExpressions = expressions as QuestionMC[];

type JsonData = Record<string, string>;

type QuestionMC = {
  id: number,
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

  // generate a list of questions
  const getRandomQuestions = (expressionList: JsonData) => {
    let questionList = [] as QuestionMC[];
    while (questionList.length < maxQuestions) {

    }
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

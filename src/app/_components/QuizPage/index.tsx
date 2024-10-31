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
import { useState, useEffect } from "react";
import expressions from "../../data/quiz.json";

type QuestionMC = {
  id: number,
  type: string,
  expression: string;
  description: string;
  alternatives: string[];
}

const maxQuestions = 15;
const allExpressions = expressions as QuestionMC[];

export const QuizPage: React.FC = () => {
  const [sessionQuestions, setSessionQuestions] = useState<QuestionMC[]>([]);

  // set state var for the current number of questions completed
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);

  const handleCheckAnswer = () => {
    if (true) {
      console.log("Correct!");
    } else {
      console.log("Incorrect!");
    }
  };

  // generate a list of questions
  useEffect(() => {
     console.log("component mounted");
     const getRandomQuestions = (expressionList: QuestionMC[]) => {
       let questionList = [] as QuestionMC[];
       const usedIDs = new Set<number>();

       while (questionList.length < maxQuestions && questionList.length < expressionList.length) {
         const randomIndex = Math.floor(Math.random() * expressionList.length);
         if (!usedIDs.has(randomIndex)) {
           if (expressionList[randomIndex]) {
             questionList.push(expressionList[randomIndex]);
             usedIDs.add(randomIndex); 
           }
         }
       }
       return questionList;
     };

     const generatedQuestions = getRandomQuestions(allExpressions);
     setSessionQuestions(generatedQuestions);
   }, []);

  console.log(sessionQuestions);

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
        <MultipleChoice
          description={"hello"}
          choices={["a", "b", "c"]}
        />
      </div>
      <Navbar />
    </div>
  );
};

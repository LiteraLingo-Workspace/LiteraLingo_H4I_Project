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
  const [sessionQuestions, setSessionQuestions] = useState<QuestionMC[]>();
  const [completedQuestions, setCompletedQuestions] = useState<number>(0);

  // set state var to index sessionQuestions
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);

  const updateQuestionNumber = () => {
    if (currentQuestionNumber < maxQuestions - 1) {
      setCurrentQuestionNumber(currentQuestionNumber + 1);
    }
    if (completedQuestions < maxQuestions ) {
      setCompletedQuestions(completedQuestions + 1);
    }
  };
  
  // generate a list of questions
  useEffect(() => {
     console.log("component mounted");
     const getRandomQuestions = (expressionList: QuestionMC[]) => {
       let questionList = [] as QuestionMC[];
       const usedIDs = new Set<number>();

       // create a list of unique questions
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
            text={sessionQuestions ? sessionQuestions[currentQuestionNumber]!.type : "Loading"}
          />
        }
      />
      <div className={styles.subContainer}>
        <StatusInfo completed={completedQuestions} total={sessionQuestions ? sessionQuestions.length : 0} />
        {sessionQuestions && (
          <>
            <Prompt description={sessionQuestions[currentQuestionNumber]!.description} />
            <MultipleChoice
              description={sessionQuestions[currentQuestionNumber]!.description}
              choices={sessionQuestions[currentQuestionNumber]!.alternatives}
              onQuestionSubmit={updateQuestionNumber}
              shouldDisable={currentQuestionNumber === sessionQuestions.length}
            />
          </>
        )}
      </div>
      <Navbar />
    </div>
  );
};

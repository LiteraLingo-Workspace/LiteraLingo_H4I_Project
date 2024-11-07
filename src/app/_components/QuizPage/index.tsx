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
  isCorrect: boolean;
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

  const handleAnswerClick = (currentQuestionNumber: number, isCorrect: boolean) => {
    // function to update that this is correct
    // may be slightly cumbersome to update the entire array just
    // to update one field 
    // alternative: create a new state array that tracks 
    // whether each question number was correct (slightly less data)
    console.log(currentQuestionNumber, isCorrect);
    if (sessionQuestions) {
      setSessionQuestions((prevQuestions  = []) => 
        prevQuestions.map((question, index) => 
          // set question to correct or false
          index === currentQuestionNumber 
            ? {...question, isCorrect: true} 
            : {...question}
      ))
    }
    console.log("choice correct: ", isCorrect);
    updateQuestionNumber();
  }
  
  // generate a list of questions
  useEffect(() => {
     console.log("component mounted");
     const getRandomQuestions = (expressionList: QuestionMC[]) => {
       const questionList = [] as QuestionMC[];
       const usedIDs = new Set<number>();

       // create a list of unique questions
       while (questionList.length < maxQuestions && questionList.length < expressionList.length) {
         const randomIndex = Math.floor(Math.random() * expressionList.length);
         if (!usedIDs.has(randomIndex)) {
           if (expressionList[randomIndex]) {
            // add to the list with a correct field
            questionList.push({...expressionList[randomIndex], isCorrect: false});
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
            <Prompt expression={sessionQuestions[currentQuestionNumber]!.expression} />
            <MultipleChoice
              description={sessionQuestions[currentQuestionNumber]!.description}
              choices={sessionQuestions[currentQuestionNumber]!.alternatives}
              currentQuestionNumber={currentQuestionNumber}
              onQuestionSubmit={handleAnswerClick}
              shouldDisable={completedQuestions === sessionQuestions.length}
            />
          </>
        )}
      </div>
      <Navbar />
    </div>
  );
};

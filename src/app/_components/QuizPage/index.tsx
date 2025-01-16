"use client";

import styles from "./index.module.css";
import { Header } from "../shared/Header/Header";
import { TypeLabel } from "../shared/TypeLabel/TypeLabel";
import { theme, labelStyles } from "../../../styles/index";
import { StatusInfo } from "./StatusInfo/index";
import { Prompt } from "./Prompt/index";
import { MultipleChoice } from "./MultipleChoice/index";
import { Background } from "../shared/Background/Background";
import { Navbar } from "../shared/Navbar/Navbar";
import { useState, useEffect } from "react";
import { Review } from "./Review/Review";
import expressions from "../../data/quiz.json";

export type QuestionMC = {
  id: number,
  type: keyof typeof labelStyles;
  expression: string;
  description: string;
  alternatives: string[];
  selectedAnswer: string | null;
}

const maxQuestions = 5;
const allExpressions = expressions as QuestionMC[];

export const QuizPage: React.FC = () => {
  const [sessionQuestions, setSessionQuestions] = useState<QuestionMC[]>();
  const [completedQuestions, setCompletedQuestions] = useState<number>(0);

  // set state var to index sessionQuestions
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  const [showReview, setShowReview] = useState<boolean>(false);

  const updateQuestionNumber = () => {
    if (currentQuestionNumber < maxQuestions - 1) {
      setCurrentQuestionNumber(currentQuestionNumber + 1);
    }
  };

  console.log(sessionQuestions);

  const handleQuestionCheck = (currentQuestionNumber: number, choice: string | null) => {
    // function to update that this is correct
    // may be slightly cumbersome to update the entire array just
    // to update one field 
    if (sessionQuestions) {
      setSessionQuestions((prevQuestions  = []) => 
        prevQuestions.map((question, index) => 
          // set the user choice for this question
          index === currentQuestionNumber 
            ? {...question, selectedAnswer: choice} 
            : {...question}
      ))
      console.log(`Question number ${currentQuestionNumber}: ${choice}`);
      setCompletedQuestions(completedQuestions + 1);
    }
  } 
  // generate a list of questions
  useEffect(() => {
    const randomizeChoices = (description: string, choices: string[]) => {
      const updatedChoices = [...choices];
      // shuffle the array
      let currentIndex = updatedChoices.length,
        randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
        const currentChoice = updatedChoices[currentIndex];
        const randomChoice = updatedChoices[randomIndex];
  
        updatedChoices[currentIndex] = randomChoice!;
        updatedChoices[randomIndex] = currentChoice!;
      }
  
      updatedChoices.splice(0, 1); // randomly discard the last element
      const insertIndex = Math.floor(Math.random() * (updatedChoices.length + 1));
      updatedChoices.splice(insertIndex, 0, description);
  
      return updatedChoices;
    };  

    const getRandomQuestions = (expressionList: QuestionMC[]) => {
      const questionList = [] as QuestionMC[];
      const usedIDs = new Set<number>();
    
      // create a list of unique questions
      while (questionList.length < maxQuestions && questionList.length < expressionList.length) {
        const randomIndex = Math.floor(Math.random() * expressionList.length);
        if (!usedIDs.has(randomIndex)) {
          if (expressionList[randomIndex]) {
            // add to the list with randomized choices
            const question = { ...expressionList[randomIndex] };
            question.alternatives = randomizeChoices(question.description, question.alternatives);
            questionList.push(question);
            usedIDs.add(randomIndex);
          }
        }
      }
      return questionList;
    };

    const generatedQuestions = getRandomQuestions(allExpressions);
    setSessionQuestions(generatedQuestions);
  }, []);

  if (sessionQuestions && showReview) {
    return (
      <div className={styles.container}>
        <Review  
          sessionQuestions={sessionQuestions}
        />
        <Navbar />
    </div>
    )
  }

  return (
    <div className={styles.container}>
      <Header
        title="Quiz"
        color={theme.colors.primary}
        typeLabel={
          <TypeLabel
            color={sessionQuestions 
              ? labelStyles[sessionQuestions[currentQuestionNumber]!.type].color
              : labelStyles.Loading.color}
            bg={sessionQuestions 
              ? labelStyles[sessionQuestions[currentQuestionNumber]!.type].bg
              : labelStyles.Loading.bg}
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
              onQuestionCheck={handleQuestionCheck}
              onNextQuestion={sessionQuestions && completedQuestions == maxQuestions ? () => setShowReview(true) : updateQuestionNumber}
            />
          </>
        )}
      </div>
      <Navbar />
    </div>
  );
};

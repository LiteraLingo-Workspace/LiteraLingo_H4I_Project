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

// match format of JSON
// it is possible for there to be more alternatives
// than there are choices
export type QuizItem = {
  id: number,
  type: keyof typeof labelStyles;
  expression: string;
  description: string;
  alternatives: string[];
}

// need the choices intermixed with the correct answer
// could potentially add more attributes
// depending on how we might want data saved
// number of choices is fixed
export type QuizItemMC = {
  id: number,
  type: keyof typeof labelStyles;
  expression: string;
  choices: string[];
  correctAnswer: string;
  selectedAnswer: string | null;
}

const MAX_QUESTIONS = 5;
const ALL_EXPRESSIONS = expressions as QuizItem[];
const NUM_OF_CHOICES = 3;

export const QuizPage: React.FC = () => {
  const [sessionQuestions, setSessionQuestions] = useState<QuizItemMC[]>();
  const [completedQuestions, setCompletedQuestions] = useState<number>(0);
  // set state var to index sessionQuestions
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  const [showReview, setShowReview] = useState<boolean>(false);
  // keep track of if user has a selected answer (for cache purposes)

  const updateQuestionNumber = () => {
    if (currentQuestionNumber < MAX_QUESTIONS) {
      setCurrentQuestionNumber(currentQuestionNumber + 1);
    }
    if (currentQuestionNumber == MAX_QUESTIONS - 1) {
      setShowReview(true);
    }
  };

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
    const savedSession = localStorage.getItem("quizSession");
    if (savedSession) {
      const parsedSession = JSON.parse(savedSession);
      setSessionQuestions(parsedSession.sessionQuestions);
      setCompletedQuestions(parsedSession.completedQuestions);
      setCurrentQuestionNumber(parsedSession.currentQuestionNumber);
      setShowReview(parsedSession.showReview);
    } else {
      const generatedQuestions = getRandomQuestions(ALL_EXPRESSIONS);
      setSessionQuestions(generatedQuestions);
    }
  }, []);

  useEffect(() => {
    // save to local storage to persist across refresh
    if (sessionQuestions) {
      localStorage.setItem("quizSession", JSON.stringify({
        sessionQuestions,
        completedQuestions,
        currentQuestionNumber,
        showReview,
      }))
    }
  })


  const randomizeChoices = (description: string, alternatives: string[], numOfChoices: number) => {
    const updatedChoices = [...alternatives];
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

    updatedChoices.splice(numOfChoices - 1);
    const insertIndex = Math.floor(Math.random() * (updatedChoices.length + 1));
    updatedChoices.splice(insertIndex, 0, description);

    return updatedChoices;
  };  

  const getRandomQuestions = (expressionList: QuizItem[]) => {
    const questionList = [] as QuizItemMC[];
    const usedIDs = new Set<number>();
  
    // create a list of unique questions
    while (questionList.length < MAX_QUESTIONS && questionList.length < expressionList.length) {
      const randomIndex = Math.floor(Math.random() * expressionList.length);
      if (!usedIDs.has(randomIndex)) {
        if (expressionList[randomIndex]) {
          // randomize choices and convert into MC format
          // this is to keep the type for the input data unaffected
          // when trying to mix choices 
          const choices = randomizeChoices(expressionList[randomIndex].description, expressionList[randomIndex].alternatives, NUM_OF_CHOICES);
          const newQuizItemMC = {
            id: randomIndex,
            type: expressionList[randomIndex].type,
            expression: expressionList[randomIndex].expression,
            correctAnswer: expressionList[randomIndex].description,
            choices: choices,
            selectedAnswer: null,
          } as QuizItemMC;
          questionList.push(newQuizItemMC);
          usedIDs.add(randomIndex);
        }
      }
    }
    return questionList;
  };
  
  if (currentQuestionNumber == MAX_QUESTIONS && sessionQuestions && showReview) {
    return (
      <div className={styles.container}>
        <Background />
        <Review  
          sessionQuestions={sessionQuestions}
        />
        <Navbar />
    </div>
    )
  }

  console.log(currentQuestionNumber);

  return (
    <div className={styles.container}>
      <Background />
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
              description={sessionQuestions[currentQuestionNumber]!.correctAnswer}
              choices={sessionQuestions[currentQuestionNumber]!.choices}
              currentQuestionNumber={currentQuestionNumber}
              onQuestionCheck={handleQuestionCheck}
              onNextQuestion={updateQuestionNumber}
            />
          </>
        )}
      </div>
      <Navbar />
    </div>
  );
};

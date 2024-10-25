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
import data from "../../data/translations.json";
import { useState } from "react";

const maxQuestions = 15;
const numberOfChoices = 3;
const translations: JsonData = JSON.parse(JSON.stringify(data)) as JsonData;

type JsonData = Record<string, string>;

type QuestionMC = {
  prompt: string,
  correctChoiceIndex: number,
  choices: string[],
}

export const QuizPage: React.FC = () => {
  // set state var for prompt and question choices (group together)
  const [questionInfo, setQuestionInfo] = useState<QuestionMC>();

  // set state var for the current number of questions completed
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);

  // pick choices and return array of choices (with correct choice randomly placed at a position)
  const generateChoices = (prompt: string, correctChoiceIndex: number) => {
    const correctChoice = translations[prompt!] as string;   
    let choices = [];
    let choiceNumber = 0;
    while (choiceNumber < numberOfChoices  - 1) {
      let choice = correctChoice;
      // get a random choice
      while (choice === correctChoice) {
        const randomPick = Object.values(translations)[Math.floor(Math.random() * Object.values(translations).length)]
        if (randomPick !== correctChoice) choice = randomPick!;
        console.log(randomPick);
      }
      choices.push(choice);
      choiceNumber++;
    }
    // insert correct choice at right index
    choices.splice(correctChoiceIndex, 0, correctChoice);
    return choices;
  }

  // pick a random question (there can be repeats for now)
  const generateQuestion = () => {
    // pick random prompt
    const prompt = Object.keys(translations)[Math.floor(Math.random() * Object.keys(translations).length)]
    const correctChoiceIndex = Math.floor(Math.random() * numberOfChoices); //  
    
    const choices = generateChoices(prompt!, correctChoiceIndex);

    const questionInfo = {
      prompt,
      correctChoiceIndex,
      choices,
    }
    console.log(questionInfo);
  };

  generateQuestion();

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

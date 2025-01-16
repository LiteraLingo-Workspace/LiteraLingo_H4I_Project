"use client";

import styles from "./QuizOptions.module.css";
import { labelStyles } from "../../../../styles/index";
import { Choice } from "../Choice";
import { useState, useEffect } from "react";

export type QuestionMC = {
  id: number,
  type: keyof typeof labelStyles;
  expression: string;
  description: string;
  alternatives: string[];
  selectedAnswer: string | undefined;
}

interface QuizOptionsProps {
    isChecked: boolean;
    isClickable: boolean;
    onSelection?: (choice:string) => void; // return the selected choice
    description: string;
    choices: string[];
}

export const QuizOptions: React.FC<QuizOptionsProps> = ({ 
    isChecked, 
    isClickable,
    onSelection,
    description,
    choices,
}) => {
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

    const handleChoiceClick = (choice: string) => {
        setSelectedChoice(choice);
        console.log(choice);
        if (onSelection) {
          onSelection(choice); // send choice back to parent component
        }
    };

    return (
    <div className={styles.container}>
        <p className={styles.questionLabel}>What does this mean?</p>
        <div className={styles.choicesContainer}>
          {choices.map((choice, index) => (
            <Choice
              key={index}
              text={choice}
              isCorrect={choice === description}
              isChecked={isChecked}
              selected={selectedChoice === choice}
              onClick={() => handleChoiceClick(choice)}
              disabled={!isClickable}
            />
          ))}
        </div>
    </div>
  );
};

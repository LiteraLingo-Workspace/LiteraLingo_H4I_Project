"use client";

import styles from "./MultipleChoiceScreen.module.css";
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

interface QuestionProps {
    isChecked: boolean;
    isClickable: boolean;
    handleSelectionClick?: () => string; // Return the selected choice
    description: string;
    choices: string[];
}

export const MultipleChoiceScreen: React.FC<QuestionProps> = ({ 
    isChecked, 
    isClickable,
    handleSelectionClick,
    description,
    choices,
}) => {
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

    const handleChoiceClick = (choice: string) => {
        setSelectedChoice(choice);
        if (handleSelectionClick) {
            handleSelectionClick(); // Send choice back to parent component
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
              disabled={isClickable}
            />
          ))}
        </div>
    </div>
  );
};

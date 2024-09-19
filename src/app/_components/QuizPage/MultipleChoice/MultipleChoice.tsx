'use client';

import { useState } from "react";
import { Choice } from "../Choice";
import styles from "./MultipleChoice.module.css";
import { text } from "stream/consumers";

export const MultipleChoice: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isCorrectChoice, setIsCorrectChoice] = useState<boolean | null>(null);

  const textChoices = ["Her promises can be believed.", "Her promises cannot be trusted.", "Her words sound challenging to understand."];

  const handleChoiceClick = (choice: string, isCorrect: boolean) => {
    setSelectedChoice(choice);
    setIsCorrectChoice(isCorrect);
  }

  const handleCheckAnswer = () => {
    if (isCorrectChoice) {
      console.log("Correct!");
    } else {
      console.log("Incorrect!");
    }
  }

  return (
    <>
      <div className={styles.container}>
        <p className={styles.questionLabel}>What does this mean?</p>
        <div className={styles.choicesContainer}>

          <Choice 
            text={textChoices[0]!} 
            isCorrect={true}
            selected={selectedChoice === textChoices[0]}
            onClick={() => handleChoiceClick(textChoices[0]!, true)}
          />
          <Choice 
            text={textChoices[1]!}
            isCorrect={false}
            selected={selectedChoice === textChoices[1]}
            onClick={() => handleChoiceClick(textChoices[1]!, false)}
          />
          <Choice 
            text={textChoices[2]!}
            isCorrect={false}
            selected={selectedChoice === textChoices[2]}
            onClick={() => handleChoiceClick(textChoices[2]!, false)}
          />
          
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}  onClick={handleCheckAnswer}>Check Answer</button>
      </div>
    </>
  );
};

'use client';

import { useState } from "react";
import { Choice } from "../Choice";
import styles from "./MultipleChoice.module.css";

export const MultipleChoice: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isCorrectChoice, setIsCorrectChoice] = useState<boolean | null>(null);

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
            text="Her promises can be believed." 
            isCorrect={true}
            selected={selectedChoice === "Her promises can be believed."}
            onClick={() => handleChoiceClick("Her promises can be believed.", true)}
          />
          <Choice 
            text="Her promises cannot be trusted." 
            isCorrect={false}
            selected={selectedChoice === "Her promises cannot be trusted."}
            onClick={() => handleChoiceClick("Her promises cannot be trusted.", false)}
          />
          <Choice 
            text="Her words sound challenging to understand." 
            isCorrect={false}
            selected={selectedChoice === "Her words sound challenging to understand."}
            onClick={() => handleChoiceClick("Her words sound challenging to understand.", false)}
          />
          
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}  onClick={handleCheckAnswer}>Check Answer</button>
      </div>
    </>
  );
};

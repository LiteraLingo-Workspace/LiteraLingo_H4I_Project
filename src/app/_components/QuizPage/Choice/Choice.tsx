import React from "react";
import styles from "./Choice.module.css";

interface ChoiceProps {
  text: string;
  isCorrect: boolean;
  selected: boolean;
  onClick: () => void;
}

export const Choice: React.FC<ChoiceProps> = ({ text, selected, onClick }) => {
  return (
    <div
      className={
        selected ? styles.selectedChoiceContainer : styles.choiceContainer
      }
      onClick={onClick}
    >
      <p className={selected ? styles.selectedChoiceText : styles.choiceText}>
        {text}
      </p>
    </div>
  );
};

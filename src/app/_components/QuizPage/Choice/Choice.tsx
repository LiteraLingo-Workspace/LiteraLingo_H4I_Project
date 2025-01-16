import React from "react";
import styles from "./Choice.module.css";

interface ChoiceProps {
  text: string;
  isCorrect: boolean;
  isChecked: boolean;
  isReview?: boolean;
  selected: boolean;
  onClick: () => void;
  disabled: boolean;
}

export const Choice: React.FC<ChoiceProps> = ({
  text,
  selected,
  isCorrect,
  isChecked,
  isReview,
  onClick,
  disabled,
}) => {
  return (
    <div
      className={`${selected ? styles.selectedChoiceContainer : styles.choiceContainer} 
                ${((isChecked && (selected || isCorrect)) || (isReview && (selected || isCorrect))) 
                  && (isCorrect ? styles.correctChoice : styles.incorrectChoice)}`}
      onClick={disabled ? undefined : onClick}
    >
      <p
        className={
          selected && !isChecked && !isReview
            ? styles.selectedChoiceText
            : styles.choiceText
        }
      >
        {text}
      </p>
    </div>
  );
};

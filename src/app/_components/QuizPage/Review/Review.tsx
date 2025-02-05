import styles from "./Review.module.css";
import { QuestionMC } from "../index";
import { Header } from "../../shared/Header/Header";
import { QuizOptions } from "../QuizOptions/QuizOptions";
import { Prompt } from "../Prompt/Prompt";
import { TypeLabel } from "../../shared/TypeLabel/TypeLabel";
import { labelStyles } from "~/styles";
import { useState } from "react";
import { theme } from "~/styles";

interface ReviewProps {
  sessionQuestions: QuestionMC[];
}

export const Review: React.FC<ReviewProps> = ({ 
  sessionQuestions, 
}) => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  const currentQuestion = sessionQuestions[currentQuestionNumber];

  console.log(sessionQuestions);

  const handlePrevious = () => {
    if (currentQuestionNumber > 0) {
      setCurrentQuestionNumber(currentQuestionNumber - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionNumber < sessionQuestions.length - 1) {
      setCurrentQuestionNumber(currentQuestionNumber + 1);
    }
  };

  return (
    <>
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
      <div className={styles.reviewLabelContainer}>
        <p className={styles.questionLabel} aria-label="Review answers">Review Answers</p>
      </div>
        {currentQuestion && (
          <>
            <Prompt expression={sessionQuestions[currentQuestionNumber]!.expression} />
            <QuizOptions
              isChecked={false}
              isClickable={false} 
              isReview={true}
              selected={currentQuestion.selectedAnswer}
              description={currentQuestion.description}
              choices={currentQuestion.alternatives}
            />
          </>
        )}
        <div className={styles.buttonContainer}>
            <button className={styles.circleButton} aria-label="Go to previous" onClick={handlePrevious} disabled={currentQuestionNumber === 0}>
            &lt;
            </button>
            <button className={styles.button} aria-label="Continue Practicing">
              Continue Practicing
            </button>
            <button className={styles.circleButton} aria-label="Go to next" onClick={handleNext} disabled={currentQuestionNumber === sessionQuestions.length - 1}>
            &gt;
            </button>
      </div>
    </div>
  </>
  );
};

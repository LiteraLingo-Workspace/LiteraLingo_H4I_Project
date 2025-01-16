import styles from "./Review.module.css";
import { QuestionMC } from "../index";
import { Background } from "../../LandingPage/Background";
import { Header } from "../../shared/Header/Header";
import { QuizOptions } from "../QuizOptions/QuizOptions";
import { Prompt } from "../Prompt/Prompt";
import { TypeLabel } from "../../shared/TypeLabel/TypeLabel";
import { labelStyles } from "~/styles";
import { useState } from "react";
import { Navbar } from "../../shared/Navbar/Navbar";
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
          color={labelStyles.Loading.color}
          bg={sessionQuestions 
            ? labelStyles[sessionQuestions[currentQuestionNumber]!.type].bg
            : labelStyles.Loading.bg}
          text={sessionQuestions ? sessionQuestions[currentQuestionNumber]!.type : "Loading"}
        />
      }
    />
    <div className={styles.subContainer}>
      <div className={styles.review}>
        <p className={styles.questionLabel}>Review Answers</p>
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
        <div className={styles.navigationButtons}>
        <button onClick={handlePrevious} disabled={currentQuestionNumber === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentQuestionNumber === sessionQuestions.length - 1}>
          Next
        </button>
      </div>
    </div>
  </>
  );
};

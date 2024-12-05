import styles from "./Review.module.css";
import { QuestionMC } from "../index";
import { QuestionReview } from "../Review/QuestionReview";

interface Review {
  sessionQuestions: QuestionMC[];
}

export const Review: React.FC<Review> = ({ sessionQuestions }) => {
  const renderQuestions = () =>
    sessionQuestions.map((question) => (
      <QuestionReview key={question.id} {...question} />
    ));

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.scrollableList}>{renderQuestions()}</div>
    </div>
  );
};

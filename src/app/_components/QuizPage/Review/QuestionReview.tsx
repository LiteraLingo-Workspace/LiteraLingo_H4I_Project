import styles from "./Review.module.css";
import { QuestionMC } from "../index";

export const QuestionReview: React.FC<QuestionMC> = ({   
  id,
  type,
  expression,
  description,
  alternatives,
  selectedAnswer 
}) => {
    
  return (
    <div className={styles.questionContainer}>
      <p>{description}</p>
    </div>
  );
};

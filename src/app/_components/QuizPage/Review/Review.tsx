import styles from "./Review.module.css";
import { QuestionMC } from "../index";

interface Review {
    sessionQuestions: QuestionMC[],
}
  
export const Review: React.FC<Review> = ({ sessionQuestions }) => {
    

  return (
    <div className={styles.container}>
      <p>hello there</p>
    </div>
  );
};

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
    <div>
      <p><strong>Type:</strong> {type}</p>
      <p><strong>Expression:</strong> {expression}</p>
      <p><strong>Description:</strong> {description}</p>
      <ul>
        <strong>Alternatives:</strong>
        {alternatives.map((alt, index) => (
          <li key={index}>
            {alt}
            {alt === selectedAnswer && <span> (Selected)</span>}
          </li>
        ))}
      </ul>
      <p>---</p>
    </div>
  );
};
